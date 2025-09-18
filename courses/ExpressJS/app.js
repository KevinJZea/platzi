require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fs = require('fs');
const path = require('path');
const { validateUser, getHightestId, doesUserExist } = require('./utils');
const usersFilePath = path.join(__dirname, 'users.json');

const ErrorHandler = require('./middlewares/errorHandler');
const LoggerMiddleware = require('./middlewares/logger');
const authenticateToken = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ErrorHandler);
app.use(LoggerMiddleware);

app.get('/', (req, res) => {
  res.send(`
    <h1>Express.js Course</h1>
    <p>This is a Node.js app with Express.js.</p>
    <p>It is running on port ${PORT}.</p>
`);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Show user data with ID: ${userId}`);
});

app.get('/search', (req, res) => {
  const terms = req.query.s || 'Not specified';

  const category = req.query.category || 'All';

  res.send(`
    <h2>Search results:</h2>
    <p>Terms: ${terms}</p>
    <p>Category: ${category}</p>
  `);
});

app.post('/form', (req, res) => {
  const name = req.body.name || 'Anonymous';
  const email = req.body.email || 'Not given';
  res.json({ message: 'Data received', data: { name, email } });
});

app.post('/api/data', (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length === 0)
    return res.status(400).json({ error: 'No data received' });

  res.status(201).json({ message: 'JSON data received', data });
});

app.get('/users', (req, res) => {
  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ error: 'Unable to establish a data connection.' });

    const users = JSON.parse(data);
    res.json(users);
  });
});

app.post('/users', (req, res) => {
  const newUser = req.body;

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err)
      return res.status(500).json({ error: 'Error in data connection.' });

    const users = JSON.parse(data);
    const newId = getHightestId(users) + 1;
    const validation = validateUser(newUser);

    if (!validation.isValid)
      return res.status(400).json({ error: validation.error });

    const newUserWithId = { ...newUser, id: newId };
    users.push(newUserWithId);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (error) => {
      if (err) return res.status(500).json({ error: 'Unable to save user.' });

      res.status(201).json(newUserWithId);
    });
  });
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err)
      return res.status(500).json({ error: 'Error in data connection.' });

    let users = JSON.parse(data);

    if (!doesUserExist(users, userId))
      return res
        .status(400)
        .json({ error: `User with ID ${userId} does not exist.` });

    const validation = validateUser(updatedUser);

    if (!validation.isValid)
      return res.status(400).json({ error: validation.error });

    users = users.map((user) =>
      user.id === userId ? { ...user, name: user.name } : user
    );

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (error) => {
      if (error)
        return res.status(500).json({ error: 'Error in update user.' });

      const userUpdated = users.find((user) => user.id === userId);
      res.status(200).json(userUpdated);
    });
  });
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err)
      return res.status(500).json({ error: 'Error in data connection.' });

    let users = JSON.parse(data);

    if (!doesUserExist(users, userId))
      return res
        .status(400)
        .json({ error: `User with ID ${userId} does not exist.` });

    users = users.filter((user) => user.id !== userId);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (error) => {
      if (error)
        return res.status(500).json({ error: 'Error in delete user.' });

      res.status(204).send();
    });
  });
});

app.get('/error', (req, res, next) => {
  next(new Error('Intentional error for testing.'));
});

app.get('/db-users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to database.' });
  }
});

app.get('/protected-route', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

app.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { email, password: hashedPassword, name, role: 'USER' },
  });

  res.status(201).json({ message: 'User registered successfully.' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user)
    return res.status(400).json({ error: 'Invalid email or password.' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: 'Invalid email or password.' });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '4h' }
  );

  res.json({ token });
});

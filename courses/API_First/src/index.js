const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const OpenApiValidator = require('express-openapi-validator');

const app = express();
const port = 3000;

const swaggerDocument = YAML.load('./openapi.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

app.use(
  OpenApiValidator.middleware({
    apiSpec: swaggerDocument,
    validateRequests: true,
    validateResponses: true,
    ignorePaths: /.*\/docs.*/,
  })
);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message, errors: error.errors });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/users', (req, res) => {
  const { name, age, email } = req.body;

  const newUser = { id: Date.now().toString(), name, age, email };
  res.status(201).json(newUser);
});

const users = [];
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) res.status(404).json({ message: 'User not found' });

  res.json({ user });
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email, age } = req.body;

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) res.status(404).json({ message: 'User not found' });

  const updatedUser = { id: userId, name, email, age };
  users[userIndex] = updatedUser;

  res.json({ updatedUser });
});

const products = [];

app.post('/products', (req, res) => {
  const newProduct = { id: Date.now().toString(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

app.put('/products/:id', (req, res) => {
  const productIndex = products.findIndex((p) => p.id === req.params.id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const updatedProduct = { id: req.params.id, ...req.body };
  products[productIndex] = updatedProduct;

  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  const productIndex = products.findIndex((p) => p.id === req.params.id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(200).json({ message: 'Product deleted' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

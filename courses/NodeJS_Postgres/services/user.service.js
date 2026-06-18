const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (error) => console.error(error));
  }

  async create(data) {
    const newUser = await models['User'].create(data);
    return newUser;
  }

  async find() {
    const data = await models['User'].findAll({ include: ['customer'] });
    return data;
  }

  async findOne(id) {
    const user = await models['User'].findByPk(id);
    if (!user) throw boom.notFound('user not found');
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const updatedUser = await user.update(changes);
    return updatedUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;

const sequelize = require('../config/connection');
const { User, Example } = require('../models');

const userData = [
    {
        firstName: 'Adam',
        lastName: 'Gates',
        username: 'GAda',
        email: 'adam@gates.com',
        password: process.env.ADMIN_USER_PWD,
        isAdmin: true
    },
    {
      firstName: 'Uma',
      lastName: 'Pearson',
      username: 'TheActress?',
      email: 'uma@pearson.com',
      password: process.env.USER_PWD,
      isAdmin: false
    }];

const sampleExample = {
        text: 'Sample item',
        description: 'Adam can\'t see this',
        UserId: 2
      };

const seedUsers = () => {
    User.bulkCreate(userData, {individualHooks: true});
    Example.create(sampleExample);
};

module.exports = seedUsers;
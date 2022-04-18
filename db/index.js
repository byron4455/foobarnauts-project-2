const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  //seed users
  seedUsers();+
  console.log('\n----- USERS SEEDED -----\n');


  //seed posts
  seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');


  //seed comments
}
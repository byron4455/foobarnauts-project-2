const seedUsers = require('./user-seeds');
const seedPosts = require('./posts-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/config');

const seedAll = async (db) => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  //seed users
  await seedUsers(db);+
  console.log('\n----- USERS SEEDED -----\n');


  //seed posts
  await seedPosts(db);
  console.log('\n----- POSTS SEEDED -----\n');


  //seed comments
  await seedComments(db)
  console.log('\n----- COMMENTS SEEDED -----\n');

}

module.exports = seedAll;
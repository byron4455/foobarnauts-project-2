const {Comment} = require('../models/Comment');

const commentData = [
    {
        poster_id: 2,
        in_post: 1,
        content: "Pro patria mori"
    }
];

const seedComments = (db) => {db.Comment.bulkCreate(commentData)};

module.exports = seedComments;
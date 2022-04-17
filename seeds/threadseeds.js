const { Topic: Post } = require('../models/Post');

const postData = [
    {
        title: "Lorem Ipsum",
        poster_id: 1,
        content: "Dulce est decorum est"
    }
];

const seedPost = () => { Post.bulkCreate(postData)};

module.exports = seedPost;
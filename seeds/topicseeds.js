const { Topic } = require('../models/Topic');

const topicData = [
    {
        title: "Lorem Ipsum",
        poster_id: 1,
        content: "Dulce est decorum est"
    }
];

const seedTopics = () => { Topic.bulkCreate(topicData)};

module.exports = seedTopics;
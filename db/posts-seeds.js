
const postData = [
    {
        title: "Lorem Ipsum",
        poster_id: 1,
        content: "Dulce est decorum est"
    }
];

const seedPosts = (db) => { db.Post.bulkCreate(postData)};

module.exports = seedPosts;
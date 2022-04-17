const user = require("../models/user");

module.exports = function (db) {
  return {
    // Get all examples
    getExamples: function (req, res) {
      db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Get all Topics
    getPosts: function (req, res) {
      db.Post.findAll(
        {
            order: [['createdAt', 'DESC']],
            attributes:[
              'id',
              'title',
              'createdAt',
              'poster_id',
              'content'
            ],
            include:[
              {
                model: User,
                attributes: ['username']
              },
              {
                model: Comment,
                attributes: ['id', 'content', 'in_post', 'poster_id', 'createdAt'],
                include:{
                  model: user,
                  attributes: ['username']
                }

              }
            ]
          });
  }
  };
};

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
    getTopics: function (req, res) {
      db.Topic.findAll({
                        order: [['createdAt', 'DESC']],
                        attributes:[
                          'id',
                          'title',
                          'createdAt',
                          'content'
                        ],
                        include:[
                          {
                            model: User,
                            attributes: ['firstName']
                          },
                          {
                            model: Comment,
                            attributes: ['id', 'content', 'in_topic', 'poster_id', 'createdAt'],
                            include:{
                              model: user,
                              attributes: ['firstName']
                            }

                          }
                        ]
                      });
    }
  };
};

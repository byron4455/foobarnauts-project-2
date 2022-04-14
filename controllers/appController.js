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
    createTopic: function (req, res) {
      db.Topic.create(req.body).then(function (dbTopic) {
        res.json(dbTopic)
      });
    },
    getTopic: function (req, res) {
      db.Topic.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbTopic) {
        res.json(dbTopic);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    }
  };
};

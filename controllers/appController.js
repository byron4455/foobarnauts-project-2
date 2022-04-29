const axios = require('axios');

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
      db.Example.destroy({ where: { id: req.params.id } }).then( function (dbExample) {
        res.json(dbExample);
      });
    },
    getCarByMake: function (req, res) {
      console.log(req.params.model)
      axios.request({
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: { make: req.params.model, limit:30, fuel_type:'electricity'},
        headers: {
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.API_KEY
        }
      }
      ).then((response) => res.json(response.data)).catch(err => console.log(err))
    },

  };
};

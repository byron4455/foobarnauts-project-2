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
                order: [['createdAt', 'DESC']],
                include:{
                  model: user,
                  attributes: ['username']
                }

              }
            ]
          });
    },

    //get a single post by id
    getSinglePost: function (req, res){
      db.Post.findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: Comment,
            attributes: ['id', 'content', 'in_post', 'poster_id', 'createdAt'],
            order: [['createdAt', 'DESC']],
            include:{
              model: user,
              attributes: ['username']
            }

          }
        ]
      });
    },

    // create a post
    createPost: function (req, res){
      if(req.session){
        db.Post.create({
          title: req.body.title,
          poster_id: req.session.user_id,
          content: req.body.content
          })
        .then( dbPostData => res.json(dbPostData) )
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
          });
      };
    },
    //create a comment
    createComment: function (req, res) {
      if(req.session){
        db.Comment.create({
          poster_id : req.session.user_id,
          in_post: req.body.post,
          content: req.body.content
        })
        .then( dbPostData => res.json(dbPostData) )
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
          });
      }
    }

  //return close  
  }
};

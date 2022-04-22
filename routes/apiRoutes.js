const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  router.get('/examples', AppController.getExamples);
  router.post('/examples', AppController.createExample);
  router.delete('/examples/:id', AppController.deleteExample);
  router.get('/topic-outline', ensureAuthenticated, AppController.getExamples);
  router.get('/discussion', ensureAuthenticated);
  router.get('/about');
  router.get('/forum-topics', ensureAuthenticated);
  router.get('/index', ensureAuthenticated);
  router.get('/research', ensureAuthenticated);

  router.get('/posts', AppController.getPosts);
  router.get('/posts/:id', AppController.getSinglePost);
  router.post('/posts', ensureAuthenticated, AppController.createPost);

  router.post('/comment', AppController.createComment)

  

  return router;
};

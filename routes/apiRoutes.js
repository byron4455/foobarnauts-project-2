const router = require('express').Router();
const appController = require('../controllers/appController');
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
  // 'https://api.api-ninjas.com/v1/cars?limit=10&make=' + req.params.model
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
  // router.get('/cars/electricity', AppController.getElectricCars);
  router.get('/cars', AppController.getCarByMake);


  return router;
};

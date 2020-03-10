const usersRouter = require('express').Router();
const userController = require('../db/controllers/usersController.js');

usersRouter
  .route('/sign-up')
  .get(userController.retrieveSignUp)
  .post(userController.create);

module.exports = usersRouter;

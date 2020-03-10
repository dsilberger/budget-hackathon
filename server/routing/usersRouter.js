const userRouter = require('express').Router();
const userController = require('../db/controllers/usersController.js');

userRouter
  .route('/sign-up')
  .get(userController.retrieve)
  .post(userController.create);

module.exports = userRouter;

const usersRouter = require("express").Router();
const userController = require("../db/controllers/usersController.js");

usersRouter
  .route("/user")
  .get(userController.retrieve)
  .post(userController.create);

module.exports = usersRouter;

const usersRouter = require("express").Router();
const userController = require("../controllers/usersController.js");

usersRouter
  .route("/user")
  .get(userController.retrieve)
  .post(userController.create);

module.exports = usersRouter;

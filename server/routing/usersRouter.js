const usersRouter = require("express").Router();
const userController = require("../controllers/usersController.js");

usersRouter
  .route("/user")
  .get(userController.retrieve)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.delete);

module.exports = usersRouter;

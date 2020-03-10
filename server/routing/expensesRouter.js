const router = require("express").Router();
const controller = require("../db/controllers/expensesController.js");

router
  .route("/expenses")
  .get(controller.getExpenses)
  .post(controller.addExpense);

router.route("/categories").get(controller.getCategories);

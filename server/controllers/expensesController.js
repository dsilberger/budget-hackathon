const Model = require("../models/expensesModel.js");

module.exports = {
  getCategories: function(req, res) {
    Model.getAllCategories()
      .then(categories => res.json(categories))
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  getExpenses: function(req, res) {
    Model.getAllExpenses()
      .then(expenses => res.json(expenses))
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },

  addExpense: function(req, res) {
    Model.addExpense(req.body)
      .then(addedExpense => res.json(addedExpense))
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

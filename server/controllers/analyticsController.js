// use expenses and user models methods to produce
// JSON with {categories: {catNames: catAmts}, expenses: aggExpVal, delta: deltaVal, income: incVal}
const Expenses = require("../models/expensesModel.js");
const User = require("../models/usersModel.js");

const analytics = {
  aggregateViewData: (req, res) => {
    const aggViewObj = {};
    Expenses.getAllCategories()
      .then(categories => {
        aggViewObj["categories"] = categories;
      })
      .then(() => {
        return Expenses.getAllExpenses();
      })
      .then(expenses => {
        aggViewObj["expenses"] = expenses;
      })
      .then(() => {
        return User.getUser();
      })
      .then(({ income }) => {
        aggViewObj["income"] = income;
      })
      .then(() => {
        console.log(aggViewObj);
      });
  }
};

module.exports.analytics;

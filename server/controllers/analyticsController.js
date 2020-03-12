// use expenses and user models methods to produce
// JSON with {categories: {catNames: catAmts}, expenses: aggExpVal, delta: deltaVal, income: incVal}
const Expenses = require("../models/expensesModel.js");
const User = require("../models/usersModel.js");
const Promise = require("bluebird");

module.exports.aggregateViewData = function(req, res) {
  let promiseArr = [
    Expenses.getAllCategories(),
    Expenses.getAllExpenses(),
    User.getUser()
  ];

  Promise.all(promiseArr)
    .then(data => {
      return JSON.parse(JSON.stringify(data));
    })
    .then(obj => {
      const categories = obj[0];
      const expenses = obj[1];
      const income = obj[2];
      const returnObj = {
        expByCat: {},
        totalExp: 0,
        income: income.income,
        delta: income.income
      };

      for (let i = 0; i < categories.length; i++) {
        returnObj["expByCat"][categories[i].name] = 0;
      }

      for (let i = 0; i < expenses.length; i++) {
        returnObj["expByCat"][expenses[i].category] += expenses[i].amount100;
        returnObj["totalExp"] += expenses[i].amount100;
        returnObj["delta"] -= expenses[i].amount100;
      }

      res.send(returnObj);
    });
};

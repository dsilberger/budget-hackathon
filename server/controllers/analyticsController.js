// use expenses and user models methods to produce
// JSON with {categories: {catNames: catAmts}, expenses: aggExpVal, delta: deltaVal, income: incVal}
const Expenses = require("../models/expensesModel.js");
const User = require("../models/usersModel.js");
const Promise = require("bluebird");

module.exports.aggregateViewData = function(req, res) {
  let promiseArr = [Expenses.getAllExpenses(), User.getUser()];

  Promise.all(promiseArr)
    .then(data => {
      return JSON.parse(JSON.stringify(data));
    })
    .then(obj => {
      const expenses = obj[0];
      const user = obj[1];
      const returnObj = {};

      for (let i = 0; i < expenses.length; i++) {
        const yearDateKey = expenses[i].date.slice(0, 7);
        if (returnObj[yearDateKey] === undefined) {
          returnObj[yearDateKey] = {
            expByCat: {},
            totalExp: 0,
            delta: user.income,
            income: user.income
          };
        }

        if (returnObj[yearDateKey]["expByCat"][expenses[i].category] === undefined) {
          returnObj[yearDateKey]["expByCat"][expenses[i].category] = 0;
        } else {
          returnObj[yearDateKey]["expByCat"][expenses[i].category] += expenses[i].amount100;
        }

        returnObj[yearDateKey]["totalExp"] += expenses[i].amount100;

        returnObj[yearDateKey]["delta"] -= expenses[i].amount100;
      }

      for (let key in returnObj) {
        returnObj[key]["expByCat"] = expFilter(returnObj[key]["expByCat"]);
      }

      res.send(returnObj);
    });
};

const expFilter = function(foo) {
  obj = Object.assign({}, foo);
  const exps = Object.entries(foo).sort((a, b) => b[1] - a[1]);

  const top4 = exps.slice(0, 4);

  const rest = exps.slice(5);
  const other = rest.reduce((accum, curr) => accum + curr[1], 0);

  console.log(top4);

  top4.push(["Other", other]);

  // const filteredExps = Object.entries(foo)
  //   .sort((a, b) => b[1] - a[1])
  //   .slice(0, 4)
  //   .map(([category, amount]) => ({
  //     category,
  //     amount
  //   }));

  // let remainder = aggRest(obj);
  // if (remainder !== 0) {
  //   filteredExps.push({ category: "Other", amount: remainder });
  // }

  return top4.map(([category, amount]) => ({
    category,
    amount
  }));
};

const findLargest = function(obj) {
  let biggun = 0;
  let currRet;

  for (let key in obj) {
    if (obj[key] > biggun) {
      biggun = obj[key];
      currRet = { [key]: obj[key] };
    }
  }

  return currRet;
};

const aggRest = function(obj) {
  cumul = 0;

  for (let key in obj) {
    cumul += obj[key];
  }

  return cumul;
};

let x = {
  Gym: 0,
  Shopping: 4566,
  Restaurants: 22133,
  "Mortgage & Rent": 0,
  Groceries: 13331,
  "Fast Food": 0,
  "Public Transportation": 0,
  "Coffee Shops": 0,
  Transfer: 0,
  "Cash & ATM": 0,
  "Gifts & Donations": 0,
  "Alcohol & Bars": 7600,
  "Rental Car & Taxi": 1530,
  Pharmacy: 0
};

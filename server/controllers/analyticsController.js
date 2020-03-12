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
      const returnObj = {
        monthlyAggs: {}
      };

      for (let i = 0; i < expenses.length; i++) {
        const yearDateKey = expenses[i].date.slice(0, 7);
        if (returnObj["monthlyAggs"][yearDateKey] === undefined) {
          returnObj["monthlyAggs"][yearDateKey] = {
            expByCat: {},
            totalExp: 0,
            delta: user.income,
            income: user.income
          };
        }

        if (
          returnObj["monthlyAggs"][yearDateKey]["expByCat"][
            expenses[i].category
          ] === undefined
        ) {
          returnObj["monthlyAggs"][yearDateKey]["expByCat"][
            expenses[i].category
          ] = 0;
        } else {
          returnObj["monthlyAggs"][yearDateKey]["expByCat"][
            expenses[i].category
          ] += expenses[i].amount100;
        }

        returnObj["monthlyAggs"][yearDateKey]["totalExp"] +=
          expenses[i].amount100;

        returnObj["monthlyAggs"][yearDateKey]["delta"] -= expenses[i].amount100;
      }

      for (let key in returnObj["monthlyAggs"]) {
        returnObj["monthlyAggs"][key]["expByCat"] = expFilter(
          returnObj["monthlyAggs"][key]["expByCat"]
        );
      }

      res.send(returnObj);
    });
};

const expFilter = function(foo) {
  obj = Object.assign({}, foo);
  const filteredExps = [];

  for (let i = 0; i < 4; i++) {
    let zoo = findLargest(obj);
    delete obj[Object.keys(zoo)[0]];
    let largest = {
      category: Object.keys(zoo)[0],
      amount: zoo[Object.keys(zoo)[0]]
    };
    filteredExps.push(largest);
  }

  let remainder = aggRest(obj);
  if (remainder !== 0) {
    filteredExps.push({ category: "Misc", amount: remainder });
  }

  return filteredExps;
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

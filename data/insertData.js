const csv = require("csv-parser");
const path = require("path");
const fs = require("fs");

const model = require("../server/models/expensesModel.js");

const results = [];
fs.createReadStream(path.join(__dirname, "categories.csv"))
  .pipe(csv())
  .on("data", data => results.push(data))
  .on("end", () => {
    console.log(results.slice(0, 5));
    results.forEach(category => model.addCategory({ name: category.Category }));
  });

const transactionResults = [];
fs.createReadStream(path.join(__dirname, "transaction_data.csv"))
  .pipe(csv())
  .on("data", data => transactionResults.push(data))
  .on("end", () => {
    console.log(transactionResults.slice(0, 5));
    transactionResults.forEach(({ date, description, amount, category, accountName }) =>
      model.addExpense({
        date: new Date(date),
        description,
        accountName,
        amount100: amount * 100,
        categoryName: category
      })
    );
  });

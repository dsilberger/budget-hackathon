const db = require("../db/");

const model = {
  addCategory: ({ name }) => {
    const q = `
      insert into Categories (name)
      values (?)`;

    return db.queryAsync(q, [name]).then(({ insertId }) => model._getCategoryById(insertId));
  },

  getCategories: () => {
    const q = `
      select * from Categories`;

    return db.queryAsync(q);
  },

  _getCategoryById: id => {
    const q = `
      select * from Categories c
      where c.id = ?`;

    return db.queryAsync(q, [id]).then(dbRes => dbRes[0]);
  },

  addExpense: ({ date, description, category: categoryName, accountName, amount100 }) => {
    const q = `
      insert into Expenses (date, description, categoryId, accountName, amount100)
      values (?, ?, ?, ?, ?)`;

    return model
      .getCategories()
      .then(categories => {
        let categoryId = categories.find(e => e.name === categoryName).id;
        return categoryId ? categoryId : model.addCategory({ name: categoryName }).then(({ id }) => id);
      })
      .then(categoryId => db.queryAsync(q, [date, description, categoryId, accountName, amount100]));
  }
};

module.exports = model;

// module.exports
//   .addCategory({ name: "Test 2" })
//   .then(dbRes => console.log(dbRes))
//   .catch(err => {
//     console.error(err);
//   });

// model
//   .addExpense({
//     date: "2020-02-02",
//     description: "testing addExpense()",
//     category: "Mortgage & Rent",
//     accountName: "Test Acct",
//     amount100: 99123
//   })
//   .then(console.log)
//   .catch(console.error);

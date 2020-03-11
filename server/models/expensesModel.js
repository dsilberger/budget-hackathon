const db = require("../db/");

const model = {
  addCategory: ({ name }) => {
    const q = `
      insert into Categories (name)
      values (?)`;

    return db.queryAsync(q, [name]).then(({ insertId }) => model._getCategoryById(insertId));
  },

  getAllCategories: () => {
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

  addExpense: ({ date, description, categoryId, accountName, amount100 }) => {
    const q = `
      insert into Expenses (date, description, categoryId, accountName, amount100)
      values (?, ?, ?, ?, ?)`;

    return db
      .queryAsync(q, [date, description, categoryId, accountName, amount100])
      .then(({ insertId }) => model._getExpenseById(insertId));
  },

  getAllExpenses: () => {
    const q = `
      select e.id, e.date, e.description, c.name category, e.accountName, e.amount100
      from Expenses e
      left outer join Categories c on c.id = e.categoryId`;

    return db.queryAsync(q);
  },

  _getExpenseById: id => {
    const q = `
      select * from Expenses e
      where e.id = ?`;

    return db.queryAsync(q, [id]).then(dbRes => dbRes[0]);
  }
};

module.exports = model;

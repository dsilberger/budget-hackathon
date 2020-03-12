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

  getCategoryByName: name => {
    const q = `
      select * from Categories c
      where c.name = ?
      limit 1`;

    return db.queryAsync(q, [name]).then(dbRes => dbRes[0]);
  },

  _getCategoryById: id => {
    const q = `
      select * from Categories c
      where c.id = ?`;

    return db.queryAsync(q, [id]).then(dbRes => dbRes[0]);
  },

  addExpense: ({ date, description, categoryId, accountName, amount100, categoryName }) => {
    const q = `
      insert into Expenses (date, description, categoryId, accountName, amount100)
      values (?, ?, ?, ?, ?)`;

    if (!categoryId) {
      return model
        .getCategoryByName(categoryName)
        .then(category => {
          if (category) return category.id;
          return model.addCategory({ name: categoryName }).then(newCategory => newCategory.id);
        })
        .then(categoryId =>
          db
            .queryAsync(q, [date, description, categoryId, accountName, amount100])
            .then(({ insertId }) => model._getExpenseById(insertId))
        );
    }

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
      select e.id, e.date, e.description, c.name category, e.accountName, e.amount100
      from Expenses e
      left outer join Categories c on c.id = e.categoryId
      where e.id = ?`;

    return db.queryAsync(q, [id]).then(dbRes => dbRes[0]);
  }
};

module.exports = model;

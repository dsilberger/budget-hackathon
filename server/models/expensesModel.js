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
  }

  // addExpense: ({date, description, category, accountName, amount100}) => {
  //   const q = `

  //   `
  // }
};

module.exports = model;

// module.exports
//   .addCategory({ name: "Test 2" })
//   .then(dbRes => console.log(dbRes))
//   .catch(err => {
//     console.error(err);
//   });

module.exports.getCategories().then(dbRes => console.log(dbRes));

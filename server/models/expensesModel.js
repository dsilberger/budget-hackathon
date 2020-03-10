const db = require("../db/");

const model = {
  addCategory: ({ name }) => {
    const q = `
      insert into Categories (name)
      values (?)
    `;

    return db.queryAsync(q, [name]).then(({ insertId }) => model.getCategory(insertId));
  },

  getCategory: id => {
    const q = `
      select * from Categories c
      where c.id = ?
    `;

    return db.queryAsync(q, [id]).then(dbRes => dbRes[0]);
  }
};

module.exports = model;

module.exports
  .addCategory({ name: "Test 2" })
  .then(dbRes => console.log(dbRes))
  .catch(err => {
    console.error(err);
  });

// module.exports.getCategory(1).then(dbRes => console.log(dbRes));

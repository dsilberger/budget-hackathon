import React, { useEffect } from "react";
import api from "../api.js";

const ExpensesForm = ({ categories, addExpense }) => {
  const [date, setDate] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [categoryId, setCategory] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [account, setAccount] = React.useState("");

  const handleSubmit = () => {
    api
      .postExpense({ date, amount, categoryId, description: desc, accountName: account })
      .then(addExpense)
      .then(() => {
        setDate("");
        setAmount("");
        setDesc("");
        setAccount("");
      });
  };

  useEffect(() => {
    setCategory(categories[0] ? categoryId || categories[0].id : "");
  });

  return (
    <div className="container">
      <div className="container">
        <h2>Add an expense:</h2>
      </div>
      <div className="box">
        <div className="columns">
          <div className="column is-narrow">
            Date
            <div className="container">
              <input className="input" name="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>
          </div>
          <div className="column is-narrow">
            Amount
            <div className="container">
              <input
                className="input"
                name="amount"
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="column is-narrow">
            Category
            <div className="container">
              <select
                className="select"
                name="category"
                value={categoryId}
                onChange={e => setCategory(Number(e.target.value))}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="column">
            Description
            <div className="container">
              <input
                className="input"
                name="description"
                type="text"
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="column is-narrow">
            Account
            <div className="container">
              <input
                className="input"
                name="account"
                type="text"
                value={account}
                onChange={e => setAccount(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <input
            type="button"
            className="button is-success is-rounded is-focused is-pulled-right"
            value="Add"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpensesForm;

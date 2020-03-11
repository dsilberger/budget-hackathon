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
    <div>
      <h2>Add an expense:</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount ($)</th>
            <th>Category</th>
            <th>Description</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input name="date" type="date" value={date} onChange={e => setDate(e.target.value)} />
            </td>
            <td>
              <input name="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
            </td>
            <td>
              <select name="category" value={categoryId} onChange={e => setCategory(Number(e.target.value))}>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input name="description" type="text" value={desc} onChange={e => setDesc(e.target.value)} />
            </td>
            <td>
              <input name="account" type="text" value={account} onChange={e => setAccount(e.target.value)} />
            </td>
            <td>
              <input type="button" value="Add" onClick={handleSubmit} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesForm;

import React from "react";

const ExpensesForm = () => {
  const [date, setDate] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [account, setAccount] = React.useState("");

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
              {/* TODO: ensure this is initialized with a value! */}
              <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="groceries">Groceries</option>
                <option value="rent">Rent</option>
                <option value="restaurants">Restaurants</option>
              </select>
            </td>
            <td>
              <input name="description" type="text" value={desc} onChange={e => setDesc(e.target.value)} />
            </td>
            <td>
              <input name="account" type="text" value={account} onChange={e => setAccount(e.target.value)} />
            </td>
            <td>
              <input type="button" value="Add" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesForm;

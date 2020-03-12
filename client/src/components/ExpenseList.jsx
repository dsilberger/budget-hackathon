import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expenseList, categories }) => {
  const [currCat, setCurrCat] = React.useState("all");

  return (
    <div className="container">
      <h2 className="title is-4">Expenses:</h2>
      <table className="table is-fullwidth is-scrollable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount ($)</th>
            <th style={{ width: 250 }}>
              Category{" "}
              <select className="select is-small" onClick={e => setCurrCat(e.target.value)}>
                <option key="all" value="all">
                  All
                </option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </th>
            <th>Description</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map(entry => (
            <ExpenseItem key={entry.id} {...entry} currCategory={currCat} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;

import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expenseList }) => {
  return (
    <div>
      <h2>Expenses:</h2>
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
          {expenseList.map(entry => (
            <ExpenseItem key={entry.id} {...entry} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;

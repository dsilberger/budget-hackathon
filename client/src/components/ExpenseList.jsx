import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expenseList }) => {
  return (
    <div>
      <h2>Expenses:</h2>
      {expenseList.map(entry => (
        <ExpenseItem key={entry.id} {...entry} />
      ))}
    </div>
  );
};

export default ExpenseList;

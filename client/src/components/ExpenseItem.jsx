import React from "react";
import moment from "moment";

const ExpenseItem = ({ date, amount100: amount, category, description, accountName }) => {
  return (
    <tr>
      <td>{new moment(date).format("YYYY-MM-DD")}</td>
      <td>{amount}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{accountName}</td>
    </tr>
  );
};

export default ExpenseItem;

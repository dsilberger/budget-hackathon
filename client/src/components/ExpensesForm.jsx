import React from "React";

const ExpensesForm = () => {
  return (
    <div>
      <h2>Add an expense:</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount ($)</th>
            <th>Description</th>
            <th>Category</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input name="date" type="date" />
            </td>
            <td>
              <input name="amount" type="number" />
            </td>
            <td>
              <input name="date" type="date" />
            </td>
            <td>
              <input name="date" type="date" />
            </td>
            <td>
              <input name="date" type="date" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

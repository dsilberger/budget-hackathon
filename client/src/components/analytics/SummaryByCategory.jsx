import React from "react";

const SummaryByCategory = ({ month, year, expByCat }) => {
  console.log("EXP", expByCat);
  return (
    <div className="container">
      <h1 className="title">
        {month} {year}
      </h1>
      <p className="subtitle">Top Expense Categories</p>
      <div className="container">
        <table className="table is-fullwidth">
          <tbody>
            {expByCat.map(({ category, amount }) => (
              <tr>
                <td>{category}</td>
                <td className="has-text-right">{Math.floor(amount / 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryByCategory;

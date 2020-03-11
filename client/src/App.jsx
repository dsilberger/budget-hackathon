import React from "react";
import ReactDOM from "react-dom";

import ExpensesForm from "./components/ExpensesForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lorem: "ipsum",

      categories: [
        {
          id: 1,
          name: "Groceries"
        },
        {
          id: 2,
          name: "Restaurants"
        },
        {
          id: 3,
          name: "Mortgage & Rent"
        }
      ],

      expenseList: [
        {
          date: "2019-01-01T05:00:00.000Z",
          description: "Skyba",
          category: "Groceries",
          accountName: "Credit Card 1",
          amount100: 4900
        },
        {
          date: "2019-01-01T05:00:00.000Z",
          description: "Feedfish",
          category: "Groceries",
          accountName: "Credit Card 1",
          amount100: 6080
        },
        {
          date: "2019-01-01T05:00:00.000Z",
          description: "Vinte",
          category: "Restaurants",
          accountName: "Credit Card 1",
          amount100: 1012
        },
        {
          date: "2019-01-01T05:00:00.000Z",
          description: "Buzzshare",
          category: "Restaurants",
          accountName: "Credit Card 1",
          amount100: 115000
        },
        {
          date: "2019-01-01T05:00:00.000Z",
          description: "Avaveo",
          category: "Mortgage & Rent",
          accountName: "Credit Card 1",
          amount100: 30300
        },
        {
          date: "2020-02-02T05:00:00.000Z",
          description: "testing addExpense()",
          category: "Groceries",
          accountName: "Test Acct",
          amount100: 99123
        },
        {
          date: "2020-02-02T05:00:00.000Z",
          description: "testing addExpense()",
          category: "Groceries",
          accountName: "Test Acct",
          amount100: 99123
        },
        {
          date: "2020-02-02T05:00:00.000Z",
          description: "testing addExpense() 2",
          category: "Groceries",
          accountName: "Test Acct",
          amount100: 99123
        },
        {
          date: "2019-12-25T05:00:00.000Z",
          description: "Postman post",
          category: "Groceries",
          accountName: "Credit Card 1",
          amount100: 23222
        },
        {
          date: "2019-12-25T05:00:00.000Z",
          description: "Postman post",
          category: "Groceries",
          accountName: "Credit Card 1",
          amount100: 23222
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Bear Tracks Budgeting App!</h1>
        <ExpensesForm categories={this.state.categories} />
        <ExpenseList expenseList={this.state.expenseList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

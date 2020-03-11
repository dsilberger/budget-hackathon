import React from "react";
import ReactDOM from "react-dom";

import api from "./api.js";
import ExpensesForm from "./components/ExpensesForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import UserForm from "./components/UserForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [],

      expenseList: []
    };

    this.updateExpenses = this.updateExpenses.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
  }

  updateExpenses() {
    api.fetchAllExpenses().then(expenseList => this.setState({ expenseList }));
  }

  addExpense(expense) {
    this.setState({ expenseList: [...this.state.expenseList, expense] });
  }

  updateCategories() {
    api
      .fetchAllCategories()
      .then(categoryList => this.setState({ categoryList }));
  }

  componentDidMount() {
    this.updateCategories();
    this.updateExpenses();
  }

  render() {
    return (
      <div>
        <h1>Bear Tracks Budgeting App!</h1>
        <UserForm />
        <ExpensesForm
          categories={this.state.categoryList}
          addExpense={this.addExpense}
        />
        <ExpenseList expenseList={this.state.expenseList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

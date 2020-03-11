import React from "react";
import ReactDOM from "react-dom";

import api from "./api.js";
import ExpensesForm from "./components/ExpensesForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [],

      expenseList: []
    };

    this.updateExpenses = this.updateExpenses.bind(this);
  }

  updateExpenses() {
    api.fetchAllExpenses().then(expenseList => this.setState({ expenseList }));
  }

  updateCategories() {
    api.fetchAllCategories().then(categoryList => this.setState({ categoryList }));
  }

  componentDidMount() {
    this.updateCategories();
    this.updateExpenses();
  }

  render() {
    return (
      <div>
        <h1>Bear Tracks Budgeting App!</h1>
        <ExpensesForm categories={this.state.categoryList} />
        <ExpenseList expenseList={this.state.expenseList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

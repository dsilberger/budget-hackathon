import React from "react";
import ReactDOM from "react-dom";

import api from "./api.js";
import ExpensesForm from "./components/ExpensesForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import UserForm from "./components/UserForm.jsx";
import NavBar from "./components/NavBar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [],
      expenseList: [],
      currentPage: "user"
    };

    this.updateExpenses = this.updateExpenses.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  updateExpenses() {
    api.fetchAllExpenses().then(expenseList => this.setState({ expenseList }));
  }

  addExpense(expense) {
    this.setState({ expenseList: [...this.state.expenseList, expense] });
  }

  updateCategories() {
    api.fetchAllCategories().then(categoryList => this.setState({ categoryList }));
  }

  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    this.updateCategories();
    this.updateExpenses();
  }

  render() {
    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <h1 className="title">BearTracks Budget</h1>
          </div>
        </section>
        <NavBar setCurrentPage={this.setCurrentPage} currentPage={this.state.currentPage} />
        {this.state.currentPage === "user" && <UserForm />}
        {this.state.currentPage === "expenses" && (
          <ExpensesForm categories={this.state.categoryList} addExpense={this.addExpense} />
        )}
        {this.state.currentPage === "expenses" && <ExpenseList expenseList={this.state.expenseList} />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

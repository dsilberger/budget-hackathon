import React from "react";
import ReactDOM from "react-dom";

import ExpensesForm from "./components/ExpensesForm.jsx";

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
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Bear Tracks Budgeting App!</h1>
        <ExpensesForm categories={this.state.categories} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

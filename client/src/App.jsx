import React from "react";
import ReactDOM from "react-dom";

import ExpensesForm from "./components/ExpensesForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lorem: "ipsum"
    };
  }

  render() {
    return (
      <div>
        <h1>Bear Tracks Budgeting App!</h1>
        <ExpensesForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

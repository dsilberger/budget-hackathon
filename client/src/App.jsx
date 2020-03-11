import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lorem: ipsum
    };
  }

  render() {
    return <div>Bear Tracks Budgeting App!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

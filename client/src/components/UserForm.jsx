import React from "react";
import api from "../api.js";

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      income: "",
      familySize: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    let newUserObject = {
      name: this.state.username,
      income: Number(this.state.income) * 100,
      familySize: Number(this.state.familySize)
    };

    api.handleUserSubmit(newUserObject);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="username" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Monthly Income:
            <input type="text" name="income" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Family Size:
            <input type="text" name="familySize" onChange={this.handleChange} />
          </label>
          <br />
          <button onClick={this.handleClick}>Sign-up</button>
        </form>
      </div>
    );
  }
}

export default UserForm;

import React from "react";
import api from "../api.js";
import "bulma";

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      income: "",
      familySize: "",
      id: "",
      editMode: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    api.fetchUserProfile().then(({ id, name, income, familySize }) => {
      this.setState({
        username: name,
        id: id,
        familySize: familySize,
        income: income,
        editMode: !this.state.editMode
      });
    });
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

  updateProfile(event) {
    event.preventDefault();

    api.fetchUserProfile().then(({ id, name, income, familySize }) => {
      this.setState({
        username: name,
        id: id,
        familySize: familySize,
        income: income,
        editMode: !this.state.editMode
      });
    });

    console.log(this.state);
  }

  render() {
    if (this.state.editMode) {
      return (
        <div>
          <div classname="card">
            <div class="card-header">
              <div class="card-header-title">Your Profile</div>
            </div>
            <div class="card-content">
              <ul>
                <li>Name: {this.state.username}</li>
                <li>Monthly Income: {this.state.income}</li>
                <li>Family Size: {this.state.familySize}</li>
              </ul>
            </div>
          </div>
          <div classname="card-footer">
            <div classname="card-footer-item">
              <button className="button is-medium" onClick={this.updateProfile}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Monthly Income:
              <input
                type="text"
                value={this.state.income}
                name="income"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Family Size:
              <input
                type="text"
                value={this.state.familySize}
                name="familySize"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button className="button is-medium" onClick={this.updateProfile}>
              Update
            </button>
          </form>
        </div>
      );
    }
  }
}

export default UserForm;

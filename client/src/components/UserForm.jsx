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
    return (
      <div>
        <div classname="card">
          <div class="card-header">
            <div class="card-header-title">Your Profile</div>
          </div>
          <div class="card-content">
            <ul>
              <li>
                Name:{" "}
                {(this.state.editMode && (
                  <input
                    class="input"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    placeholder={this.state.username}
                  />
                )) ||
                  this.state.username}
              </li>
              <li>
                Monthly Income:{" "}
                {(this.state.editMode && (
                  <input
                    class="input"
                    type="text"
                    name="income"
                    onChange={this.handleChange}
                    placeholder={this.state.income}
                  />
                )) ||
                  this.state.income}
              </li>
              <li>
                Family Size:{" "}
                {(this.state.editMode && (
                  <input
                    class="input"
                    type="text"
                    name="familySize"
                    onChange={this.handleChange}
                    placeholder={this.state.familySize}
                  />
                )) ||
                  this.state.familySize}
              </li>
            </ul>
          </div>
        </div>
        <div classname="card-footer">
          <div classname="card-footer-item">
            {(!this.state.editMode && (
              <button className="button is-medium" onClick={this.updateProfile}>
                Edit Profile
              </button>
            )) || (
              <button className="button is-medium" onClick={this.updateProfile}>
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;

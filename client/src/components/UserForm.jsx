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
      editMode: false,
      loggedIn: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    api
      .fetchUserProfile()
      .then(({ id, name, income, familySize }) => {
        this.setState({
          username: name,
          id: id,
          familySize: familySize,
          income: income / 100,
          editMode: false
        });
      })
      .catch(() => {
        this.setState({ editMode: true, loggedIn: false });
      });
  }

  handleClick(event) {
    event.preventDefault();
    let newUserObject = {
      name: this.state.username,
      income: Number(this.state.income) * 100,
      familySize: Number(this.state.familySize)
    };

    if (
      newUserObject.name !== "" &&
      newUserObject.income !== "" &&
      newUserObject.familySize !== ""
    ) {
      api.handleUserSubmit(newUserObject);
      this.setState({ loggedIn: true, editMode: false });
    } else {
      alert("Please complete all required fields!");
    }
  }

  updateProfile(event) {
    event.preventDefault();
    const userObj = {
      id: this.state.id,
      name: this.state.username,
      income: Number(this.state.income) * 100,
      familySize: Number(this.state.familySize)
    };

    api.handleUserUpdate(userObj).then(() => {
      api.fetchUserProfile();
      this.setState({ editMode: false });
    });

    console.log(this.state);
  }

  startEdit(event) {
    event.preventDefault();
    this.setState({ editMode: true });
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
                    placeholder={
                      (this.state.loggedIn && this.state.username) ||
                      "What's your name?"
                    }
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
                    placeholder={
                      (this.state.loggedIn && this.state.income) ||
                      "What is your total monthly income?"
                    }
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
                    placeholder={
                      (this.state.loggedIn && this.state.familySize) ||
                      "How many people are there in your household?"
                    }
                  />
                )) ||
                  this.state.familySize}
              </li>
            </ul>
          </div>
        </div>
        <div classname="card-footer">
          <div classname="card-footer-item">
            {(!this.state.loggedIn && (
              <button className="button is-medium" onClick={this.handleClick}>
                Sign Up
              </button>
            )) ||
              (this.state.loggedIn && this.state.editMode && (
                <button
                  className="button is-medium"
                  onClick={this.updateProfile}
                >
                  Confirm
                </button>
              )) || (
                <button className="button is-medium" onClick={this.startEdit}>
                  Edit Profile
                </button>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;

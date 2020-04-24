import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import UserNavBar from "../NavBar/UserNavBar";
import SignUpForm from "../SignUpForm/SignUpForm";
import LogInForm from "../LogInForm/LogInForm";
import LogOut from "../LogOut/LogOut";
import DogList from "../DogList/DogList";
import "./AuthApp.css";

//code from https://git.generalassemb.ly/ga-wdi-lessons/react-walk-it-out-front-end

class AuthApp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }

  handleLogOut() {}

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUp(e) {}

  handleLogIn(e) {}

  render() {
    return (
      <div>
        <UserNavBar isLoggedIn={this.state.isLoggedIn} />
        <div className="body">
          <Switch>
            <Route
              path="/signup"
              render={(props) => {
                return (
                  <SignUpForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignUp}
                  />
                );
              }}
            />
            <Route
              path="/logout"
              render={(props) => {
                return (
                  <LogOut
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogOut={this.handleLogOut}
                  />
                );
              }}
            />
            <Route
              path="/login"
              render={(props) => {
                return (
                  <LogInForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogIn}
                  />
                );
              }}
            />
            <Route
              path="/"
              render={() => {
                return <DogList isLoggedIn={this.state.isLoggedIn} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AuthApp;

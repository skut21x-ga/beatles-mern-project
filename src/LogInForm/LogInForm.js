import React, { Component } from "react";

import "./LogInForm.css";

//code from https://git.generalassemb.ly/ga-wdi-lessons/react-walk-it-out-front-end

class LogInForm extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <div></div>;
    } else {
      return (
        <div className="LogInForm">
          <h4 className="firstTitle">Login</h4>

          <form className="LoginForm">
            <div>
              <label htmlFor="email" className="LoginBox">
                Email:
              </label>
              <input
                className="LoginEmailBox"
                type="text"
                name="email"
                onChange={this.props.handleInput}
              />
            </div>
            <div>
              <label htmlFor="password" className="password signUpEmailBox">
                Password:
              </label>
              <input
                className="LoginEmailBox"
                type="text"
                name="password"
                onChange={this.props.handleInput}
              />
            </div>
            <input
              className="LoginSubmit"
              value="Log-In"
              type="submit"
              onClick={this.props.handleLogIn}
            />
          </form>
        </div>
      );
    }
  }
}

export default LogInForm;

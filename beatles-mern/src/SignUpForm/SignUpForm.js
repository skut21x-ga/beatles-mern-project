import React, { Component } from "react";

import "./SignUpForm.css";

//code from https://git.generalassemb.ly/ga-wdi-lessons/react-walk-it-out-front-end

class SignUpForm extends Component {
  render() {
    return (
      <div className="footer">
        <form className="signUpForm">
          {" "}
          <h2 className="signUpH2">Sign-Up</h2>
          <div>
            <label htmlFor="email" className="signUpEmail">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="signUpEmailBox"
              onChange={this.props.handleInput}
            />
          </div>
          <div>
            <label htmlFor="password" className="signUpEmail">
              Password
            </label>
            <input
              type="text"
              name="password"
              className="signUpEmailBox"
              onChange={this.props.handleInput}
            />
          </div>
          <input
            value="Submit"
            type="submit"
            className="signUpSubmit"
            onClick={this.props.handleSignUp}
          />
        </form>
      </div>
    );
  }
}

export default SignUpForm;

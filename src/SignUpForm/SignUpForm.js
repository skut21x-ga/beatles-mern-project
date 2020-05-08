import React, { Component } from "react";

import "./SignUpForm.css";

// starter code from https://git.generalassemb.ly/ga-wdi-lessons/react-walk-it-out-front-end

class SignUpForm extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <div></div>;
    } else {
      return (
        <div className="headerSignUp">
          {" "}
          <h4 className="secondTitle">
            Create Account<br></br>
          </h4>
          <form className="signUpForm">
            {" "}
            <div>
              <label htmlFor="email" className="signUpEmail">
                Email:
                <input
                  type="text"
                  name="email"
                  className="signUpEmailBox"
                  onChange={this.props.handleInput}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password" className="signUpEmailBox">
                Password:
                <input
                  type="text"
                  name="password"
                  className="signUpEmailBox"
                  onChange={this.props.handleInput}
                />
              </label>
            </div>
            <input
              value="Create Account"
              type="submit"
              className="signUpSubmit"
              onClick={this.props.handleSignUp}
            />
          </form>
        </div>
      );
    }
  }
}

export default SignUpForm;

import React, { Component } from "react";

import "./SignUpForm.css";

//code from https://git.generalassemb.ly/ga-wdi-lessons/react-walk-it-out-front-end

class SignUpForm extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>

        <form>
          <div>
            <label htmlFor="email" className="email">Email</label>
            <input type="text" name="email" className="emailBox" onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor="password" className="email">Password</label>
            <input
              type="text"
              name="password"
              className="emailBox"
              onChange={this.props.handleInput}
            />
          </div>
          <input
            value="Submit"
            type="submit"
            className="submit"
            onClick={this.props.handleSignUp}
          />
        </form>
      </div>
    );
  }
}

export default SignUpForm;

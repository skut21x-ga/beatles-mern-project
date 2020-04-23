import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./UserNavBar.css";

//starter code from https://git.generalassemb.ly/ga-wdi-lessons/react-walk-it-out-front-end

class UserNavBar extends Component {
  render() {
    let navBarItems = [
      <NavItem key={1} href="/">
        All Beatle's Songs
      </NavItem>,
    ];
    if (this.props.isLoggedIn) {
      navBarItems.push(
        <NavItem key={2} href="/logout">
          Log Out
        </NavItem>
      );
    } else {
      navBarItems.push(
        <NavItem key={3} href="/signup">
          Sign Up
        </NavItem>
      );
      navBarItems.push(
        <NavItem key={4} href="/login">
          Log In
        </NavItem>
      );
    }
    return (
      <Navbar brand="Beatles" className="nav" right>
        {navBarItems}
      </Navbar>
    );
  }
}

export default UserNavBar;

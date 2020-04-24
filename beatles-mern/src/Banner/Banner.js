import React, { Component } from "react";
import "./Banner.css";
import Logo from "../img/1200px-Beatles_logo.svg.png";
import { Route, Link } from "react-router-dom";

class Banner extends Component {
  render() {
    return (
      <Link to="/">
        <div>
          <img src={Logo} alt="" className="logo"></img>
          <h3 className="headerTitle">LYRICS DATABASE</h3>
        </div>
      </Link>
    );
  }
}

export default Banner;

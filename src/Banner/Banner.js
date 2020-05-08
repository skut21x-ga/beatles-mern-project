import React, { Component } from "react";
import "./Banner.css";
import Logo from "../img/1200px-Beatles_logoLyrics.png";
import { Route, Link } from "react-router-dom";

class Banner extends Component {
  render() {
    return (
      <Link to="/">
        <div className="bannerBox">
          <img src={Logo} alt="" className="logo"></img>
        </div>
      </Link>
    );
  }
}

export default Banner;

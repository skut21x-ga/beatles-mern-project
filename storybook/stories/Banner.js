import React, { Component } from "react";
import "./Banner.css";
import Logo from "./1200px-Beatles_logo.svg.png"


class Banner extends Component {

  render() {
   
    return (
      
      <div className="logoBox">
          <img src={Logo} alt="" className="logo"></img>
      </div>
    );
    }
  }

export default Banner;

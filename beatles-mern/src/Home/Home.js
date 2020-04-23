import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the homepage!</h1>
        <p>Where you can Read, Update, Delete or even Create your objects from the API</p>
        <p>This is the API where you can observe the changes</p>
        <a href="https://dakom1-crud-api.herokuapp.com/lists">Click Here</a>

      </div>
    );
  }
}

export default Home;

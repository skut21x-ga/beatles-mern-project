import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import JohnLennon from "./JohnLennon/JohnLennon";
import PaulMcCartney from "./PaulMcCartney/PaulMcCartney";
import GeorgeHarrison from "./GeorgeHarrison/GeorgeHarrison";
import RingoStarr from "./RingoStarr/RingoStarr";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import axios from "axios";
import Banner from "./Banner/Banner";
import LogInForm from "./LogInForm/LogInForm";
import SongForm from "./SongForm/SongForm";
import SignUpForm from "./SignUpForm/SignUpForm";
// import AuthApp from "./AuthApp/AuthApp";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/users/login/",
        {
          email: this.state.email,
          password: this.state.password,
        }
      )
      .then((response) => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Incorrect Information. Please make sure information valid. If issues persist, please enable CORS."
        );
      });
  }

  handleSignUp(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/users/signup",
        {
          email: this.state.email,
          password: this.state.password,
        }
      )
      .then((response) => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Incorrect Information. Please make sure input is valid. If issues persist, please enable CORS."
        );
      });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="BannerBox">
            <Banner></Banner>
          </div>
          <div className="banner">
            <img src=""></img>{" "}
          </div>
          <Navbar isLoggedIn={this.state.isLoggedIn}></Navbar>
        </div>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/JohnLennon" component={JohnLennon} />
          <Route path="/PaulMcCartney" exact component={PaulMcCartney} />
          <Route path="/GeorgeHarrison" exact component={GeorgeHarrison} />
          <Route path="/RingoStarr" exact component={RingoStarr} />
        </main>
        <main className="SubmitRoute">
          <Route path="/Create" exact component={SongForm} />
        </main>{" "}
        <div className="forms">
          <LogInForm
            isLoggedIn={this.state.isLoggedIn}
            handleInput={this.handleInput}
            handleLogIn={this.handleLogIn}
          />
          <SignUpForm
            isLoggedIn={this.state.isLoggedIn}
            handleInput={this.handleInput}
            handleSignUp={this.handleSignUp}
          ></SignUpForm>{" "}
        </div>
      </div>
    );
  }
}

export default App;

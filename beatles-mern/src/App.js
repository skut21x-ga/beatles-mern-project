import React, { Component } from "react";
import "./App.css";
import SongInfo from "./SongInfo";
import Navbar from "./Navbar";
import JohnLennon from "./JohnLennon/JohnLennon";
import PaulMcCartney from "./PaulMcCartney/PaulMcCartney";
import GeorgeHarrison from "./GeorgeHarrison/GeorgeHarrison";
import RingoStarr from "./RingoStarr/RingoStarr";
import { Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Banner from "./Banner/Banner";
import SongForm from "./SongForm/SongForm";
import SignUpForm from "./SignUpForm/SignUpForm";
// import AuthApp from "./AuthApp/AuthApp";

function App() {
  return (
    <div>
      <div className="App">
        {/* <AuthApp> </AuthApp> */}
        <div className="BannerBox">
          <Banner></Banner>
        </div>
        <div className="banner">
          <img src=""></img>
        </div>
        <Navbar></Navbar>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/JohnLennon/" component={JohnLennon} />
          <Route path="/PaulMcCartney" exact component={PaulMcCartney} />
          <Route path="/GeorgeHarrison" exact component={GeorgeHarrison} />
          <Route path="/RingoStarr" exact component={RingoStarr} />
        </main>
        <main className="SubmitRoute">
          <Route path="/Create" exact component={SongForm} />
        </main>
        <div className="form">
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
}

export default App;

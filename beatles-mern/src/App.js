import React from "react";
import "./App.css";
import SongInfo from "./SongInfo";
//import NewSong from "./NewSong";
import Navbar from "./Navbar"
import Home from "./Home/Home";
import JohnLennon from './JohnLennon/JohnLennon'
import PaulMcCartney from './PaulMcCartney/PaulMcCartney'
import GeorgeHarrison from './GeorgeHarrison/GeorgeHarrison'
import RingoStarr from './RingoStarr/RingoStarr'
import { Route, Link } from "react-router-dom";



function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      {/*  */}
      <main>
    <Route
      path="/"
      exact
      component={Home}
    />
    <Route
      path="/JohnLennon/"
      component={JohnLennon}
    />
      <Route
      path="/PaulMcCartney"
      exact
      component={PaulMcCartney}
    />
    <Route
      path="/GeorgeHarrison"
      exact
      component={GeorgeHarrison}
    />
    <Route
      path="/RingoStarr"
      exact
      component={RingoStarr}
    />
   </main>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Navbar.css";
import Home from "./Home/Home";
import JohnLennon from './JohnLennon/JohnLennon'
import PaulMcCartney from './PaulMcCartney/PaulMcCartney'
import GeorgeHarrison from './GeorgeHarrison/GeorgeHarrison'
import RingoStarr from './RingoStarr/RingoStarr'


// following code via material-ui (besides small tweaks and customization)
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
  },
});

export default function Navbar() {
  //const classes = useStyles();
  //const [value, setValue] = React.useState(0);

  const handleChange = (event /*  newValue */) => {
    /* setValue(newValue),  */ console.log(event.target.innerText);
  };

  return (
  <div>
    <div className="navBar">
      <Paper>
        <Tabs
          //value={value}
          onClick={handleChange}
          variant="fullWidth"
          indicatorColor="inherit"
          textColor="inherit"
        >
          <div className="tabContainerBox">

            <div className="tabBox">
            <Link to="/">
              <Tab className="TabLabel" label="The Beatles" />
            </Link>
            </div>

            <div className="tabBox">
            <Link to="/John%20Lennon">
              <Tab className="TabLabel" label="John Lennon" />
              </Link>
            </div>

            <div className="tabBox">
            <Link to="/Paul%20McCartney">
              <Tab className="TabLabel" label="Paul McCartney" />
              </Link>
            </div>

            <div className="tabBox">
              <Link to="/George%20Harrison">
              <Tab className="TabLabel" label="George Harrison" />
              </Link>
            </div>

            <div className="tabBox">
            <Link to="/Ringo%20Starr">
              <Tab className="TabLabel" label="Ringo Starr" />
              </Link>
            </div>

          </div>
        </Tabs>
      </Paper>
    </div>
    <main>
    <Route
      path="/"
      exact
      component={Home}
    />
    <Route
      path="/John%20Lennon"
      exact
      component={JohnLennon}
    />
      <Route
      path="/Paul%20McCartney"
      exact
      component={PaulMcCartney}
    />
    <Route
      path="/George%20Harrison"
      exact
      component={GeorgeHarrison}
    />
    <Route
      path="/Ringo%20Starr"
      exact
      component={RingoStarr}
    />
   </main>
 </div>
  );
}

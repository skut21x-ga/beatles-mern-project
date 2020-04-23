import React from "react";
import { Route, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Navbar.css";


// following code via material-ui (besides small tweaks and customization)
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
  },
});

export default function Navbar() {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      artist:""
  //   }
  // }
  
  
//   artistClick=(e)=>{
//   this.setState({artist: e.target.getAttribute("value")},this.logState)
// }

// logState=()=>{
//   console.log(this.state.artist)
// }
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
            <Link to="/JohnLennon" state={"John%20Lennon"}>
              <Tab className="TabLabel" label="John Lennon" />
              </Link>
            </div>

            <div className="tabBox">
            <Link to="/PaulMcCartney" state={"Paul%20McCartney"}>
              <Tab className="TabLabel" label="Paul McCartney" />
              </Link>
            </div>

            <div className="tabBox">
              <Link to="/GeorgeHarrison" state={"George%20Harrison"}>
              <Tab className="TabLabel" label="George Harrison" />
              </Link>
            </div>

            <div className="tabBox">
            <Link to="/RingoStarr" value={"Ringo%20Starr"}>
              <Tab className="TabLabel" label="Ringo Starr" />
              </Link>
            </div>

          </div>
        </Tabs>
      </Paper>
    </div>
 </div>
  );
}

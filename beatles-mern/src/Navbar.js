import React from "react";
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event /*  newValue */) => {
    /* setValue(newValue),  */ console.log(event.target.innerText);
  };

  return (
    <div className="navBar">
      <Paper>
        <Tabs
          value={value}
          onClick={handleChange}
          variant="fullWidth"
          indicatorColor="inherit"
          textColor="inherit"
        >
          <div className="tabContainerBox">
            <div className="tabBox">
              <Tab className="TabLabel" label="The Beatles" />
            </div>
            <div className="tabBox">
              <Tab className="TabLabel" label="John Lennon" />
            </div>
            <div className="tabBox">
              <Tab className="TabLabel" label="Paul McCartney" />
            </div>

            <div className="tabBox">
              <Tab className="TabLabel" label="George Harrison" />
            </div>
            <div className="tabBox">
              <Tab className="TabLabel" label="Ringo Starr" />
            </div>
          </div>
        </Tabs>
      </Paper>
    </div>
  );
}

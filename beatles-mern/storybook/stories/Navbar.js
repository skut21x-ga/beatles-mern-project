import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Navbar.css";

<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
></link>;

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navBar">
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="red"
          textColor="black"
        >
          <div className="tabContainerBox">
            <div className="tabBox">
              <Tab label="The Beatles" />
            </div>
            <div className="tabBox">
              <Tab label="John Lennon" />
            </div>

            <div className="tabBox">
              <Tab label="Paul McCartney" />
            </div>

            <div className="tabBox">
              <Tab label="George Harrison" />
            </div>

            <div className="tabBox">
              <Tab label="Ringo Starr" />
            </div>
          </div>
        </Tabs>
      </Paper>
    </div>
  );
}

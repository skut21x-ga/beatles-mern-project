import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import SongInfo from "./SongInfo";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const song = {
    artist: "artistName",
    song: "songTitle",
    lyrics: "songLyrics",
  };

  const dummy = () => console.log("hello")

  return (
    <div className="App">
      <button onClick={handleOpen}>Open</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <SongInfo data={song} onSubmit={dummy} onDelete={dummy} />
        </div>
      </Modal>
    </div>
  );
}

export default App;

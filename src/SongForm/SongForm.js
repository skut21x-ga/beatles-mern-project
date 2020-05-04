import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createSong } from "../ApiAccess/api";
import "./SongForm.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SongForm() {
  const classes = useStyles();

  const [artist, setArtist] = React.useState("");
  const [song, setSong] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");
  const valueUpdateMap = {
    artist: setArtist,
    song: setSong,
    lyrics: setLyrics,
  };
  const updateText = (event, type) => {
    event.persist();
    const value = event.target.value;
    valueUpdateMap[type](value);
  };

  const newSong = () => {
    createSong({ artist, song, lyrics });
  };

  const handleSelect = (event) => {
    event.preventDefault();
    setArtist(event.target.value);
  };

  return (
    <div className="CreateBoxes">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="createField">
          <div className="createInput">
            <h3 className="createSong">Submit New Lyrics</h3>
            {/* <TextField
              className="createTextField1"
              onKeyUp={(event) => updateText(event, "artist")}
              label="Artist"
              variant="outlined"
            /> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={artist}
              onChange={handleSelect}
            >
              <MenuItem value={""}>- PLEASE SELECT ARTIST -</MenuItem>
              <MenuItem value={"The Beatles"}>The Beatles</MenuItem>
              <MenuItem value={"John Lennon"}>John Lennon</MenuItem>
              <MenuItem value={"Paul McCartney"}>Paul McCartney</MenuItem>
              <MenuItem value={"George Harrison"}>George Harrison</MenuItem>
              <MenuItem value={"Ringo Starr"}>Ringo Starr</MenuItem>
            </Select>
          </div>{" "}
          <div className="createInput">
            <TextField
              className="createTextField2"
              label="Song"
              variant="outlined"
              onKeyUp={(event) => updateText(event, "song")}
            />
          </div>
          <div className="createInput">
            <TextField
              className="createTextField3"
              label="Lyrics"
              variant="outlined"
              onKeyUp={(event) => updateText(event, "lyrics")}
            />
          </div>
        </div>
        <Button
          onClick={newSong}
          className="submitButton"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

// export default SongForm

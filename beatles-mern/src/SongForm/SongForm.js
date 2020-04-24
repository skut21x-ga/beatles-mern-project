import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createSong } from "../ApiAccess/api";


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
  }
  const updateText = (event, type) => {
      event.persist()
    const value = event.target.value;
    valueUpdateMap[type](value)
  };

  const newSong = () => {
      createSong({artist, song, lyrics})
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onKeyUp={(event) => updateText(event, "artist")} 
        label="Artist"
        variant="outlined"
      />
      <TextField label="Song" variant="outlined" onKeyUp={(event) => updateText(event, "song")} />
      <TextField label="Lyrics" variant="outlined" onKeyUp={(event) => updateText(event, "lyrics")} />
      <Button onClick={newSong} variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

// export default SongForm

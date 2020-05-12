import React, { Component } from "react";
import "./PaulMcCartney.css";
import axios from "axios";
// import Modal from "@material-ui/core/Modal";
// import { makeStyles } from "@material-ui/core/styles";
import SongInfo from "../SongInfo";
import Alphabet from "../Alphabet/Alphabet";
import Paul from "../img/Paul-McCartney-Photo.jpg";
import Icon from "@material-ui/core/Icon";
import { deleteSong } from "../ApiAccess/api";
import { updateSong } from "../ApiAccess/api";

class PaulMcCartney extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gets: [],
      filteredsongs: [],
      song: "",
      lyrics: "",
      artist: "",
      filterLetter: null,
      id: "",
      lyricsbox: "songLyrics-Hidden",
    };
  }

  songClick = (e) => {
    this.setState({
      song: e.target.getAttribute("value"),
      lyrics: e.target.getAttribute("datavalue"),
      id: e.target.getAttribute("key"),
      lyricsbox: "songLyrics-View",
    });
  };

  valueCheck = () => {
    if (this.state.lyrics === "") {
      console.log("No Lyrics");
    }
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/Paul%20McCartney`,
        //`http://localhost:4000/name/Paul%20McCartney`
        {
          headers: {
            "Access-Control-Allow-Origin":
              "dakom1-crud-api.herokuapp.com/lists",
          },
        }
      )
      .then((res) => {
        //console.log(res);
        this.setState({ gets: res.data, filteredsongs: res.data });
        console.log(this.state.gets.sort());
      })
      .catch((error) => {
        console.log(error);
      });
    this.valueCheck();
  }

  filterSongs = (letter) => {
    console.log(letter, "from the artist page");
    let filteredSongs = this.state.gets.filter((song) => {
      return song.Song.toLowerCase().charAt(0) === letter.toLowerCase();
    });
    this.setState({ filterLetter: letter, filteredsongs: filteredSongs });
  };

  changeHandles = (e) => {
    this.setState({ song: e.target.value });
    console.log(this.state);
  };

  submitHandler = (e) => {
    e.preventDefault();
    ///const gets = this.state.filteredsongs;
    updateSong(this.state.gets._id, this.state.song);
  };

  render() {
    const gets = this.state.filteredsongs;
    gets.sort(function (a, b) {
      var nameA = a.Song,
        nameB = b.Song;
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    return (
      <div>
        <div>
          {this.state.artist}
          <br></br>
          <br></br>
          <img src={Paul} alt="" className="profile"></img>
          <div className="alphabetBox">
            <Alphabet letterSelector={this.filterSongs} />{" "}
          </div>{" "}
          <form onSubmit={this.submitHandler}>
            <div className="editSongForm">
              Edit Song Name:
              <input
                className="editSongBox"
                type="text"
                name="id"
                placeholder="TYPE HERE & CLICK PENCIL NEXT TO SONG TO RENAME IT"
                onChange={this.changeHandles}
              />
            </div>
          </form>
          {gets.map((gets) => (
            <div
              className="songName"
              key={gets._id}
              value={gets.Song}
              datavalue={gets.Lyrics}
              onClick={this.songClick}
            >
              {" "}
              <div className="trashIcon2">
                <Icon
                  color="alert"
                  onClick={() => updateSong(gets._id, this.state.song)}
                >
                  edit
                </Icon>
              </div>
              {gets.Song}
              <div className="trashIcon">
                <Icon onClick={() => deleteSong(gets._id)} color="alert">
                  delete_forever
                </Icon>
              </div>
            </div>
          ))}
        </div>
        <div className="lyricsSpacing">
          <br></br>
        </div>
        <div className={this.state.lyricsbox}>
          <SongInfo
            value={this.state.song}
            datavalue={this.state.lyrics}
          ></SongInfo>
        </div>
      </div>
    );
  }
}

export default PaulMcCartney;

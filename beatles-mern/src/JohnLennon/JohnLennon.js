import axios from "axios";
import SongInfo from "../SongInfo";
import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { deleteSong } from "../ApiAccess/api";
import { updateSong } from "../ApiAccess/api";
import Alphabet from "../Alphabet/Alphabet";
import John from "../img/JohnLennon.jpeg";
import "./JohnLennon.css";

class JohnLennon extends Component {
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
    if (this.state.lyrics == "") {
      console.log("No Lyrics");
    }
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/John%20Lennon`,
        //`http://localhost:4000/name/John%20Lennon`
        {
          headers: {
            "Access-Control-Allow-Origin":
              "dakom1-crud-api.herokuapp.com/lists",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.setState({ gets: res.data, filteredsongs: res.data });
        console.log(this.state.gets);
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

    return (
      <div>
        <div>
          {this.state.artist}
          <br></br>
          <br></br>
          <img src={John} alt="" className="profile"></img>{" "}
          <div className="alphabetBox">
            <Alphabet letterSelector={this.filterSongs} />
          </div>
          {gets.map((gets) => (
            <div
              className="songName"
              key={gets._id}
              value={gets.Song}
              datavalue={gets.Lyrics}
              onClick={this.songClick}
            >
              {gets.Song}
              <div className="trashIcon">
                <Icon onClick={() => deleteSong(gets._id)} color="alert">
                  delete_forever
                </Icon>
                <div className="trashIcon2">
                  <Icon
                    color="alert"
                    onClick={() => updateSong(gets._id, this.state.song)}
                  >
                    edit
                  </Icon>
                </div>
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
        <form onSubmit={this.submitHandler}>
          <div className="editSongForm">
            Edit Song Name:
            <input
              className="editSongBox"
              type="text"
              name="id"
              placeholder="PLEASE SELECT A SONG ABOVE & TYPE NEW NAME HERE"
              onChange={this.changeHandles}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default JohnLennon;

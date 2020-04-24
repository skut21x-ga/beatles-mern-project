import React, { Component } from "react";
import "./JohnLennon.css";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import SongInfo from "../SongInfo";
import John from "../img/JohnLennon.jpeg";
import Alphabet from "../Alphabet/Alphabet";

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
    };
  }

  songClick = (e) => {
    this.setState({
      song: e.target.getAttribute("value"),
      lyrics: e.target.getAttribute("datavalue"),
    });
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/John%20Lennon`,
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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterSongs = (letter) => {
    console.log(letter, "from JohnLennon.js");
    let filteredSongs = this.state.gets.filter((song) => {
      return song.Song.toLowerCase().charAt(0) == letter.toLowerCase();
    });
    this.setState({ filterLetter: letter, filteredsongs: filteredSongs });
  };

  render() {
    const gets = this.state.filteredsongs;

    return (
      <div>
        <div>
          {this.state.artist}
          <br></br>
          <br></br>
          <img src={John} alt="" className="profile"></img>
          <div className="alphabetBox">
            <Alphabet anything="hello test" letterSelector={this.filterSongs} />
          </div>
          {gets.map((gets) => {
            return (
              <div
                key={gets._id}
                value={gets.Song}
                datavalue={gets.Lyrics}
                onClick={this.songClick}
              >
                {gets.Song}
              </div>
            );
          })}
        </div>
        <div className="songLyrics">
          <SongInfo value={this.state.song} datavalue={this.state.lyrics}>
            Song!
          </SongInfo>
        </div>
      </div>
    );
  }
}

export default JohnLennon;

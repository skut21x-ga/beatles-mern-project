import "./RingoStarr.css";
import Ringo from "../img/Ringo-Starr-Photo.jpg";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import SongInfo from "../SongInfo";
import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { deleteSong } from "../ApiAccess/api";
import Alphabet from "../Alphabet/Alphabet";

class RingoStarr extends Component {
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
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/Ringo%20Starr`,
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
    console.log(letter, "from the artist page");
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
          <img src={Ringo} alt="" className="profile"></img>{" "}
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
              </div>
            </div>
          ))}
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

export default RingoStarr;

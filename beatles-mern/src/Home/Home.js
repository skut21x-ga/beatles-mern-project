import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
<<<<<<< HEAD
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import SongInfo from "../SongInfo";
import Alphabet from "../Alphabet/Alphabet";
import Beatles from "../img/The-Beatles-Group-Photo.jpg";
=======
import SongInfo from "../SongInfo"
import Icon from "@material-ui/core/Icon";
import {deleteSong} from "../ApiAccess/api"
import Beatles from "../img/The-Beatles-Group-Photo.jpg"
import Alphabet from "../Alphabet/Alphabet"
>>>>>>> master

class Home extends Component {
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
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/`,
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
    console.log(letter, "from the artist");
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

          <img src={Beatles} alt="" className="beatles"></img>
<<<<<<< HEAD
          <div className="alphabetBox">
            <Alphabet letterSelector={this.filterSongs} />
          </div>
          {gets.length
            ? gets.map((gets) => (
                <div
                  key={gets._id}
                  value={gets.Song}
                  datavalue={gets.Lyrics}
                  onClick={this.songClick}
                >
                  {gets.Song}
                </div>
              ))
            : null}
        </div>
        <div className="songLyrics">
          <SongInfo value={this.state.song} datavalue={this.state.lyrics}>
            Song!
          </SongInfo>
=======
        {
      gets.length ? 
      gets.map(gets => 
      <div key={gets._id} value={gets.Song} datavalue={gets.Lyrics} onClick={this.songClick} >
        {gets.Song}
        <Icon onClick={() => deleteSong(gets._id)} color="error">delete_forever</Icon>
      </div>): 
      null
    }
      </div>
      <div className="songLyrics">
      <SongInfo value={this.state.song} datavalue={this.state.lyrics}>Song!</SongInfo>
>>>>>>> master
        </div>
      </div>
    );
  }
}

export default Home;

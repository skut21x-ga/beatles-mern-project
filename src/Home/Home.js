import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import SongInfo from "../SongInfo";
import Alphabet from "../Alphabet/Alphabet";
import Beatles from "../img/The-Beatles-Group-Photo.jpg";
import Icon from "@material-ui/core/Icon";
import { deleteSong } from "../ApiAccess/api";
import { updateSong } from "../ApiAccess/api";

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
      lyricsbox: "songLyrics-Hidden",
      id: "",
    };
  }

  clearBox(e) {
    this.setState({
      lyricsbox: "songLyrics-Hidden",
    });
  }

  songClick = (e) => {
    this.setState({
      song: e.target.getAttribute("value"),
      lyrics: e.target.getAttribute("datavalue"),
      id: e.target.getAttribute("key"),
      lyricsbox: "songLyrics-View",
    });
  };

  songClose = (e) => {
    this.setState({
      lyricsbox: "songLyrics-Hidden",
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
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/`,
        //`http://localhost:4000/`

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
    this.valueCheck();
  }

  filterSongs = (letter) => {
    // console.log(letter, "from the artist");
    let filteredSongs = this.state.gets.filter((song) => {
      return song.Song.toLowerCase().charAt(0) === letter.toLowerCase();
    });
    this.setState({ filterLetter: letter, filteredsongs: filteredSongs });
  };

  changeHandles = (e) => {
    this.setState({ song: e.target.value });
    // console.log(this.state);
  };

  submitHandler = (e) => {
    e.preventDefault();
    ///const gets = this.state.filteredsongs;
    updateSong(this.state.gets._id, this.state.song);
    alert("changes saved");
  };

  render() {
    const gets = this.state.filteredsongs;
    /*  if (this.props.isLoggedIn) { */
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
          <br></br>
          <br></br>
          <img src={Beatles} alt="" className="beatles"></img>
          <div className="alphabetBox">
            <Alphabet
              isLoggedIn={this.state.isLoggedIn}
              letterSelector={this.filterSongs}
            />
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
              // onClick={this.songClick}
            >
              <div
                className="songSelector"
                key={gets._id}
                value={gets.Song}
                datavalue={gets.Lyrics}
                onClick={this.songClick}
              >
                {gets.Song}
              </div>
              <div className="Icons">
                <Icon
                  color="alert"
                  onClick={() => updateSong(gets._id, this.state.song)}
                >
                  edit
                </Icon>
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
          {" "}
          <div
            className="modal-scrimm"
            onClick={() => {
              this.clearBox(null);
            }}
          >
            <SongInfo
              value={this.state.song}
              datavalue={this.state.lyrics}
            ></SongInfo>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

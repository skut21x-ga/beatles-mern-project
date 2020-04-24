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
import { updateSong } from "../ApiAccess/api";

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

      id: ""

      lyricsbox: "songLyrics-Hidden",

    };
  }

  songClick = (e) => {
    this.setState({
      song: e.target.getAttribute("value"),
      lyrics: e.target.getAttribute("datavalue"),

      id: e.target.getAttribute("key")

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
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/Ringo%20Starr`
        //`http://localhost:4000/name/Ringo%20Starr`
        ,
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
        console.log(this.state.gets)
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

  changeHandles = e =>{
    this.setState({song: e.target.value})
    console.log(this.state)
}

submitHandler = e =>{
  e.preventDefault()
///const gets = this.state.filteredsongs;
  updateSong(this.state.gets._id,this.state.song)
}

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
          <form onSubmit={this.submitHandler}>
                    <div>ID<input type="text" name= "id" onChange={this.changeHandles}/></div>
                </form> 
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
                <Icon  color="primary"   onClick={()=>updateSong(gets._id,this.state.song)}>
                  edit
                </Icon>

                </Icon>{" "}

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

export default RingoStarr;

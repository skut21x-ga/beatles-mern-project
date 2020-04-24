import React, { Component } from "react";
import "./GeorgeHarrison.css";
import axios from "axios";
import SongInfo from "../SongInfo";
import Alphabet from "../Alphabet/Alphabet";
import Icon from "@material-ui/core/Icon";
import { deleteSong } from "../ApiAccess/api";
import { updateSong } from "../ApiAccess/api";
import George from "../img/George-Harrison-Photo.jpg";
import { Route } from "react-router-dom";

class GeorgeHarrison extends Component {
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
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/George%20Harrison`        
        //`http://localhost:4000/name/George%20Harrison`
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
    console.log(letter, "from Artist.js");
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
          <img src={George} alt="" className="profile"></img>
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

export default GeorgeHarrison;

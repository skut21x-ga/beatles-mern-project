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
      id: ""
    };
  }

  songClick = (e) => {
    this.setState({
      song: e.target.getAttribute("value"),
      lyrics: e.target.getAttribute("datavalue"),
      id: e.target.getAttribute("key")
    });
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/Paul%20McCartney`
        //`http://localhost:4000/name/Paul%20McCartney`
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
          <img src={Paul} alt="" className="profile"></img>
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
        <div className="songLyrics">
        <SongInfo value={this.state.song} datavalue={this.state.lyrics}>
            Song!
          </SongInfo>
        </div>
      </div>
    );
  }
}

export default PaulMcCartney;

import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import SongInfo from "../SongInfo"


class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       gets: [],
       song: "",
       lyrics: ""
    }
  }
  
  songClick=(e)=>{
    this.setState({song: e.target.getAttribute("value"), lyrics: e.target.getAttribute("datavalue")})
  }


componentDidMount(){
  axios.get(`https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/`,{headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
  .then(res => {
    console.log(res)
    this.setState({gets: res.data})

  })
  .catch(error =>{
    console.log(error)
  })
}

render() {
  const {gets} = this.state

    return(
      <div>
        <div>
        {
      gets.length ? 
      gets.map(gets => 
      <div key={gets._id} value={gets.Song} datavalue={gets.Lyrics} onClick={this.songClick} >
        {gets.Song}
      </div>): 
      null
    }
      </div><div className="songLyrics">
      <SongInfo value={this.state.song} datavalue={this.state.lyrics}>Song!</SongInfo>
        </div></div>
    );
  };
}

export default Home;
 
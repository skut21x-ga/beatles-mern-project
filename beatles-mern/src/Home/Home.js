import React, { Component } from "react";
import "./Home.css";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       gets: []
    }
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
          The Beatles<br></br><br></br>
        <h1>This is the homepage!</h1>
        <p>Where you can Read, Update, Delete or even Create your songs from the API</p>
        <p>This is the server where you can observe the changes</p>
        <a href="https://beatles-api.herokuapp.com/">Click Here</a>
        </div>
      );
    };
}

export default Home;

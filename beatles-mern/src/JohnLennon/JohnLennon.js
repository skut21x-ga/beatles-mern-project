import React, { Component } from "react";
import "./JohnLennon.css";
import axios from "axios";

class Get extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       gets: []
    }
  }
  
componentDidMount(){
  axios.get(`https://cors-anywhere.herokuapp.com/dakom1-crud-api.herokuapp.com/lists`,{headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
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
          List of Pokemon
          <p>Pokemon<span></span>ID</p>
          {
            gets.length ? gets.map(gets => <div key={gets._id}>{gets.name}<span></span>{gets._id}</div>): null
          }
        </div>
      );
    };
  }

export default Get;

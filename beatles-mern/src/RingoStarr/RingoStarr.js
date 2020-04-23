import React, { Component } from 'react'
import "./RingoStarr.css";
import axios from "axios";

class RingoStarr extends Component {
     constructor(props) {
        super(props)
        this.state = {
            gets: []
         }
      }
      
    componentDidMount(){
      axios.get(`https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/Ringo%20Starr`,{headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
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
              RingoStarr<br></br><br></br>
              {
            gets.length ? gets.map(gets => <div key={gets._id}>{gets.Song}</div>): null
          }
            </div>
          );
        };
}

export default RingoStarr
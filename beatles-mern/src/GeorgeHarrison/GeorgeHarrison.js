import React, { Component } from 'react'
import "./GeorgeHarrison.css";
import axios from "axios";

class GeorgeHarrison extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            gets: []
         }
      }
      
    componentDidMount(){
      axios.get(`https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/George%20Harrison`,{headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
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
              GeorgeHarrison<br></br><br></br>
              {
            gets.length ? gets.map(gets => <div key={gets._id}>{gets.Song}</div>): null
          }
            </div>
          );
        };
}

export default GeorgeHarrison

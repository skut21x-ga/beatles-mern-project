import React, { Component } from "react";
import "./PaulMcCartney.css";
import axios from "axios";
import { Route, Link } from "react-router-dom";

class PaulMcCartney extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gets: []
         }
      }
      
    componentDidMount(){
      axios.get(`https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/Paul%20McCartney`,{headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
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
                PaulMcCartney<br></br><br></br>
            {
            gets.length ? gets.map(gets => <div key={gets._id}>
                <Link to={"/" + gets.Song}>
                    {gets.Song}
                </Link></div>): null
            }
            </div>
          );
        };
}

export default PaulMcCartney

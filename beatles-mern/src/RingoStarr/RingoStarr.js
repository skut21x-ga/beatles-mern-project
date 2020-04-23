import React, { Component } from 'react'
import "./RingoStarr.css";
import axios from "axios";

class Upd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            id: ""
        }
    }

    changeHandler = e =>{
        this.setState({name: e.target.value})
    }

    changeHandles = e =>{
        this.setState({id: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        const user ={
            method: "put",
            url: `https://cors-anywhere.herokuapp.com/dakom1-crud-api.herokuapp.com/lists/${this.state.id}`,
            headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'},
            data: {
              name: this.state.name,
              id: this.state.id
            }
    };

    axios(user).then(
        (res) => {
          console.log(res.data);
          let info= document.querySelector(".change")
            info.innerHTML= "name: "+res.data.name;
        },
        (error) => {
          console.log(error);
        }
      );
        }
    render() {
        return (
            <div>
                <p>
                    This is the  where you can create your own Pokemon.<br></br> 
                    You will need the ID and any name of your choice.

                </p>

                <form onSubmit={this.submitHandler}>
                    <div>Name<input type="text" name= "name" onChange={this.changeHandler}/></div>
                    <div>ID<input type="text" name= "id" onChange={this.changeHandles}/></div>

                    <button type="submit">Update</button>
                </form>
                <p className="change"></p>

            </div>
            
        )
    }
}

export default Upd
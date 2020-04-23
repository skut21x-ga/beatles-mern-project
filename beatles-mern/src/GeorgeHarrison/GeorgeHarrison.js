import React, { Component } from 'react'
import "./GeorgeHarrison.css";
import axios from "axios";

class Del extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0
        }
    }
    changeHandler = e =>{
        this.setState({id: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()

        axios.delete(`https://cors-anywhere.herokuapp.com/dakom1-crud-api.herokuapp.com/lists/${this.state.id}`,
        {headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
        .then(res => {
            console.log(res.data)  
            let info= document.querySelector(".change")
            info.innerHTML= "name: "+res.data.name;  
          })
          .catch(error =>{
            console.log(error)
          })
        }
    render() {
        return (
            <div>
                <p>
                    This is the  where you can delete Pokemon from the API.<br></br>
                    You will need the ID.

                </p>
                <form onSubmit={this.submitHandler}>
                    <div>ID<input type="text" name= "id" onChange={this.changeHandler}/></div>

                    <button type="submit">Delete</button>
                </form>
                <p className="change"></p>

            </div>
            
        )
    }
}

export default Del

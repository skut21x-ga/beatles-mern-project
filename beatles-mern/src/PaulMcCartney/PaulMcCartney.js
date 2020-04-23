import React, { Component } from "react";
import "./PaulMcCartney.css";
import axios from "axios";

class Put extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }


    changeHandler = e =>{
        this.setState({name: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        const user ={
            method: "post",
            url: `https://cors-anywhere.herokuapp.com/dakom1-crud-api.herokuapp.com/lists/`,
            headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'},
            data: {
              name: this.state.name,
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

      // axios.post(`https://cors-anywhere.herokuapp.com/dakom1-crud-api.herokuapp.com/lists/`,
        // {headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}},{"body":{"name":"mike"}})
        // .then(res => {
        //     console.log(user)
        //     console.log(res.data)    
        //   })
        //   .catch(error =>{
        //     console.log(error)
        //   })
    }
    render() {
        return (
            <div>
                <p>This is the  where you can create your own Pokemon</p>

                <form onSubmit={this.submitHandler}>
                    <div>Name<input type="text" name= "name" onChange={this.changeHandler}/></div>

                    <button type="submit">Post</button>
                </form>

                <p className="change"></p>

            </div>
            
        )
    }
}

export default Put

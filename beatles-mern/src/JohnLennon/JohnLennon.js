import React, { Component } from "react";
import "./JohnLennon.css";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";


class JohnLennon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gets: [],
      song: ""
   }
  }
 Modal() {

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const song = {
    artist: "artistName",
    song: "songTitle",
    lyrics: "songLyrics",
  };

  const dummy = () => console.log("hello")
}
  songClick=(e)=>{
    this.setState({song: e.target.getAttribute("value")},this.logState)
    {handleOpen}
  }
  
  logState=()=>{
    console.log(this.state.song)
  }


  
componentDidMount(){
  axios.get(`https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/name/John%20Lennon`,{headers: {'Access-Control-Allow-Origin': 'dakom1-crud-api.herokuapp.com/lists'}})
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
          JohnLennon<br></br><br></br>
          {
            gets.length ? 
            gets.map(gets =>{
               <div key={gets._id} value={gets.Song} onClick={this.songClick}>
                 {gets.Song}
                 </div>
              }): null
          }
          <Modal>Hello</Modal>
        </div>
      );
    };
  }

export default JohnLennon;

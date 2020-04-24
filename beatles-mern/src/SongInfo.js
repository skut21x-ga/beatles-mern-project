import React from "react";
let url =
  "https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com";
export default function SongInfo(props) {
  return (
    <div>
      <div>
        <h2 id="Song Title"></h2>
       
          <div>{props.value}</div>
          <div>{props.datavalue}</div>
       

        <p>
          <br></br>
          <br></br>
          {props.value}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {props.datavalue}
        </p>
      </div>
    </div>
  );
}

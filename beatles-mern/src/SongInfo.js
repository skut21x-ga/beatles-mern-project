import React from "react";
import "./SongInfo.css";

export default function SongInfo(props) {
  return (
    <div className="lyricsContainer">
      <div className="songModal">
        <div className="textBox">
          <div>
            <div className="songTitle">{props.value}</div>
            <div>{props.datavalue}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function SongInfo(props) {
  console.log(props)
  return (
    <div>
      <div>
        <h2 id="Song Title">Text in a modal</h2>
        <p id="simple-modal-description">
          Song Lyrics
          {props.data.artist}
          {props.data.song}
          {props.data.lyrics}
        </p>
      </div>
    </div>
  );
}

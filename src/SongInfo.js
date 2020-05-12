import React, { Component } from "react";
import "./SongInfo.css";

class SongInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyricsbox: "songLyrics-View",
      value: props.value,
      datavalue: props.datavalue,
    };
    this.clearBox = this.clearBox.bind(this);
  }
  clearBox() {
    this.setState({
      lyricsbox: "songLyrics-Hidden",
    });
    console.log(this.state.selectedBox);
  }
  render() {
    return (
      <div className={this.state.lyricsbox}>
        <div
          className="modal-scrimm "
          onClick={() => {
            this.clearBox(null);
          }}
        >
          <div className="lyricsPage">
            <div className="closeButton">
              <h3 className="closeButtonText">CLOSE</h3>
            </div>
            <div className="lyricsContainer">
              <div className="songModal">
                <div className="textBox">
                  <div>
                    <div className="songTitle">{this.props.value}</div>
                    <div>{this.props.datavalue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SongInfo;

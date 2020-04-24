import axios from "axios";

export function deleteSong(id) {
  axios
    .delete(
      `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/${id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "dakom1-crud-api.herokuapp.com/lists",
        },
      }
    )
    .then((res) => {
      console.log(res);
    });
  window.setTimeout(function () {
    window.location.reload(false);
  }, 500);
}

export function createSong(data) {
  axios
    .post(
      `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/`,
      { Name: data.artist, Song: data.song, Lyrics: data.lyrics },
      {
        headers: {
          "Access-Control-Allow-Origin": "dakom1-crud-api.herokuapp.com/lists",
        },
      }
    )
    .then((res) => {
      console.log(res);
    });
  window.setTimeout(function () {
    window.location.reload(false);
  }, 500);
}

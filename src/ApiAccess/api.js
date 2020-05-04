import axios from "axios";

export function deleteSong(id) {
  let URL = `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/${id}`;

  axios
    .delete(URL, {
      headers: {
        "Access-Control-Allow-Origin": "dakom1-crud-api.herokuapp.com/lists",
      },
    })
    .then((res) => {
      console.log(res);
    });
  window.setTimeout(function () {
    window.location.reload(false);
  }, 500);
}

export function updateSong(id, data) {
  // let localUrl = `http://localhost:4000/${id}`;
  let URL = `https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com/${id}`;

  axios
    .put(
      URL,
      { Song: data },
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
  alert("new song created");
}

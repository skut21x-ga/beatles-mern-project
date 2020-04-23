import React from "react";
let url = "https://beatles-api.herokuapp.com/"

export default function SongInfo(props) {
  // console.log(props)
  // fetch(url)
	// 	.then(res => {
	// 		let response = res.json();{(
// 			response.then(SongInfo => { 				
//         event.preventDefault();
// 				this.blur(); // Manually remove focus from clicked link.

// 				const html = $('#ex1')
// 				const elementIdArray = ["Artist", "Song", "Lyrics"]

// 				elementIdArray.forEach(elemId => {
// 					$(`#${elemId}`).text(`${elemId}: ${SongInfo[elemId]}`)
// 				})

// 				$(html).appendTo('body').modal()
// 			});
// 		})
// 		.catch(err => {
// 			console.log("something went wrong...", err);
// 		});
// }
  return (
    <div>
      <div>
        <h2 id="Song Title">Text in a modal</h2>
        <p>
          Song Name:
         {props.value}
         Song Lyrics: 
         {props.datavalue}
        </p>
      </div>
    </div>
  );
  }
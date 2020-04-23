import React from "react";
let url = "https://cors-anywhere.herokuapp.com/https://beatles-api.herokuapp.com"

export default function SongInfo(props) {
<<<<<<< HEAD
  console.log(props)
  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
		// 		const html = $('#ex1')
		// 		const elementIdArray = ["Artist", "Song", "Lyrics"]

		// 		elementIdArray.forEach(elemId => {
		// 			$(`#${elemId}`).text(`${elemId}: ${SongInfo[elemId]}`)
		// 		})

		// 		$(html).appendTo('body').modal()
		// 	});
		// })
		// .catch(err => {
		// 	console.log("something went wrong...", err);
		// });
=======
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
>>>>>>> origin
  return (
    <div>
      <div>
        <h2 id="Song Title"></h2>
        <p>
          <br></br><br></br>
         {props.value}<br></br><br></br>
         <br></br><br></br>
         {props.datavalue}
        </p>
      </div>
    </div>
  );
  }
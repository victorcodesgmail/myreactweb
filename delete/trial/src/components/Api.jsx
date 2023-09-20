import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './api.css'

const Api = () => {
    const [post, setPost]=useState({})
    useEffect(()=>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(response=>{
            setPost(response.data);
        })
        .catch(error=>{
            console.log('error');
        });
    },[])
  return (
    <div className='api'>
       {/* {post.map((post)=>(
        <li >{post}</li>
       ))} */}
       <p>{post.value}</p>
       
    </div>
  )
}

export default Api


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Api = () => {
//   const [worldChart, setWorldChart] = useState([]);

//   useEffect(() => {
//     // Replace 'YOUR_DEEZER_ACCESS_TOKEN' with your actual Deezer access token
//     const accessToken = 'YOUR_DEEZER_ACCESS_TOKEN';
//     const apiUrl = 'https://api.deezer.com/chart';

//     axios
//       .get(apiUrl, {
//         params: {
//           access_token: accessToken,
//           limit: 10, // Adjust the limit as needed to fetch top songs from the world chart
//         },
//       })
//       .then(response => {
//         setWorldChart(response.data.tracks.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className='api'>
//       <h2>World Chart</h2>
//       <ul>
//         {worldChart.map(song => (
//           <li key={song.id}>
//             {song.title} - {song.artist.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Api;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Api = () => {
//   const [worldChart, setWorldChart] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://api.deezer.com/chart';

//     axios
//       .get(apiUrl)
//       .then(response => {
//         setWorldChart(response.data.tracks.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className='api'>
//       <h2>World Chart</h2>
//       <ul>
//         {worldChart.map(song => (
//           <li key={song.id}>
//             <p>{song.title}</p>
//             <p>{song.artist.name}</p>
//             <audio controls>
//               <source src={song.preview} type='audio/mpeg' />
//               Your browser does not support the audio element.
//             </audio>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Api;


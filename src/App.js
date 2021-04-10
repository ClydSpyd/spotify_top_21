import React, { useEffect, useState } from 'react' 
import './App.css';
import queryString from 'query-string'
import axios from 'axios'
import spinner from 'Assets/Loaders/spin_white.svg'


const App = ({}) => {

  const [ state, setState ] = useState({serverData:null, redirecting:false})
  const { serverData, redirecting } = state
  const { access_token } = queryString.parse(window.location.search)

  const callAPI = async (token) => {

    const config = {
      data : {
        "scope": "user-top-read"
      },
      headers:{
        'Authorization': 'Bearer ' + token
      }
    }
    const {data} = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term`, config)

    const formattedObject = data.items.map(item => {
      return {
        name:item.name,
        artist: {
          name: item.artists[0].name,
          href: item.artists[0].href,
          uri: item.artists[0].uri
        },
        album:{
          name: item.album.name,
          href: item.album.href,
          uri: item.album.uri,
          images: item.album.images,
          release_date: item.album.release_date,
        },
        preview_url:item.preview_url,
        href:item.href
      }
    })

    console.log(formattedObject)
    setState({...state, serverData: formattedObject})
  }

  useEffect(()=>{
    if(access_token){ callAPI(access_token) }
  },[])

  const handleLogin = () => {
    window.location="http://localhost:8888/login";
    setState({...state, redirecting:true})
  }

  return (
    <div className="App">

      <div onClick={handleLogin} className="loginBtn">{!redirecting?"Login to Spotify":<img className={"spinner"} src={spinner} ></img>}</div>
    </div>
  );
}

export default App;

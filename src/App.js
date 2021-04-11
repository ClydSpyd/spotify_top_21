import React, { useEffect, useState } from 'react' 
import queryString from 'query-string'
import { callSpotifyAPI } from 'API/API.service';
import spinner from 'Assets/Loaders/spin_white.svg'
import './App.scss';
import AppMain from 'Components/AppMain/AppMain';


const App = ({}) => {

  const [ serverData, setServerData ] = useState(null) 
  const [ redirecting, setRedirecting ] = useState(false) 
  const { access_token } = queryString.parse(window.location.search)

  const getServerData = async () => {
    const artists = await callSpotifyAPI(access_token, 'artists', 'long_term');
    const tracks = await callSpotifyAPI(access_token, 'tracks', 'long_term');
    setServerData({...serverData, tracks, artists })
    
  }


  useEffect(()=>{
    if(access_token){ getServerData() }
  },[])

  const handleLogin = () => {
    window.location="http://localhost:8888/login";
    setRedirecting(true)
  }

  return (
    <div className="App">
      { 
        !serverData ?    
          <div 
            onClick={handleLogin} 
            className="loginBtn">
              {!redirecting?"Get my top tracks":<img className={"spinner"} src={spinner} ></img>}
          </div>
        :

          <AppMain serverData={serverData} />
      } 
    </div>
  );
}

export default App;

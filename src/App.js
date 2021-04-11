import React, { useEffect, useState } from 'react' 
import queryString from 'query-string'
import { callSpotifyAPI } from 'API/API.service';
import './App.scss';
import AppMain from 'Components/AppMain/AppMain';
import { initialDummyData } from 'API/initialDummyData';
import Landing from 'Components/Landing/Landing';


const App = ({}) => {

  const [ serverData, setServerData ] = useState(null) 
  const { access_token } = queryString.parse(window.location.search)

  const getServerData = async () => {
    const artists = await callSpotifyAPI(access_token, 'artists', 'long_term');
    const tracks = await callSpotifyAPI(access_token, 'tracks', 'long_term');
    setServerData({...serverData, tracks, artists })
  }


  useEffect(()=>{ if(access_token){ getServerData() } },[])

  return (
    <div className="App">
      { 
        !serverData ?   
          <Landing dummyData={initialDummyData} />
        :

          <AppMain serverData={serverData} />
      } 
    </div>
  );
}

export default App;

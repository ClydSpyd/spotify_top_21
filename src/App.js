import React, { useEffect, useState } from 'react' 
import queryString from 'query-string'
import { getRecomendations, getTopData } from 'API/API.service';
import './App.scss';
import AppMain from 'Components/AppMain/AppMain';
import { initialDummyData } from 'API/initialDummyData';
import Landing from 'Components/Landing/Landing';
import { getGenreArray } from 'Utils/getGenreArray';
import axios from 'axios';


const App = ({}) => {

  const [ serverData, setServerData ] = useState(null) 
  const { access_token } = queryString.parse(window.location.search)

  const getServerData = async () => {
    const artists = await getTopData(access_token, 'artists', 'long_term');
    const tracks = await getTopData(access_token, 'tracks', 'long_term');
    const recommendations = await getRecomendations(getGenreArray(artists), access_token)
    setServerData({...serverData, tracks, artists, recommendations })
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

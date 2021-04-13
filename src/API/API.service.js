
import axios from 'axios'

export const getTopData = async (token, type, time_range) => {

  const config = {
    data : {
      "scope": "user-top-read"
    },
    headers:{
      'Authorization': 'Bearer ' + token
    }
  }

  const {data} = await axios.get(`https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}`, config)

  const formattedData = 
    type==='tracks'?
      data.items.map(track => {
        return {
          name:track.name,
          artist: {
            name: track.artists[0].name,
            href: track.artists[0].href,
            uri: track.artists[0].uri
          },
          album:{
            name: track.album.name,
            href: track.album.href,
            uri: track.album.uri,
            images: track.album.images,
            release_date: track.album.release_date,
          },
          preview_url:track.preview_url,
          href:track.href,
          uri:track.uri
        }
      })
    :
      data.items.map(artist => {
        return {
          name: artist.name,
          genres: artist.genres,
          images: artist.images,
          href: artist.href,
          uri: artist.uri
        }
      })
  return formattedData
}

export const getRecomendations = async ( genres, token ) => {

  const config = {
    headers:{
      'Authorization': 'Bearer ' + token
    }
  }
  
  const {data} = await axios.get(`https://api.spotify.com/v1/recommendations?seed_genres=${genres[0]},${genres[1]},${genres[2]},${genres[3]},${genres[4]}`, config)
  
  const formattedData = data.tracks.map(track => {
    return{
      name:track.name,
      artist: {
        name: track.artists[0].name,
        href: track.artists[0].href,
        uri: track.artists[0].uri
      },
      album:{
        name: track.album.name,
        href: track.album.href,
        uri: track.album.uri,
        images: track.album.images,
        release_date: track.album.release_date,
      },
      preview_url:track.preview_url,
      href:track.href,
      uri:track.uri
    }
  })

  return(formattedData)

  
}
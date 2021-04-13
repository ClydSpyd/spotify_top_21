import ArtistItem from 'Components/ArtistItem/ArtistItem';
import React from 'react';

import styles from './AppMain.module.scss';
import play from 'Assets/Icons/play_white.png'
import logo from 'Assets/spotify_green.png'
import RecommendationItem from 'Components/RecomendationItem/RecommendationItem';

const AppMain = ({ serverData: { artists, tracks, recommendations } }) => {

  return (
    <section className={styles.appMain}>

      <div className={styles.typeHeader}> <h4>Your Top Artists</h4> </div>
      <div className={styles.artistsContainer}>
        {artists?.map((artist, idx) => <ArtistItem key={idx} artist={artist} /> )}
      </div>

      <div className={styles.typeHeader}> <h4>Your Top Tracks</h4> </div>
      <div className={styles.tracksContainer}>
        <div className={`${styles.row} ${styles.topBar}`}>
          <div className={styles.column}></div>
          <div className={styles.column}>Title</div>
          <div className={styles.column}>Artist</div>
          <div className={styles.column}>Album</div>
        </div>
        {tracks?.map((track, idx) => 
          <div key={idx} className={`${styles.row}`} onClick={()=>window.location=track.uri} >
            <div className={styles.column}><img src={play} alt="play"/></div>
            <div className={styles.column}><p>{track.name}</p></div>
            <div className={styles.column}><p>{track.artist.name}</p></div>
            <div className={styles.column}><p>{track.album.name}</p></div>
          </div> 
          )}
      </div>

      <div className={styles.recommendationsHeader}>
        <img src={logo} alt="logo"/>
        <h4>Spotify's top picks for you</h4>
      </div>

      <div className={styles.recommendationsContainer}>
        {
          recommendations?.map((item, idx) => <RecommendationItem key={idx} item={item} />)
        }
      </div>

    </section>
  )

}

export default AppMain;
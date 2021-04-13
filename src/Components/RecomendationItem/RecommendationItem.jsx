import React from 'react';

import styles from './RecommendationItem.module.scss';
import play from 'Assets/Icons/play_white.png'

const RecommendationItem = ({item:{name, artist, href, uri, album: { images }}}) => {

  return (
    <div onClick={()=>window.location=uri} className={styles.recommendationItemContainer}>
        <div className={styles.image}>
          <img className={styles.album} src={images[0].url} alt={``}/>
          <img className={styles.play} src={play} alt="play"/>
        </div>

        <div className={styles.text}>
          <h5 onClick={()=>window.location=uri}>{name}</h5>
          <h6 onClick={()=>window.location=artist.uri}>{artist.name}</h6>
        </div>
    </div>
  )

}

export default RecommendationItem;
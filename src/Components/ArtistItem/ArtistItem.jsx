import React from 'react';

import styles from './ArtistItem.module.scss';

const ArtistItem = ({artist:{name, images, genres, href, uri}}) => {

  return (
    <div className={styles.artistItemContainer}>
        <img src={images[0].url} alt={`${name}`}/>
        <h5>{name}</h5>
    </div>
  )

}

export default ArtistItem;
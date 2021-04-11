import ArtistItem from 'Components/ArtistItem/ArtistItem';
import React from 'react';

import styles from './AppMain.module.scss';

const AppMain = ({ serverData: { artists, tracks } }) => {

  return (
    <section className={styles.appMain}>
      <div className={styles.typeHeader}> <h4>Your Top Artists</h4> </div>
      <div className={styles.artistsContainer}>
        {artists?.map((artist, idx) => <ArtistItem artist={artist} /> )}
      </div>
      <div className={styles.typeHeader}> <h4>Your Top Tracks</h4> </div>
      <div className={styles.tracksContainer}>
        {tracks?.map((track, idx) => <h4>{track.name}</h4> )}
      </div>

    </section>
  )

}

export default AppMain;
import React, { useState } from 'react';
import AppMain from 'Components/AppMain/AppMain';
import spinner from 'Assets/Loaders/spin_white.svg'

import styles from './Landing.module.scss';
import logo from 'Assets/spotify_white.png'

const Landing = ({ dummyData }) => {

  const [ redirecting, setRedirecting ] = useState(false) 

  const handleLogin = () => {
    window.location="http://localhost:8888/login";
    // window.location="https://spotify2021-backend.herokuapp.com/login";
    setRedirecting(true)
  }


  return (
    <section className={styles.landingContainer}> 
      <div className={styles.initialOverlay}>
          <div 
            onClick={handleLogin} 
            className={styles.loginBtn}>
              {!redirecting?<span> <img className={styles.logo} src={logo} alt="logo" /> Get my top tracks</span>:<img className={styles.spinner} src={spinner} ></img>}
          </div>

      </div>
      <AppMain serverData={dummyData} />

    </section>
  )

}

export default Landing;
import React, { useState } from 'react';
import AppMain from 'Components/AppMain/AppMain';
import spinner from 'Assets/Loaders/spin_white.svg'

import styles from './Landing.module.scss';
import logo from 'Assets/spotify_white.png'
import queryString from 'query-string'

const Landing = ({ dummyData }) => {

  const [ redirecting, setRedirecting ] = useState(false) 
  const { access_token } = queryString.parse(window.location.search)

  const handleLogin = () => {
    // window.location="http://localhost:8888/login";
    window.location="https://spotify2021-backend.herokuapp.com/login";
    setRedirecting(true)
  }


  return (
    <section className={styles.landingContainer}> 
      <div className={styles.initialOverlay}>
          <div 
            onClick={handleLogin} 
            className={`${styles.loginBtn} ${redirecting && styles.disable}`}>
              {redirecting||access_token ?<img className={styles.spinner} src={spinner} />:<span><img className={styles.logo} src={logo} alt="logo" /> Get my top tracks</span>}
          </div>

      </div>
      <AppMain serverData={dummyData} />

    </section>
  )

}

export default Landing;
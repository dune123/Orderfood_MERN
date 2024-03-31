import React from 'react'
import styles from "./AppDownload.module.css"
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className={styles.app_download} id="app_download">
        <p>For Better Experience Download
        <br/>Tomato App
        </p>
        <div className={styles.app_download_platforms}>
            <img src={assets.play_store}/>
            <img src={assets.app_store}/>
        </div>
    </div>
  )
}

export default AppDownload
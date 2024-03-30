import React from 'react'
import styles from "./Footer.module.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
        <div className={styles.footer_content}>
            <div className={styles.footer_content_left}>
                <img src={assets.logo}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates ut quos veritatis, non eligendi error iusto neque, ducimus laudantium repudiandae magni consequuntur quis alias temporibus placeat enim laboriosam deserunt.</p>
                <div className={styles.footer_social_icons}>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className={styles.footer_content_center}>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className={styles.footer_content_right}>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className={styles.footer_copyright}>
            Copyright 2024 @ Tomato.com - All Right Reserved. 
        </p>
    </div>
  )
}

export default Footer
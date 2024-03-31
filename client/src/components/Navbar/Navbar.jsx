import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom'

const Navbar = ({setshowlogin}) => {
    const [menu,setMenu]=useState("home")

    const selecteddiv=document.getElementsByClassName("active")
    
  return (
    <div className={styles.navbar}>
        <img src={assets.logo} className={styles.logo}/>
        <ul className={styles.navbar_menu}>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}style={menu === "home" ? { paddingBottom: "0.2vh", borderBottom: "2px solid #49557e" } : {}}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}style={menu === "menu" ? { paddingBottom: "0.2vh", borderBottom: "2px solid #49557e" } : {}}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} style={menu === "mobile-app" ? { paddingBottom: "0.2vh", borderBottom: "2px solid #49557e" } : {}}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""} style={menu === "contact-us" ? { paddingBottom: "0.2vh", borderBottom: "2px solid #49557e" } : {}}>contact us</li>
        </ul>
        <div className={styles.navbar_right}>
            <img src={assets.search_icon} style={{cursor:"pointer"}}/>
            <div className={styles.navbar_search_icon}>
                <Link to="/cart"><img src={assets.basket_icon} alt="" style={{cursor:"pointer"}}/></Link>
                <button onClick={()=>setshowlogin(true)}>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
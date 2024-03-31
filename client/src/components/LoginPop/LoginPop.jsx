import React, { useState } from 'react'
import styles from "./LoginPop.module.css"
import { assets } from '../../assets/assets'

const LoginPop = ({setshowlogin}) => {
    const [currstate,setCurrstate]=useState("Sign Up")
  return (
    <div className={styles.login_popup}>
        <form className={styles.login_popup_container}>
            <div className={styles.login_popup_title}>
                <h2>{currstate}</h2>
                <img src={assets.cross_icon} onClick={()=>setshowlogin(false)}/>
            </div>
            <div className={styles.login_popup_input}>
            {
                currstate==="login"?<></>:
                <input type="text" placeholder='Your Name' required/>
            }
                <input type="email" placeholder='Your email'
                required/>
                <input type="password" placeholder='Password'
                required/>
            </div>

            <button>{currstate==="Sign Up"?"Create account":"Login"}</button>
            <div className={styles.login_popup_condition}>
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy</p>
            </div>
            {
                currstate==="login"?
                <p>Create a new account?<span onClick={()=>setCurrstate("sign up")}>Click here</span></p>:
                <p>Already have an account?<span onClick={()=>setCurrstate("login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPop
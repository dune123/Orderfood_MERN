import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
    <div className={styles.Header}>
        <div className={styles.header_contents}>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crofted with the finest ingredients and cultinary expertise. Our mission to satisfy your craving and elevate your dining experience, one delicious meal at a time</p>
            <button>View Menu</button>
        </div>
    </div>
    </div>
  )
}

export default Header
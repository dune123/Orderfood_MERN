import React, { useContext } from 'react'
import styles from "./Cart.module.css"
import {StoreContext} from "../../components/context/StoreContext"

const Cart = () => {
  const {cartItems,food_list,removeFromCart}=useContext(StoreContext)
  return (
    <div className={styles.cart}>
      <div className={styles.cart_items}>
        <div className={styles.cart_items_title}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
      </div>
    </div>
  )
}

export default Cart
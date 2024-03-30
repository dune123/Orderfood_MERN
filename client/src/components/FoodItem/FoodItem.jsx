import React, { useContext, useState } from 'react'
import styles from "./FoodItem.module.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
    const {cartItem,addToCart,removeFromCart}=useContext(StoreContext)

    return (
    <div className={styles.food_item}>
        <div className={styles.food_item_img_container}>
            <img className={styles.food_item_image} src={image} alt=""/>
            {
                !cartItem[id]?(
                    <img className={styles.add} src={assets.add_icon_white} onClick={()=>addToCart(id)}/>
                ):
                (
                    <div className={styles.food_item_counter}>
                        <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red}/>
                        <p>{cartItem[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)}/>
                    </div>
                )
            }
        </div>
        <div className={styles.food_item_info}>
            <div className={styles.food_item_name_rating}>
                <p>{name}</p>
                <img src={assets.rating_starts}/>
            </div>
            <p className={styles.food_item_desc}>
                {description}
            </p>
            <p className={styles.food_item_price}>
                $ {price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem
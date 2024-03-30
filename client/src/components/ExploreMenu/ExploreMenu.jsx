import React from 'react'
import styles from "./ExploreMenu.module.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className={styles.exploremenu} id={styles.exploremenu}>
        <h1>Explore our menu</h1>
        <p className={styles.exploremenutext}>Choose from a diverse menu featuring a delectable array of dishes crofted with the finest ingredients and cultinary expertise. Our mission to satisfy your craving and elevate your dining experience, </p>
        <div className={styles.exploremenu_list}>
            {
                menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className={styles.explore_menu_list_item}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} style={category === item.menu_name ? { padding: "2px", border: "4px solid tomato",borderRadius:"10vh" } : {}}/>
                        <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
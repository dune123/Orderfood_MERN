import React, { useState } from 'react'
import styles from "./Home.module.css"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import LoginPop from '../../components/LoginPop/LoginPop'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../AppDownload/AppDownload'


const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
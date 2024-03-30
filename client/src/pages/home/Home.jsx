import React, { useState } from 'react'
import styles from "./Home.module.css"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useActionData } from 'react-router-dom'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
        <Navbar/>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Footer/>
    </div>
  )
}

export default Home
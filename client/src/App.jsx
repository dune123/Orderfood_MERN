import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
import LoginPop from './components/LoginPop/LoginPop'
import Footer from './components/Footer/Footer'

function App() {
  const [showlogin,setShowlogin]=useState(false)

  return (
    <div className='app'>
    {showlogin?<LoginPop setshowlogin={setShowlogin}/>:<></>}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/order" element={<PlaceOrder/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App

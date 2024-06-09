import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'
import SingleProduct from './Components/SingleProduct'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/products' element={<Products></Products>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/signup' element={<Signup></Signup>}/>
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
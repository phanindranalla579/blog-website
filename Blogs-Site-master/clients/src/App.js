import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Admin from './components/Admin'
import Product from './components/Product'
import Signup from './components/Signup'
import Addproduct from './components/Addproduct'
import Updateproduct from './components/Updateproduct'
import PrivateComponents from './components/PrivateComponents'
import Header from './components/Header'
const App = () => {
  return (
    <div className='appDiv'>

      <BrowserRouter>

        <Nav />
        <Routes>
          <Route element={<PrivateComponents />}>
            

            <Route path='/admin/product' element={<Product />} />
            <Route path='/admin/addProduct' element={<Addproduct />} />
            <Route path='/admin/updateProduct/:id' element={<Updateproduct />} />
            
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='/header/:id' element={<Header/>} />
            <Route path='/about' element={<About />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/signup' element={<Signup />} />

          
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
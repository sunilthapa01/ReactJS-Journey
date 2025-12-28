import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Component/Navbar';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Product from './Pages/Product';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';
function App() {
  return (
    <div className='Parent'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path="/About" element={ <About/> } />
        <Route path="/Contact" element={ <Contact/> } />
        <Route path="/Service" element={ <Services/> } />
        <Route path="/Product" element={<Product />} />
        <Route path='/Product/:OrderId' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default App

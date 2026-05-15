import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Interface from './Pages/UserPages/Interface';
import './App.css'
import FloatingCart from "./Components/FloatingCart";
import Order from './Pages/UserPages/Order';
import NotFound from './Pages/NotFound';
import CategoryPage from './Pages/UserPages/CategoryPage';
import Checkout from './Pages/UserPages/Checkout';
import Receipt from './Pages/UserPages/Receipt';
import ScrollToTop from './Components/ScrolltoTop';
export default function App() {
  return (
    <div>
        <ScrollToTop />
      <Routes>


          <Route path='/' element={<Login />} />
          <Route path='/menu' element={<Interface />} />
          <Route path='/category' element={<CategoryPage />} />
          
          <Route path='/order' element={<Order />} />
          <Route path='/payment' element={<Checkout />} />
          <Route path='/receipt' element={<Receipt />} />


            <Route path="*" element={<NotFound />} />
                </Routes >
                 <FloatingCart />

    </div>
  )
}

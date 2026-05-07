import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Interface from './Pages/UserPages/Interface';
import './App.css'
import FloatingCart from "./Components/FloatingCart";
import Order from './Pages/UserPages/Order';
export default function App() {
  return (
    <div>
    
      <Routes>


          <Route path='/' element={<Login />} />
          <Route path='/menu' element={<Interface />} />
          <Route path='/checkout' element={<Order />} />
                </Routes >
                 <FloatingCart />
    </div>
  )
}

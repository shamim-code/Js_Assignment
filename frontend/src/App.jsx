import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'



export default function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/registration' element={<Registration />}/>

    </Routes>
    
    </BrowserRouter>
  )
}

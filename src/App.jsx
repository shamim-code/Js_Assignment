import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Services from './Pages/Services'
import Project from './Pages/Project'


export default function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/service' element={<Services />}></Route>
          <Route path='/project' element={<Project />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

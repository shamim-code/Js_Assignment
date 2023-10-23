import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Project from './Components/Project';

export default function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <About />
      <Services />
      <Project />
      <Footer/>
      
    </div>
  )
}

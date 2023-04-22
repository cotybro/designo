import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

// Pages
import Home from './Pages/Home/'
import WebDesign from './Pages/WebDesign/'
import AppDesign from './Pages/AppDesign/'
import GraphicDesign from './Pages/GraphicDesign/'
import About from './Pages/About/'
import Locations from './Pages/Locations'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/web-design' element={<WebDesign />} />
        <Route path='/app-design' element={<AppDesign />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
        <Route path='/about' element={<About />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

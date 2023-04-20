import React from 'react'
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

import './App.css'

function App() {
  return (
    <div className='app'>
      <Header />
      {/* <Home /> */}
      {/* <WebDesign /> */}
      {/* <AppDesign /> */}
      {/* <GraphicDesign /> */}
      {/* <About /> */}
      <Locations />
      <Footer />
    </div>
  )
}

export default App

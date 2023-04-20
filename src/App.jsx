import React from 'react'
// Components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// Pages
import Home from './Pages/Home/'
import WebDesign from './Pages/WebDesign/'
import AppDesign from './Pages/AppDesign/'
import GraphicDesign from './Pages/GraphicDesign/'

import './App.css'

function App() {
  return (
    <div className='app'>
      <Header />
      {/* <Home /> */}
      {/* <WebDesign /> */}
      {/* <AppDesign /> */}
      <GraphicDesign />
      <Footer />
    </div>
  )
}

export default App

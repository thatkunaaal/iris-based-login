import './App.css'
import React from 'react'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default App

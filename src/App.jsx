import './App.css'
import React from 'react'
import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Body />
      </main>
      <Footer />
    </div>
  )
}

export default App

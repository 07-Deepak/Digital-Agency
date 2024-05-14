import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Body1 from './components/Body1'
import Body2 from './components/Body2'
import Body3 from './components/Body3'
import Footer from './components/footer'



function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Body1/>
      <Body2/>
      <Body3/>
      <Footer/>
    </div>
  )
}

export default App

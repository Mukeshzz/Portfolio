import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Test from './Test'
import Hero from './components/hero/Hero'

function App() {
  

  return (
    <>
    <div>
      <section id="Homepage">
        <Navbar />

        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
      
    </>
  )
}

export default App

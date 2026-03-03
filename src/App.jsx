import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'
function App() {

  return (
    <div className="min-h-screen bg-[#040714] text-white">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>

    </div>
  )
}

export default App

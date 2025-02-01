import React from 'react'
import Home from '../Home'
import About from '../About'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
	<>
	<main className='main p-3 overflow-y-auto'>
	<Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
    </Routes>
	</main>
	</>
    
  )
}

export default Main

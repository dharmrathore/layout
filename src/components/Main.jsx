import React, {useState} from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import { Route, Routes } from 'react-router-dom'
import Page404 from '../pages/Page404'
import Blog from '../pages/Blog'

const Main = () => {
  const [data, setData]= useState({
    name: 'Dharmendra', 
    age: 25,
    email: 'dev@example.com',
    phone: '+91 123 456 7890'
  })
  return (
	<>
	<main className='main p-3 overflow-y-auto'>
	<Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/blog" element={<Blog data={data} />} /> 
        <Route path="*" element={<Page404 />} /> 
    </Routes>
	</main>
	</>
    
  )
}

export default Main

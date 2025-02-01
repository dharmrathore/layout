import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='w-100 bg-body-tertiary h-100 d-flex justify-content-start align-items-start'>
		<nav className='navbar w-100'>
			<ul className='navbar-nav justify-content-center align-items-center w-100 gap-2'>
				<li className='nav-item w-100 text-center'><Link className='nav-link w-100' to="/">Home</Link></li>
				<li className='nav-item w-100 text-center'><Link className='nav-link w-100' to="/about">About</Link></li>
				<li className='nav-item w-100 text-center'><Link className='nav-link w-100' to="/contact">Contact</Link></li>
			</ul>
		</nav>
    </aside>
  )
}

export default Sidebar

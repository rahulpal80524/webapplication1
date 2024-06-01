import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
      <h1>Header Code</h1>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/course'}>Course</Link></li>
          <li><Link to={'/about-us'}>About</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
          <li><Link to={'/enquiry'}>Enquiry</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/tab'}>Tab</Link></li>
          <li><Link to={'/todo-list'}>ToDo List</Link></li>
          <li><Link to={'/password-generator'}>Password Generator</Link></li>
          <li><Link to={'/city-weather'}>City Weather</Link></li>
 

        </ul>
      </nav>
    </div>
  )
}

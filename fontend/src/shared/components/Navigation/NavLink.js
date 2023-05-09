import React from 'react'
import './NavLink.css'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to = '/user' exact >Service</NavLink>
      </li>
      <li>
        <NavLink to='/appointment'>Appointment</NavLink>
      </li>
      <li>
        <NavLink to='/doctor'>Doctor</NavLink>
      </li>
      <li>
        <NavLink to='/auth'>Treatment</NavLink>
      </li>
      
    </ul>
  )
}

export default NavLinks

import React from 'react'
import './NavLink.css'
import { NavLink } from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to = '/user' exact >การบริการ</NavLink>
      </li>
      <li>
        <NavLink to='/appointment'>สร้างนัดหมาย</NavLink>
      </li>
      <li>
        <NavLink to='/doctor'>ทีมแพทย์</NavLink>
      </li>
      <li>
        <NavLink to='/user/appointment'>การรักษา</NavLink>
      </li>
      <li>
        <NavLink to='/sigup'><BsFillPersonFill/></NavLink>
      </li>
      
    </ul>
  )
}

export default NavLinks

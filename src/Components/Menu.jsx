import React from 'react'
import { NavLink } from 'react-router-dom'
import "./manu.css"


export default function Menu() {
  return (
    <div>
      <ul className='manu'>
        <li className='active'><NavLink className={({isActive})=> isActive? "active": "non-active"} to={"/"}>Home</NavLink></li>
      
        <li className='active'><NavLink className={({isActive})=> isActive? "active": "non-active"} to={"/about"}>About</NavLink></li>

        <li className='active'><NavLink className={({isActive})=> isActive? "active": "non-active"} to={"/contact"}>Contact</NavLink></li>

        <li className='active'><NavLink className={({isActive})=> isActive? "active": "non-active"} to={"/project"}>Project</NavLink></li>

        <li className='active'><NavLink className={({isActive})=> isActive? "active": "non-active"} to={"/service"}>Services</NavLink></li>

        <li className='active'><NavLink className={({isActive})=> isActive? "active": "non-active"} to={"/blog"}>Blog</NavLink></li>
      </ul>
    </div>
  )
}

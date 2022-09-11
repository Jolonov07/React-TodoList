import React from "react"
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react"

const Header = () => {

   const [navbars, setNavbars] = useState(false)

   const changeBacground = () => {
     if(window.scrollY > 0) {
       setNavbars(true)
     } else {
       setNavbars(false)
     }
   }
 
   window.addEventListener('scroll', changeBacground)

   return (
      <header className={navbars ? 'header active' : 'header'}>
         <h1>ToDo</h1>
      </header>
   )
}

export default Header
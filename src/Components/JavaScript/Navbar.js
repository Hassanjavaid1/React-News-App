import React from 'react'
import '../CSS/Navbar.css'
import { IoSearchSharp } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";



function Navbar() {
  return (
    <>
      <div className="nav_container">
        <div className="navbar">
       <div id="heading">
        <span className="big">BIG</span>
        <span className="bignews">NEWS</span>
       </div>
       <div className="nav_search">
        <form action="">
          <input type="text" id="nav_input" placeholder='Search News...' />
          <button id="input_btn"><IoSearchSharp /></button>
        </form>
       </div>
       <div className="authentication"> 
       <div className="today_date">Friday November 29 2023</div>
       <button id="login">Login</button>
 </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

import React from 'react'
import '../CSS/Navbar.css'

function SubNavbar() {
  return (
    <>
      <div className="subNavbar">
        <div className="sub_nav">
            <a className='category'  href="business">Business</a>
            <a className='category' href="entertainment">Entertainment</a>
            <a className='category' href="general">General</a>
            <a className='category' href="health">Health</a>
            <a className='category' href="science">Science</a>
            <a className='category' href="sports">Sports</a>
            <a className='category' href="technology">Technology</a>
        </div>
      </div>
    </>
  )
}

export default SubNavbar

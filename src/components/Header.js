import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Header = () => {
  
  const username = sessionStorage.getItem("name");
  console.log(username)
  return (
    <div className='header'>
        <div><h1><Link className='logo' to='/'>Book Hub</Link></h1></div>
          {username ? 
            <h4>Thanks for Registering {username}</h4>:<Link to='/SignUp'>
              <button>Register</button></Link>
          }
        <Outlet />
    </div>
  )
}

export default Header
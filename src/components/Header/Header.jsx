import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <nav>
          <Link to={"/"}><h1>Party Time!</h1></Link>
          <Link to={'/add'}></Link>
       </nav>
    </div>
  )
}

export default Header
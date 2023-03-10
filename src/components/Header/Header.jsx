import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
       <nav className={styles.navegacao}>
          <Link to={"/"}><h1>Party Time!</h1></Link>
          <Link to={'/createparty'} className={styles.add}>Criar Festa</Link>
       </nav>
    </div>
  )
}

export default Header
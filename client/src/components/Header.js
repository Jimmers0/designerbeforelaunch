import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

export default props => {
  return (
    <div className='headerContainer'>
      <Link to='/admin' classname='adminLink'>Admin</Link>
    </div>
  )
}
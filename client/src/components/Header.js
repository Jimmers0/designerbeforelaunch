import React, { useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styles/Header.css'
import { logout } from '../actions/auth'
import { login } from '../actions/auth'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'


const Header = ({ isAuthenticated }) =>  {

  console.log(isAuthenticated)

  function logout(){
    console.log("logged out")
    localStorage.removeItem("token")
  }

  return (
    <div className='headerContainer'>
      
      
        { isAuthenticated === null ? 
        <div className="Links">
        <Link className="adminLink" to='/login'>admin login</Link>
        </div> :
        <div className="Links">
        <Link className="adminLink" to='/admin'>Admin</Link>
        <Link onClick={logout} className="logOutLink" to="/loggedout">Log Out</Link>
        </div>         
        }

      
      <div className="logos">
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}


export default connect(
  mapStateToProps
  
 
)(Header)

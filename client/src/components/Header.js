import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getProjects } from '../actions/project.actions'



const Header = ({ isAuthenticated }) =>  {

  useEffect(() => {
    getProjects()
    
}, [])

  function logout(){
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
  isAuthenticated: PropTypes.bool
}


export default connect(
  mapStateToProps
  
 
)(Header)

import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import '../../styles/Login.css'


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit =  async e => {
    e.preventDefault()
    login(email, password)
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to= "/admin" />
  } 
    
  

  return (
    <Fragment>
      <div className="loginContainer">
          <h1 className="loginTitle">Welcome back!</h1>
          <p className="loginSubtitle"><i ></i>Log Into Your Account</p>
          <form onSubmit={e=>onSubmit(e)}>
            <div>
              <input className="loginInput"
                type='email' 
                placeholder='Email Address' 
                name='email' 
                value={email}
                onChange={e=>onChange(e)}
                required
              />
            </div>
            <div>
              <input className="loginInput"
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={e=>onChange(e)}
                minLength='6'
                required
              />
            </div>
            <input className="loginSubmit" type='submit' value='Login' />
          </form>
          <p className="loginRegister">
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>

      </div>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps, 
  { login }
)(Login)
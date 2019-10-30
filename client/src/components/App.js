import React, {useState, useEffect } from 'react'
import '../styles/main.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../store'
import { loadUser } from '../actions/auth'
import setAuthToken from '../utils/setAuthToken'

import DesignRequest from './DesignRequest'
import Header from './Header'
import Login from './auth/Login'
import Register from './auth/Register'
import LoggedOut from './LoggedOut'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

export default () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path='/' component={DesignRequest}/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/loggedout' component={LoggedOut}/>
        </Switch>
      </Router>
    </Provider>
  )
}
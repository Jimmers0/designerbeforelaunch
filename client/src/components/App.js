import React, {useState} from 'react'
import '../styles/main.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from '../store'

import DesignRequest from './DesignRequest'
import Header from './Header'
import Login from './auth/Login'
import Register from './auth/Register'
import Alert from './Alert'

export default props => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path='/' component={DesignRequest}/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </Router>
    </Provider>
  )
}
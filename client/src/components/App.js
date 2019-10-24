import React, {useState} from 'react'
import '../styles/main.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'

import DesignRequest from './DesignRequest'
import Header from './Header'

export default props => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path='/' component={DesignRequest}/>
      </Router>
    </Provider>
  )
}
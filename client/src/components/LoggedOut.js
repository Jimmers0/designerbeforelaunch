import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styles/LoggedOut.css'

export default props =>{

    setTimeout(() => {
        
        props.history.push('/');
        window.location.reload();
      }, 3000);

    return(
        <div className="loggedOutMessage">
            You have been successfully logged out!

        </div>
    )
}
import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, token, ...rest }) => (
    <Route {...rest} render={props => (
        (token !== null) ? (
        <Component {...props}/>
            ) : (
        <Redirect to='/' />
        )
    )}/>
)

export default PrivateRoute;
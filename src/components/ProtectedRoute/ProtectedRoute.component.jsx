import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../../context/AuthContext'

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const [authContext, authDispatcher] = useContext(AuthContext)

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                authContext?.id ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}

ProtectedRoute.propTypes = {
    component: PropTypes.elementType,
}

ProtectedRoute.defaultProps = {
    component: null,
}
export default ProtectedRoute

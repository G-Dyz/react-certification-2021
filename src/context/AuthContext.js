import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { saveUser, getUser, deleteUser } from '../storage/UserAsyncStorage'

const initialState = []

const AuthReducer = (state, payload) => {
    switch (payload.type) {
        case 'set':
            saveUser(payload.data).then(() => {
                console.log(payload.data)
            })
            return payload.data
        case 'clear':
            deleteUser().then(() => {
                console.log(payload.data)
            })
            return []
        default:
            return state
    }
}

const AuthContext = createContext(initialState)

function AuthProvider({ children }) {
    const [state, dispatcher] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        getUser().then((dataUser) => {
            if (dataUser?.id) {
                dispatcher({
                    type: 'set',
                    data: dataUser,
                })
            }
        })
    }, [])

    return <AuthContext.Provider value={[state, dispatcher]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }

AuthProvider.propTypes = {
    children: PropTypes.shape({}),
}
AuthProvider.defaultProps = {
    children: null,
}

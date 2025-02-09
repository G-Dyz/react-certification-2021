import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

const USER_KEY = '@User:key'
const initialState = []

const AuthReducer = (state, payload) => {
    switch (payload.type) {
        case 'set':
            window.localStorage.setItem(USER_KEY, JSON.stringify(payload.data))
            return payload.data
        case 'clear':
            window.localStorage.removeItem(USER_KEY)
            return []
        default:
            return state
    }
}

const AuthContext = createContext(initialState)

function AuthProvider({ children }) {
    const [state, dispatcher] = useReducer(AuthReducer, initialState)

    const setAuth = (itemArray) => {
        if (itemArray === null || itemArray === undefined) {
            dispatcher({
                type: 'clear',
            })
        } else {
            dispatcher({
                type: 'set',
                data: itemArray,
            })
        }
    }
    const getAuth = () => {
        dispatcher({
            type: '',
        })
    }

    useEffect(() => {
        let dataUser = window.localStorage.getItem(USER_KEY)
        dataUser = JSON.parse(dataUser)

        if (dataUser?.id) {
            setAuth(dataUser)
        }
    }, [])

    return <AuthContext.Provider value={[state, setAuth, getAuth]}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }

AuthProvider.propTypes = {
    children: PropTypes.shape({}),
}
AuthProvider.defaultProps = {
    children: null,
}

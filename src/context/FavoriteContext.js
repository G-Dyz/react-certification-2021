import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

const FAVORITE_KEY = '@Favorite:key'
const initialState = []

const FavoriteReducer = (state, payload) => {
    switch (payload.type) {
        case 'add':
            window.localStorage.setItem(FAVORITE_KEY, JSON.stringify([...state, payload.data]))
            return [...state, payload.data]
        case 'remove':
            window.localStorage.setItem(
                FAVORITE_KEY,
                JSON.stringify(state.filter((_, index) => index !== payload.data))
            )
            return state.filter((_, index) => index !== payload.data)
        case 'clear':
            window.localStorage.removeItem(FAVORITE_KEY)
            return []
        case 'set':
            return payload.data
        default:
            return state
    }
}

const FavoriteContext = createContext(initialState)

function FavoriteProvider({ children }) {
    const [state, dispatcher] = useReducer(FavoriteReducer, initialState)

    useEffect(() => {
        let dataArray = window.localStorage.getItem(FAVORITE_KEY)
        dataArray = JSON.parse(dataArray)

        if (dataArray?.length) {
            dispatcher({
                type: 'set',
                data: dataArray,
            })
        }
    }, [])

    return (
        <FavoriteContext.Provider value={[state, dispatcher]}>{children}</FavoriteContext.Provider>
    )
}

export { FavoriteContext, FavoriteProvider }

FavoriteProvider.propTypes = {
    children: PropTypes.shape({}),
}
FavoriteProvider.defaultProps = {
    children: null,
}

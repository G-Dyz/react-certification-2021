import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { saveFavorite, getFavorite, deleteFavorite } from '../storage/FavoriteAsyncStorage'

const initialState = []

const FavoriteReducer = (state, payload) => {
    switch (payload.type) {
        case 'add':
            saveFavorite(state.filter((_, index) => index !== payload.data)).then((data) => {
                console.log(payload.data)
            })
            return [...state, payload.data]
        case 'remove':
            saveFavorite(state.filter((_, index) => index !== payload.data)).then((data) => {
                console.log(payload.data)
            })
            return state.filter((_, index) => index !== payload.data)
        case 'clear':
            deleteFavorite().then((data) => {
                console.log(payload.data)
            })
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
        getFavorite().then((dataArray) => {
            if (dataArray?.length) {
                dispatcher({
                    type: 'set',
                    data: dataArray,
                })
            }
        })
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

import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

const FAVORITE_KEY = '@Favorite:key'
const initialState = []

const FavoriteReducer = (state, payload) => {
    switch (payload.type) {
        case 'add':
            if (
                state.filter(
                    (item) =>
                        (item.id.videoId || item.id) ===
                        (payload.data.id.videoId || payload.data.id)
                ).length > 0
            ) {
                return state
            }
            window.localStorage.setItem(FAVORITE_KEY, JSON.stringify([...state, payload.data]))
            return [...state, payload.data]
        case 'remove':
            window.localStorage.setItem(
                FAVORITE_KEY,
                JSON.stringify(
                    state.filter(
                        (item) =>
                            (item.id.videoId || item.id) !==
                            (payload.data.id.videoId || payload.data.id)
                    )
                )
            )
            return state.filter(
                (item) =>
                    (item.id.videoId || item.id) !== (payload.data.id.videoId || payload.data.id)
            )
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

    const addFavorite = (itemArray) => {
        dispatcher({
            type: 'add',
            data: itemArray,
        })
    }
    const removeFavorite = (item) => {
        dispatcher({
            type: 'remove',
            data: item,
        })
    }
    const clearFavorite = () => {
        dispatcher({
            type: 'clear',
        })
    }
    const setFavorite = (itemArray) => {
        dispatcher({
            type: 'set',
            data: itemArray,
        })
    }
    const getFavorite = () => {
        dispatcher({
            type: '',
        })
    }

    useEffect(() => {
        let dataArray = window.localStorage.getItem(FAVORITE_KEY)
        dataArray = JSON.parse(dataArray)

        if (dataArray?.length) {
            setFavorite(dataArray)
        }
    }, [])

    return (
        <FavoriteContext.Provider
            value={[state, addFavorite, removeFavorite, clearFavorite, getFavorite]}
        >
            {children}
        </FavoriteContext.Provider>
    )
}

export { FavoriteContext, FavoriteProvider }

FavoriteProvider.propTypes = {
    children: PropTypes.shape({}),
}
FavoriteProvider.defaultProps = {
    children: null,
}

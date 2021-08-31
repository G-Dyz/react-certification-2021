import { render, screen, fireEvent } from '@testing-library/react'
import React, { useContext } from 'react'
import { FavoriteProvider, FavoriteContext } from './FavoriteContext'
import mockItem from '../mocks/youtube-video-mock2'

function Card() {
    const [favoriteContext, addFavorite, removeFavorite, clearFavorite, getFavorite] =
        useContext(FavoriteContext)

    return (
        <div>
            <button
                type="submit"
                onClick={(e) => {
                    removeFavorite(mockItem)
                    e.preventDefault()
                }}
            >
                remove
            </button>

            <button
                type="submit"
                onClick={(e) => {
                    addFavorite(mockItem)
                    e.preventDefault()
                }}
            >
                add
            </button>

            <button
                type="submit"
                onClick={(e) => {
                    clearFavorite()
                    e.preventDefault()
                }}
            >
                clear
            </button>
            <button
                type="submit"
                onClick={(e) => {
                    getFavorite()
                    e.preventDefault()
                }}
            >
                get
            </button>

            {favoriteContext?.length && <p>{JSON.stringify(favoriteContext)}</p>}
        </div>
    )
}

describe('Favorites', () => {
    it('should add the favorite without duplicates', () => {
        render(
            <FavoriteProvider>
                <Card />
            </FavoriteProvider>
        )
        fireEvent.click(screen.getByText('add'))
        fireEvent.click(screen.getByText('add'))
    })
    it('should clear favorites', () => {
        render(
            <FavoriteProvider>
                <Card />
            </FavoriteProvider>
        )
        fireEvent.click(screen.getByText('clear'))
    })
    it('should get favorites', () => {
        render(
            <FavoriteProvider>
                <Card />
            </FavoriteProvider>
        )
        fireEvent.click(screen.getByText('get'))
    })
})

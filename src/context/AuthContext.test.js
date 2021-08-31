import { render, screen, fireEvent } from '@testing-library/react'
import React, { useContext } from 'react'
import { AuthProvider, AuthContext } from './AuthContext'
import mockItem from '../mocks/youtube-video-mock2'

function Card() {
    const [authContext, setAuth, getAuth] = useContext(AuthContext)

    return (
        <div>
            <button
                type="submit"
                onClick={(e) => {
                    setAuth()
                    e.preventDefault()
                }}
            >
                remove
            </button>

            <button
                type="submit"
                onClick={(e) => {
                    setAuth(mockItem)
                    e.preventDefault()
                }}
            >
                add
            </button>
            <button
                type="submit"
                onClick={(e) => {
                    getAuth()
                    e.preventDefault()
                }}
            >
                get
            </button>
        </div>
    )
}

describe('Favorites', () => {
    it('should add the user without duplicates', () => {
        render(
            <AuthProvider>
                <Card />
            </AuthProvider>
        )
        fireEvent.click(screen.getByText('add'))
        fireEvent.click(screen.getByText('add'))
    })
    it('should clear user', () => {
        render(
            <AuthProvider>
                <Card />
            </AuthProvider>
        )
        fireEvent.click(screen.getByText('remove'))
    })
    it('should get user', () => {
        render(
            <AuthProvider>
                <Card />
            </AuthProvider>
        )
        fireEvent.click(screen.getByText('get'))
    })
})

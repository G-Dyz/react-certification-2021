import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Favorites from './Favorites'
import { AuthProvider } from '../../context/AuthContext'
import { ThemeProvider } from '../../context/ThemeContext'
import { FavoriteProvider } from '../../context/FavoriteContext'
import mockData from '../../mocks/youtube-videos-mock'

const FAVORITE_KEY = '@Favorite:key'
describe('Favorites', () => {
    it('should have all of its components', () => {
        window.localStorage.setItem(FAVORITE_KEY, JSON.stringify(mockData.items))
        render(
            <ThemeProvider>
                <AuthProvider>
                    <FavoriteProvider>
                        <BrowserRouter>
                            <Favorites />
                        </BrowserRouter>
                    </FavoriteProvider>
                </AuthProvider>
            </ThemeProvider>
        )
        expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(0)
    })
    it('should have all of its components', () => {
        window.localStorage.removeItem(FAVORITE_KEY)
        render(
            <ThemeProvider>
                <AuthProvider>
                    <FavoriteProvider>
                        <BrowserRouter>
                            <Favorites />
                        </BrowserRouter>
                    </FavoriteProvider>
                </AuthProvider>
            </ThemeProvider>
        )
        expect(screen.getByRole('alert')).toBeInTheDocument()
    })
})

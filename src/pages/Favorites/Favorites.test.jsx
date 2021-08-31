import { render, screen } from '@testing-library/react'
import React from 'react'
import Favorites from './Favorites'
import { AuthProvider } from '../../context/AuthContext'
import { ThemeProvider } from '../../context/ThemeContext'

describe('Favorites', () => {
    it('should have all of its components', () => {
        render(
            <ThemeProvider>
                <AuthProvider>
                    <Favorites />
                </AuthProvider>
            </ThemeProvider>
        )
        expect(screen.getByRole('alert')).toBeInTheDocument()
    })
})

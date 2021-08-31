import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Login from './Login'
import { ThemeProvider } from '../../context/ThemeContext'
import { AuthProvider } from '../../context/AuthContext'

window.alert = jest.fn()

describe('Login', () => {
    it('should have all of its components', () => {
        window.alert.mockClear()
        render(
            <AuthProvider>
                <ThemeProvider>
                    <Login />
                </ThemeProvider>
            </AuthProvider>
        )
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(2)
    })
})

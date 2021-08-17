import { render, screen } from '@testing-library/react'
import React from 'react'
import Login from './Login'
import { ThemeProvider } from '../../context/ThemeContext'

describe('Login', () => {
    it('should have all of its components', () => {
        render(
            <ThemeProvider>
                <Login />
            </ThemeProvider>
        )
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(2)
    })
})

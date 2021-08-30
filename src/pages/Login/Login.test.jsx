import { render, screen, fireEvent } from '@testing-library/react'
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
    it('should allow login', () => {
        render(
            <ThemeProvider>
                <Login />
            </ThemeProvider>
        )
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(2)

        const userInput = screen.getByPlaceholderText('username')
        fireEvent.change(userInput, { target: { value: 'wizeline' } })

        const passswordInput = screen.getByPlaceholderText('password')
        fireEvent.change(passswordInput, { target: { value: 'Rocks!' } })

        fireEvent.click(screen.getByTestId('submit-button'))
    })
})

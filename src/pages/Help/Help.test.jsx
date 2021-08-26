import { render, screen } from '@testing-library/react'
import React from 'react'
import Help from './Help'
import { ThemeProvider } from '../../context/ThemeContext'

describe('Help', () => {
    it('should have all of its components', () => {
        render(
            <ThemeProvider>
                <Help />
            </ThemeProvider>
        )
        expect(screen.getByText('Help')).toBeInTheDocument()
    })
})

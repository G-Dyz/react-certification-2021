import { render, screen } from '@testing-library/react'
import React from 'react'
import Form from './Form.component'
import { ThemeProvider } from '../../context/ThemeContext'

describe('Footer', () => {
    it('should have all of its components', () => {
        render(
            <ThemeProvider>
                <Form />
            </ThemeProvider>
        )
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(2)
        expect(screen.getAllByRole('textbox').length).toEqual(2)
    })
})

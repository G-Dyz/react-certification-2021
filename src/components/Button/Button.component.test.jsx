import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Button from './Button.component'

describe('Button', () => {
    const messageTest = 'This is a tittle.'
    it('should have all of its components', () => {
        render(
            <BrowserRouter tittle={messageTest}>
                <Button />
            </BrowserRouter>
        )
        expect(screen.getByRole('figure')).toBeInTheDocument()
        expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })
    it('should display the tittle on the button', () => {
        render(
            <BrowserRouter>
                <Button tittle={messageTest} />
            </BrowserRouter>
        )
        expect(screen.getByText(messageTest))
    })
})

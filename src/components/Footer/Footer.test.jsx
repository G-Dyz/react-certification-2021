import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer.component'

describe('Footer', () => {
    it('should have all of its components', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        expect(screen.getAllByRole('link').length).toEqual(2)
        expect(screen.getAllByRole('contentinfo').length).toEqual(2)
        expect(screen.getAllByRole('figure').length).toEqual(2)

        expect(screen.getByText('Help')).toBeInTheDocument()
        expect(screen.getByText(/Youtube/)).toBeInTheDocument()
    })
})

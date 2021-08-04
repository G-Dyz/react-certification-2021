import { render, screen } from '@testing-library/react'
import React from 'react'
import NotFound from './NotFound'

describe('NotFound', () => {
    it('should have all of its components', () => {
        render(<NotFound />)
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('alert')).toBeInTheDocument()
    })
})

import { render, screen } from '@testing-library/react'
import React from 'react'
import Secret from './Secret'

describe('Secret', () => {
    it('should have all of its components', () => {
        render(<Secret />)
        expect(screen.getByText('Secret')).toBeInTheDocument()
    })
})

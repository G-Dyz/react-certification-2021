import { render, screen } from '@testing-library/react'
import React from 'react'
import Favorites from './Favorites'

describe('Favorites', () => {
    it('should have all of its components', () => {
        render(<Favorites />)
        expect(screen.getByRole('alert')).toBeInTheDocument()
    })
})

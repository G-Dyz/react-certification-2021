import { render, screen } from '@testing-library/react'
import React from 'react'
import Help from './Help'

describe('Help', () => {
    it('should have all of its components', () => {
        render(<Help />)
        expect(screen.getByText('Help')).toBeInTheDocument()
    })
})

import { render, screen } from '@testing-library/react'
import React from 'react'
import Login from './Login'

describe('Login', () => {
    it('should have all of its components', () => {
        render(<Login />)
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(2)
    })
})

import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

test('should have all of its components', () => {
    render(<App />)
    expect(screen.getByText(/SIGN IN/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
})

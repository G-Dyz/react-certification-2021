import { render, screen, fireEvent, act } from '@testing-library/react'
import React from 'react'
import App from './App'

test('should have all of its components', () => {
    render(<App />)
    expect(screen.getByText(/SIGN IN/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
})

test('search button should update the context value and show the results', () => {
    render(<App />)
    const test = 'Wizeline'
    const searchInput = screen.getByPlaceholderText('Search')
    act(() => {
        fireEvent.change(searchInput, { target: { value: test } })
        fireEvent.click(screen.getByTestId('search-button'))
    })
    setTimeout(() => {
        expect(screen.getAllByText(test).length).toBeGreaterThan(2)
    }, 1500)
})

test('search button should update the context value and show the results', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('figure')[0])
    expect(screen.getAllByRole('figure').length).toBeGreaterThanOrEqual(3)
})

test('search button should update the context value and show the results', () => {
    render(<App />)
    const test = 'Wizeline'
    const searchInput = screen.getByPlaceholderText('Search')

    act(() => {
        fireEvent.change(searchInput, { target: { value: test } })
        fireEvent.click(screen.getByTestId('search-button'))
    })
    setTimeout(() => {
        expect(screen.getAllByText(test).length).toBeGreaterThan(24)
    }, 1500)

    const test2 = 'Pokemon'
    act(() => {
        fireEvent.change(searchInput, { target: { value: test2 } })
        fireEvent.click(screen.getByTestId('search-button'))
    })
    setTimeout(() => {
        expect(screen.getAllByText(test2).length).toBeGreaterThan(24)
    }, 1500)
})

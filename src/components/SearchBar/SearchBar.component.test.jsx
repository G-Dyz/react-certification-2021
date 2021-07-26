import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import SearchBar from './SearchBar.component'

describe('SearchBar', () => {
    beforeEach(() => {
        return render(<SearchBar />)
    })
    it('should have all of its components', () => {
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toEqual(2)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
    it('clear button should be enabled when there are characters', () => {
        const searchInput = screen.getByPlaceholderText('Search')
        fireEvent.change(searchInput, { target: { value: 'test' } })
        expect(searchInput.value).toBe('test')
        expect(screen.getByTestId('clear-search').closest('button')).not.toHaveAttribute('disabled')
    })
    it('clear button should be disabled when there are not characters', () => {
        const searchInput = screen.getByPlaceholderText('Search')
        fireEvent.change(searchInput, { target: { value: '' } })
        expect(searchInput.value).toBe('')
        expect(screen.getByTestId('clear-search').closest('button')).toHaveAttribute('disabled')
    })
    it('clear button should be enabled when there are characters', () => {
        const searchInput = screen.getByPlaceholderText('Search')
        fireEvent.change(searchInput, { target: { value: 'test' } })
        expect(searchInput.value).toBe('test')
        fireEvent.click(screen.getByTestId('clear-search'))
        expect(searchInput.value).toBe('')
    })
})

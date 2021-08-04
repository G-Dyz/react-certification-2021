import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SearchBar from './SearchBar.component'
import { TopicProvider } from '../../context/TopicContext'

describe('SearchBar', () => {
    beforeEach(() => {
        return render(
            <TopicProvider>
                <BrowserRouter>
                    <SearchBar />
                </BrowserRouter>
            </TopicProvider>
        )
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
    it('search button should call the context value', () => {
        const searchInput = screen.getByPlaceholderText('Search')
        fireEvent.change(searchInput, { target: { value: 'test' } })
        fireEvent.click(screen.getByTestId('search-button'))
    })
    it('search button should call the context value using keyup', () => {
        const searchInput = screen.getByPlaceholderText('Search')
        fireEvent.change(searchInput, { target: { value: 'test' } })
        fireEvent.keyPress(searchInput, { key: 'enter', keyCode: 13 })
    })
})

import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header.component'

describe('Header', () => {
    let flagSidebar = false
    const showSidebar = () => {
        flagSidebar = true
    }
    beforeEach(() => {
        return render(
            <BrowserRouter>
                <Header onHamburgerMenuClick={showSidebar} />
            </BrowserRouter>
        )
    })
    it('should have all of its components', () => {
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getByRole('switch')).toBeInTheDocument()
        expect(screen.getAllByRole('button').length).toEqual(3)
        expect(screen.getAllByRole('link').length).toEqual(3)
    })
    it('should change style of div as checkbox is checked/unchecked', () => {
        const checkbox = screen.getByTestId('checkbox')
        expect(checkbox.checked).toEqual(false)
        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(true)
    })
    it('should call the sidebar when click the hamburger menu', () => {
        fireEvent.click(screen.getByTestId('hamburgerMenu'))
        expect(flagSidebar).toEqual(true)
    })
})

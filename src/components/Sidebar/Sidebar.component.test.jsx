import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar.component'
import { TopicProvider } from '../../context/TopicContext'
import { ThemeProvider } from '../../context/ThemeContext'

describe('Sidebar', () => {
    beforeEach(() => {
        return render(
            <ThemeProvider>
                <TopicProvider>
                    <BrowserRouter>
                        <Sidebar />
                    </BrowserRouter>
                </TopicProvider>
            </ThemeProvider>
        )
    })
    it('has all of its components', () => {
        expect(screen.getAllByRole('navigation').length).toEqual(2)
    })
    it('should close sidebar when click the close hamburger menu', () => {
        const checkbox = screen.getByTestId('closeHamburgerMenu')
        fireEvent.click(checkbox)
        expect(screen.getByTestId('sidebar')).toHaveStyle(`left: 0;`)
    })
})

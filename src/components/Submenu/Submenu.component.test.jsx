import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SidebarData from '../../mocks/navegation-mock'
import SubMenu from './SubMenu.component'

describe('SubMenu', () => {
    const itemMenu = SidebarData[0]
    beforeEach(() => {
        return render(
            <BrowserRouter>
                <SubMenu item={itemMenu} />
            </BrowserRouter>
        )
    })
    it('should have all of its components', () => {
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('note')).toBeInTheDocument()
    })
    it('should show all of its sub menu when click', () => {
        const button = screen.getByRole('contentinfo')

        fireEvent.click(button)
        expect(screen.getAllByRole('note').length).toEqual(itemMenu.subNav.length + 1)
        expect(screen.getAllByRole('img').length).toEqual(itemMenu.subNav.length + 1)
    })
    it('should hide all of its sub menu when click again', () => {
        const button = screen.getByRole('contentinfo')

        fireEvent.click(button)
        expect(screen.getAllByRole('note').length).toEqual(itemMenu.subNav.length + 1)
        expect(screen.getAllByRole('img').length).toEqual(itemMenu.subNav.length + 1)

        fireEvent.click(button)
        expect(screen.getAllByRole('note').length).toEqual(1)
        expect(screen.getAllByRole('img').length).toEqual(1)
    })
})

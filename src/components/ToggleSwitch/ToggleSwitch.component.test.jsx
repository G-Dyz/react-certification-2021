import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import ToggleSwitch from './ToggleSwitch.component'

describe('ToggleSwitch', () => {
    it('should change style of div as checkbox is checked/unchecked', () => {
        render(<ToggleSwitch />)
        const checkbox = screen.getByTestId('checkbox')

        expect(checkbox.checked).toEqual(false)
        expect(screen.getByTestId('switch')).toHaveStyle(`background: grey;`)

        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(true)
        expect(screen.getByTestId('switch')).toHaveStyle(`background: black;`)

        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(false)
        expect(screen.getByTestId('switch')).toHaveStyle(`background: grey;`)
    })
})

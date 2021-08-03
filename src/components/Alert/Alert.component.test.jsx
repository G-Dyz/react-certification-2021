import { render, screen } from '@testing-library/react'
import React from 'react'
import Alert from './Alert.component'

describe('Alert', () => {
    const messageTest = 'This is alert message.'
    beforeEach(() => {
        return render(<Alert msg={messageTest} />)
    })
    it('should display the message on the window', () => {
        expect(screen.getByText(messageTest))
    })
    it('should have all of its components', () => {
        expect(screen.getByRole('alert')).toBeInTheDocument()
    })
})

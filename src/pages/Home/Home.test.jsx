import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from './Home'
import { TopicProvider } from '../../context/TopicContext'

describe('Home', () => {
    it('should display all cards', () => {
        render(
            <TopicProvider>
                <Home />
            </TopicProvider>
        )
        setTimeout(() => {
            expect(screen.getAllByRole('figure').length).toBeGreaterThanOrEqual(10)
        }, 1500)
    })
})

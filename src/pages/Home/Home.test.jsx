import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from './Home'
import { TopicProvider } from '../../context/TopicContext'
import { ThemeProvider } from '../../context/ThemeContext'

describe('Home', () => {
    it('should display all cards', () => {
        render(
            <ThemeProvider>
                <TopicProvider>
                    <Home />
                </TopicProvider>
            </ThemeProvider>
        )
        setTimeout(() => {
            expect(screen.getAllByRole('figure').length).toBeGreaterThanOrEqual(10)
        }, 1500)
    })
})

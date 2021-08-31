import { render, screen, act } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import { TopicProvider } from '../../context/TopicContext'
import { ThemeProvider } from '../../context/ThemeContext'
import { FavoriteProvider } from '../../context/FavoriteContext'

import mockData from '../../mocks/youtube-videos-mock'
import API from '../../services/youtube.service'

jest.mock('../../services/youtube.service')

describe('Home', () => {
    it('should display all cards', async () => {
        await act(async () => {
            API.get.mockResolvedValue({ data: mockData })
            render(
                <FavoriteProvider>
                    <ThemeProvider>
                        <TopicProvider>
                            <BrowserRouter>
                                <Home />
                            </BrowserRouter>
                        </TopicProvider>
                    </ThemeProvider>
                </FavoriteProvider>
            )
            setTimeout(() => {
                expect(screen.getAllByRole('figure').length).toBeGreaterThanOrEqual(10)
            }, 1500)
        })
    })
})

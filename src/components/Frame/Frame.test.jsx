import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Frame from './Frame.component'
import { ThemeProvider } from '../../context/ThemeContext'
import { FavoriteProvider } from '../../context/FavoriteContext'
import { AuthProvider } from '../../context/AuthContext'

describe('Frame', () => {
    window.localStorage.setItem(
        '@User:key',
        JSON.stringify({
            id: '123',
            name: 'Wizeline',
            avatarUrl:
                'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        })
    )
    const mock = {
        id: 'XEs_01mDsCw',
        snippet: {
            channelTitle: 'Odoo Mates',
            localized: {
                description: 'Pass default value for...',
                title: 'Set Default Value Using Context in Odoo',
            },
            publishedAt: '2019-08-26T11:25:31Z',
        },
    }
    beforeEach(() => {
        return render(
            <AuthProvider>
                <FavoriteProvider>
                    <ThemeProvider>
                        <Frame video={mock} isFavorite={false} />
                    </ThemeProvider>
                </FavoriteProvider>
            </AuthProvider>
        )
    })
    it('should have all of its components', () => {
        expect(screen.getByRole('figure')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(3)
    })
    it('should display the title on the frame', () => {
        expect(screen.getByText(mock.snippet.localized.title))
        expect(screen.getByText(mock.snippet.channelTitle))
        expect(screen.getByText(mock.snippet.localized.description))
        expect(screen.getByText(mock.snippet.publishedAt.substring(0, 10)))
    })
    it('its image should have src', () => {
        const videoCard = screen.getByRole('figure')
        expect(videoCard).toHaveAttribute('alt', mock.snippet.localized.title)
    })
    it('should save the video like favorite', async () => {
        fireEvent.click(screen.getByTestId('add-favorite'))
        setTimeout(() => {
            expect(screen.getByTestId('remove-favorite')).toBeInTheDocument()
        }, 1500)
    })
})

describe('Frame', () => {
    const mock = {
        id: 'XEs_01mDsCw',
        snippet: {
            channelTitle: 'Odoo Mates',
            localized: {
                description: 'Pass default value for...',
                title: 'Set Default Value Using Context in Odoo',
            },
            publishedAt: '2019-08-26T11:25:31Z',
        },
    }
    beforeEach(() => {
        return render(
            <AuthProvider>
                <FavoriteProvider>
                    <ThemeProvider>
                        <Frame video={mock} />
                    </ThemeProvider>
                </FavoriteProvider>
            </AuthProvider>
        )
    })
    it('should remove the video from favorites', async () => {
        fireEvent.click(screen.getByTestId('remove-favorite'))
        setTimeout(() => {
            expect(screen.getByTestId('add-favorite')).toBeInTheDocument()
        }, 1500)
    })
})

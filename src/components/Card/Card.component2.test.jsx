import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Card from './Card.component'
import { ThemeProvider } from '../../context/ThemeContext'
import { FavoriteProvider } from '../../context/FavoriteContext'
import mockData from '../../mocks/youtube-videos-mock'
import { AuthProvider } from '../../context/AuthContext'

describe('Card', () => {
    window.localStorage.setItem(
        '@User:key',
        JSON.stringify({
            id: '123',
            name: 'Wizeline',
            avatarUrl:
                'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        })
    )
    const itemCard = mockData.items[0].snippet
    itemCard.publishTime = itemCard.publishTime.substring(0, 10)

    beforeEach(() => {
        return render(
            <AuthProvider>
                <FavoriteProvider>
                    <ThemeProvider>
                        <Card item={mockData.items[0]} />
                    </ThemeProvider>
                </FavoriteProvider>
            </AuthProvider>
        )
    })
    it('should have all of its components', () => {
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(4)
    })
    it('should display the title on the card', () => {
        expect(screen.getByText(itemCard.title))
        expect(screen.getByText(itemCard.channelTitle))
        expect(screen.getByText(itemCard.description))
        expect(screen.getByText(itemCard.publishTime))
    })
    it('its image should have src and alt', () => {
        const imgCard = screen.getByRole('img')
        expect(imgCard).toHaveAttribute('src', itemCard.thumbnails.medium.url)
        expect(imgCard).toHaveAttribute('alt', itemCard.title)
    })
    it('should save the video like favorite', async () => {
        fireEvent.click(screen.getByTestId('remove-favorite-card'))
        setTimeout(() => {
            expect(screen.getByTestId('add-favorite-card')).toBeInTheDocument()
        }, 1500)
    })
})

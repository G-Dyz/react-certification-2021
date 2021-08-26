import { render, screen } from '@testing-library/react'
import React from 'react'
import Card from './Card.component'
import { ThemeProvider } from '../../context/ThemeContext'
import mockData from '../../mocks/youtube-videos-mock'

describe('Card', () => {
    const itemCard = mockData.items[0].snippet
    itemCard.publishTime = itemCard.publishTime.substring(0, 10)
    beforeEach(() => {
        return render(
            <ThemeProvider>
                <Card item={itemCard} />
            </ThemeProvider>
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
})

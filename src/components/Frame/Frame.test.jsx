import { render, screen } from '@testing-library/react'
import React from 'react'
import Frame from './Frame.component'

describe('Card', () => {
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
        return render(<Frame video={mock} />)
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
})

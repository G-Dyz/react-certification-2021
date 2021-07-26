import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from './Home'
import mockData from '../../mocks/youtube-videos-mock'

describe('Home', () => {
    // it('has all of its components', () => {
    //     render(<Home />)
    //     expect(screen.getByTestId('img-card')).toBeInTheDocument()
    //     expect(screen.getByTestId('title-card')).toBeInTheDocument()
    //     expect(screen.getByTestId('channel-card')).toBeInTheDocument()
    //     expect(screen.getByTestId('description-card')).toBeInTheDocument()
    //     expect(screen.getByTestId('date-card')).toBeInTheDocument()
    // })
    it('should display all cards', () => {
        render(<Home />)
        expect(screen.getAllByRole('gridcell').length).toEqual(mockData.items.length)
    })
})

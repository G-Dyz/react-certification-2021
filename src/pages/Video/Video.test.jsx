import { render, screen, fireEvent, act } from '@testing-library/react'
import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import Video from './Video'

describe('Video', () => {
    it('should have all of its components', () => {
        render(
            <BrowserRouter>
                <Switch>
                    <Route path="/video" exact component={Video} />
                </Switch>
                <Link
                    to={{ pathname: `/video`, search: `?videoUrl=CHzlSGRvWPs` }}
                    data-testid="LinkVideo"
                />
                <Link
                    to={{ pathname: `/video`, search: `?videoUrl=6NyySL7SJ7E` }}
                    data-testid="LinkVideo2"
                />
            </BrowserRouter>
        )
        act(() => {
            fireEvent.click(screen.getByTestId('LinkVideo'))
        })
        setTimeout(() => {
            expect(screen.getAllByText(/Wizeline/i).length).toBeGreaterThanOrEqual(3)
        }, 1500)

        act(() => {
            fireEvent.click(screen.getByTestId('LinkVideo2'))
        })
        setTimeout(() => {
            expect(screen.getAllByText(/pokemon/i).length).toBeGreaterThanOrEqual(3)
        }, 1500)
    })
})

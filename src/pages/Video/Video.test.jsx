import { render, screen, fireEvent, act } from '@testing-library/react'
import React from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import mockItem from '../../mocks/youtube-video-mock'
import Video from './Video'
import API from '../../services/youtube.service'
import { FavoriteProvider } from '../../context/FavoriteContext'
import { ThemeProvider } from '../../context/ThemeContext'

jest.mock('../../services/youtube.service')

describe('Video', () => {
    it('should have all of its components', async () => {
        await act(async () => {
            API.get.mockResolvedValue({ data: mockItem })
            render(
                <ThemeProvider>
                    <FavoriteProvider>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/video" exact component={Video} />
                            </Switch>
                            <Link
                                to={{ pathname: `/video`, search: `?videoUrl=CHzlSGRvWPs` }}
                                data-testid="LinkVideo"
                            />
                            <Link
                                to={{ pathname: `/video`, search: `?videoUrl=b4SeEVm39pY` }}
                                data-testid="LinkVideo2"
                            />
                        </BrowserRouter>
                    </FavoriteProvider>
                </ThemeProvider>
            )
            fireEvent.click(screen.getByTestId('LinkVideo'))
        })
    })
    it('should work even its empty', async () => {
        await act(async () => {
            API.get.mockResolvedValue({ data: { items: [] } })
            render(
                <ThemeProvider>
                    <FavoriteProvider>
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
                    </FavoriteProvider>
                </ThemeProvider>
            )
            fireEvent.click(screen.getByTestId('LinkVideo'))
        })
    })
})

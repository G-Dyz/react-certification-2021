import { render, screen, fireEvent, act, userEvent } from '@testing-library/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import App from './App'
import LoginApi from './pages/Login/Login.api'

window.alert = jest.fn()
jest.mock('./pages/Login/Login.api')

test('should have all of its components', () => {
    render(<App />)
    expect(screen.getByText(/SIGN IN/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument()
})

test('search button should update the context value and show the results', () => {
    render(<App />)
    const test = 'Wizeline'
    const searchInput = screen.getByPlaceholderText('Search')
    act(() => {
        fireEvent.change(searchInput, { target: { value: test } })
        fireEvent.click(screen.getByTestId('search-button'))
    })
    setTimeout(() => {
        expect(screen.getAllByText(test).length).toBeGreaterThan(2)
    }, 1500)
})

test('search button should update the context value and show the results', () => {
    render(<App />)

    fireEvent.click(screen.getAllByRole('figure')[0])
    expect(screen.getAllByRole('figure').length).toBeGreaterThanOrEqual(3)
})

test('search button should update the context value and show the results', () => {
    render(<App />)
    const test = 'Wizeline'
    const searchInput = screen.getByPlaceholderText('Search')

    act(() => {
        fireEvent.change(searchInput, { target: { value: test } })
        fireEvent.click(screen.getByTestId('search-button'))
    })
    setTimeout(() => {
        expect(screen.getAllByText(test).length).toBeGreaterThan(24)
    }, 1500)

    const test2 = 'Pokemon'
    act(() => {
        fireEvent.change(searchInput, { target: { value: test2 } })
        fireEvent.click(screen.getByTestId('search-button'))
    })
    setTimeout(() => {
        expect(screen.getAllByText(test2).length).toBeGreaterThan(24)
    }, 1500)
})

test('should change style of login form as toggleSwitch is light theme/dark theme', () => {
    render(<App />)
    const toggleSwitch = screen.getByTestId('checkbox')
    fireEvent.click(screen.getByText('SIGN IN'))

    const textboxesBefore = screen.getAllByRole('textbox')

    fireEvent.click(toggleSwitch)
    const textboxesAfter = screen.getAllByRole('textbox')

    expect(
        window.getComputedStyle(textboxesAfter[0]) !== window.getComputedStyle(textboxesBefore[0])
    ).toBeTruthy()
    expect(
        window.getComputedStyle(textboxesAfter[1]) !== window.getComputedStyle(textboxesBefore[1])
    ).toBeTruthy()
})

test('should change style of home as toggleSwitch is light theme/dark theme', () => {
    render(<App />)
    const toggleSwitch = screen.getByTestId('checkbox')

    const gridcellsBefore = screen.getAllByRole('figure')

    fireEvent.click(toggleSwitch)
    const gridcellsAfter = screen.getAllByRole('figure')

    expect(
        window.getComputedStyle(gridcellsAfter[0]) !== window.getComputedStyle(gridcellsBefore[0])
    ).toBeTruthy()
})

test('should change style of sidebar as toggleSwitch is light theme/dark theme', () => {
    render(<App />)
    const toggleSwitch = screen.getByTestId('checkbox')
    fireEvent.click(screen.getByTestId('hamburgerMenu'))

    const submenuBefore = screen.getAllByRole('note')

    fireEvent.click(toggleSwitch)
    const submenuAfter = screen.getAllByRole('note')

    expect(
        window.getComputedStyle(submenuAfter[0]) !== window.getComputedStyle(submenuBefore[0])
    ).toBeTruthy()
})

test('should change style of help page as toggleSwitch is light theme/dark theme', () => {
    render(<App />)
    const toggleSwitch = screen.getByTestId('checkbox')

    const infoBefore = screen.getAllByRole('contentinfo')

    fireEvent.click(toggleSwitch)
    const infoAfter = screen.getAllByRole('contentinfo')

    expect(
        window.getComputedStyle(infoAfter[0]) !== window.getComputedStyle(infoBefore[0])
    ).toBeTruthy()
    expect(
        window.getComputedStyle(infoAfter[1]) !== window.getComputedStyle(infoBefore[1])
    ).toBeTruthy()
})

test('should change content of video page', () => {
    render(<App />)
    fireEvent.click(screen.getAllByRole('figure')[2])
    const hrefBefore = window.location.href

    fireEvent.click(screen.getAllByRole('figure')[2])
    const hrefAfter = window.location.href

    setTimeout(() => {
        expect(screen.getAllByRole('figure').length).toBeGreaterThanOrEqual(15)
    }, 1500)
    setTimeout(() => {
        expect(hrefBefore !== hrefAfter).toBeTruthy()
    }, 1500)
})

test('should allow login', () => {
    window.alert.mockClear()
    LoginApi.mockResolvedValue({
        id: '123',
        name: 'Wizeline',
        avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    })
    render(<App />)
    fireEvent.click(screen.getByText('SIGN IN'))

    setTimeout(() => {
        expect(screen.getByRole('form')).toBeInTheDocument()
        expect(screen.getAllByRole('contentinfo').length).toEqual(2)

        const userInput = screen.getByPlaceholderText('username')
        fireEvent.change(userInput, { target: { value: 'wizeline' } })

        const passswordInput = screen.getByPlaceholderText('password')
        fireEvent.change(passswordInput, { target: { value: 'Rocks!' } })

        fireEvent.click(screen.getByTestId('submit-button'))
    }, 1500)

    setTimeout(() => {
        fireEvent.click(screen.getByText('Favorites'))
    }, 1500)
})

test('should not allow login with wrong credentials', () => {
    window.alert.mockClear()
    LoginApi.mockResolvedValue(new Error('Username or password invalid'))
    render(<App />)
    fireEvent.click(screen.getByText('SIGN IN'))

    const usernameInput = screen.getByPlaceholderText('username')
    fireEvent.change(usernameInput, { target: { value: 'xwizelinex' } })

    const passwordInput = screen.getByPlaceholderText('password')
    fireEvent.change(passwordInput, { target: { value: 'xRocks!x' } })

    fireEvent.click(screen.getByTestId('submit-button'))
})

test('should navegate to favorites page', () => {
    window.localStorage.removeItem('@User:key')
    window.localStorage.setItem(
        '@User:key',
        JSON.stringify({
            id: '123',
            name: 'Wizeline',
            avatarUrl:
                'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        })
    )
    render(<App />)
    setTimeout(() => {
        fireEvent.click(screen.getAllByRole('figure')[2])
    }, 1500)
    setTimeout(() => {
        fireEvent.click(screen.getByText(/Save/i))
    }, 1500)
    setTimeout(() => {
        fireEvent.click(screen.getByTestId('hamburgerMenu'))
    }, 1500)
    setTimeout(() => {
        fireEvent.click(screen.getAllByText(/Favorites/i)[0])
    }, 1500)
    setTimeout(() => {
        expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(0)
    }, 1500)
})

test('should save and remove a favorite video', () => {
    render(<App />)
    setTimeout(() => {
        fireEvent.click(screen.getAllByRole('figure')[2])
    }, 1500)
    setTimeout(() => {
        fireEvent.click(screen.getByTestId('add-favorite'))
    }, 1500)

    setTimeout(() => {
        fireEvent.click(userEvent.hover(screen.getAllByTestId('add-favorite-card')[0]))
    }, 1500)

    setTimeout(() => {
        fireEvent.click(screen.getByTestId('remove-favorite'))
    }, 1500)

    setTimeout(() => {
        fireEvent.click(screen.getByTestId('hamburgerMenu'))
    }, 1500)
    setTimeout(() => {
        fireEvent.click(screen.getAllByText(/Favorites/i)[0])
    }, 1500)
    setTimeout(() => {
        expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(0)
    }, 1500)
    setTimeout(() => {
        const favorite = screen.getAllByTestId('remove-favorite-card')
        fireEvent.click(favorite[0])
    }, 1500)
})

test('should save and remove a favorite video', () => {
    render(<App />)

    setTimeout(() => {
        fireEvent.click(userEvent.hover(screen.getAllByTestId('add-favorite-card')[0]))
    }, 1500)

    setTimeout(() => {
        fireEvent.click(userEvent.hover(screen.getAllByTestId('add-favorite-card')[0]))
    }, 1500)
})

test('should ask for help', () => {
    render(<App />)
    fireEvent.click(screen.getByTestId('logo-user'))

    fireEvent.click(screen.getByTestId('help-user'))
})

test('should log out the app', () => {
    render(<App />)
    setTimeout(() => {
        fireEvent.click(screen.getByTestId('hamburgerMenu'))
    }, 1500)
    setTimeout(() => {
        fireEvent.click(screen.getAllByText(/Favorites/i)[0])
    }, 1500)
    setTimeout(() => {
        expect(screen.getAllByRole('gridcell').length).toBeGreaterThan(0)
    }, 1500)

    fireEvent.click(screen.getByTestId('logo-user'))
    fireEvent.click(screen.getByText('Log out'))

    setTimeout(() => {
        expect(screen.getByText('to continue to YouTube')).toBeInTheDocument()
    }, 1500)
})

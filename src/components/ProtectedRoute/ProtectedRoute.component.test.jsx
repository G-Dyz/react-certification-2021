import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.component'
import { AuthProvider } from '../../context/AuthContext'

function Alert() {
    return (
        <div>
            <p>Alert</p>
        </div>
    )
}
function Login() {
    return (
        <div>
            <p>Login</p>
        </div>
    )
}

describe('Footer', () => {
    it('should have all of its components', () => {
        window.localStorage.removeItem('@User:key')
        render(
            <AuthProvider>
                <BrowserRouter>
                    <Route
                        exact
                        path="/favorite"
                        render={() => {
                            return <Redirect to="/favorite" />
                        }}
                    />
                    <Route path="/login" exact component={Login} />
                    <ProtectedRoute path="/favorite" exact component={Alert} />
                </BrowserRouter>
            </AuthProvider>
        )
        setTimeout(() => {
            expect(screen.getByText('Login')).toBeInTheDocument()
        }, 1500)
    })

    it('should not have all of its components', () => {
        window.localStorage.setItem(
            '@User:key',
            JSON.stringify({
                id: '123',
                name: 'Wizeline',
                avatarUrl:
                    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
            })
        )
        render(
            <AuthProvider>
                <BrowserRouter>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return <Redirect to="/favorite" />
                        }}
                    />
                    <ProtectedRoute path="/favorite" exact component={Alert} />
                    <Route path="/login" exact component={Login} />
                </BrowserRouter>
            </AuthProvider>
        )
        expect(screen.getByText('Alert')).toBeInTheDocument()
    })
})

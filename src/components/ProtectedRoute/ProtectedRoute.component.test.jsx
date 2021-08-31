import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.component'
import { AuthProvider } from '../../context/AuthContext'

function Alert() {
    return (
        <div>
            <p>Alert</p>
        </div>
    )
}

describe('Footer', () => {
    it('should have all of its components', () => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <ProtectedRoute path="/favorites" exact component={Alert} />
                </BrowserRouter>
            </AuthProvider>
        )
    })
})

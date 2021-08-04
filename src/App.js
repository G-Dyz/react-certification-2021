import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import Secret from './pages/Secret'
import Help from './pages/Help/Help'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {
    return (
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/secret" exact component={Secret} />
                <Route path="/favorites" exact component={Favorites} />
                <Route path="/help" exact component={Help} />
                <Route path="*" exact component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App

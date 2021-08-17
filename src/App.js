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
import Video from './pages/Video'
import Footer from './components/Footer'
import { TopicProvider } from './context/TopicContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
    return (
        <ThemeProvider>
            <TopicProvider>
                <BrowserRouter>
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/secret" exact component={Secret} />
                        <Route path="/favorites" exact component={Favorites} />
                        <Route path="/help" exact component={Help} />
                        <Route path="/video" exact component={Video} />
                        <Route path="*" exact component={NotFound} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </TopicProvider>
        </ThemeProvider>
    )
}

export default App

import './App.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import styled from 'styled-components'
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
            {/* <Container> */}
            <Sidebar />
            {/* <Con> */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/secret" exact component={Secret} />
                <Route path="/favorites" exact component={Favorites} />
                <Route path="/help" exact component={Help} />
                <Route path="*" exact component={NotFound} />
            </Switch>
            {/* </Con> */}
            <Footer />
            {/* </Container> */}
        </BrowserRouter>
    )
}

// const Con = styled.div`
//     flex: 1 0 auto;
// `
// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
/* min-height: 100%; */
/* height: 100%;
    display: grid;
    grid-template-rows: 1fr auto; */
/* display: grid; */
/* flex-direction: column; */
/* justify-content: space-between; */
/* grid-column: auto; */
/* grid-column: 4 / 6; */
/* grid-template-rows: auto auto auto 10px; */

/* justify-content: center;
    align-items: center; */
/* height: 80vh;
    p {
        color: #333;
        text-align: center;
        margin-top: 10px;
    } */
// `
export default App

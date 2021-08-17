import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContext'
import Colors from '../../styles/Colors'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 2 * 56px);
    color: ${({ themecontext }) => (themecontext ? Colors.DARK_NEUTRO : Colors.LIGHT_NEUTRO)};
`

function Help() {
    const [themeContext, themeDispatcher] = useContext(ThemeContext)

    return (
        <Container themecontext={themeContext}>
            <h1 role="contentinfo">Help</h1>
        </Container>
    )
}

export default Help

import React, { useContext } from 'react'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'
import { ThemeContext } from '../../context/ThemeContext'
import Colors from '../../styles/Colors'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 448px;
    height: 500px;
    margin: auto auto;
    padding: 48px 40px;

    border: ${({ themecontext }) =>
        themecontext ? `2px solid ${Colors.LIGHT_SECONDARYCOLOR}` : `2px solid black`};
    border-radius: 5px;
    background: ${({ themecontext }) =>
        themecontext ? Colors.LIGHT_SUPERLIGHTPRIMARYCOLOR : Colors.DARK_SECONDARYCOLOR};

    h1 {
        font-size: 1.7em;
        margin-top: 16px;
        color: ${({ themecontext }) =>
            themecontext ? 'black' : Colors.DARK_SUPERLIGHTPRIMARYCOLOR};
    }
    h2 {
        font-size: 1.25em;
        margin-top: 8px;
        color: ${({ themecontext }) =>
            themecontext ? 'black' : Colors.DARK_SUPERLIGHTPRIMARYCOLOR};
    }
    form {
        margin-top: 24px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-flow: column;
    }
    button {
        background: ${({ themecontext }) =>
            themecontext ? Colors.LIGHT_SECONDARYCOLOR : Colors.DARK_PRIMARYCOLOR};
        color: #fff;
        padding: 10px;
        width: 150px;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 20px;
        font-weight: bold;
    }
`
const Input = styled.input`
    padding: 10px;
    margin: 5px;
    width: 368px;
    height: 55px;
    border-radius: 5px;
    border: ${({ themecontext }) =>
        themecontext ? `1px solid ${Colors.LIGHT_SECONDARYCOLOR}` : `1px solid black`};
    background: ${({ themecontext }) =>
        themecontext ? Colors.LIGHT_NEUTRO : Colors.DARK_SUPERLIGHTPRIMARYCOLOR};
`
const Icon = styled.div`
    font-size: 2rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ themecontext }) => (themecontext ? Colors.LIGHT_SECONDARYCOLOR : 'white')};
    p {
        font-size: 0.75em;
        font-weight: bold;
        margin-left: 1px;
    }
`

function Login() {
    const [themeContext, themeDispatcher] = useContext(ThemeContext)
    return (
        <Container themecontext={themeContext} role="form">
            <Icon themecontext={themeContext}>
                <AiIcons.AiFillYoutube />
                <p>Youtube</p>
            </Icon>
            <h1 role="contentinfo">Sign in</h1>
            <h2 role="contentinfo">to continue to YouTube</h2>
            <form>
                <Input type="text" placeholder="email" themecontext={themeContext} role="textbox" />
                <Input
                    type="password"
                    placeholder="password"
                    themecontext={themeContext}
                    role="textbox"
                />
                <button type="button">Login</button>
            </form>
        </Container>
    )
}

export default Login

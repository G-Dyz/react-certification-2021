import React from 'react'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai'
import Colors from '../../styles/Colors'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 448px;
    height: 500px;
    margin: auto auto;
    padding: 48px 40px;

    border: ${`2px solid ${Colors.SECONDARYCOLOR}`};
    border-radius: 5px;
    background: ${Colors.SUPERLIGHTPRIMARYCOLOR};

    h1 {
        font-size: 1.7em;
        margin-top: 16px;
    }
    h2 {
        font-size: 1.25em;
        margin-top: 8px;
    }
    form {
        margin-top: 24px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-flow: column;
    }
    button {
        background: ${Colors.SECONDARYCOLOR};
        color: #fff;
        padding: 10px;
        width: 150px;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 20px;
    }
`
const Input = styled.input`
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    width: 368px;
    height: 55px;
`
const Icon = styled.div`
    font-size: 2rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${Colors.SECONDARYCOLOR};
    p {
        font-size: 0.75em;
        font-weight: bold;
        margin-left: 1px;
    }
`

const Login = () => (
    <Container role="form">
        <Icon>
            <AiIcons.AiFillYoutube />
            <p>Youtube</p>
        </Icon>
        <h1 role="contentinfo">Sign in</h1>
        <h2 role="contentinfo">to continue to YouTube</h2>
        <form>
            <Input type="text" placeholder="email" role="textbox" />
            <Input type="password" placeholder="password" role="textbox" />
            <button type="button">Login</button>
        </form>
    </Container>
)

export default Login

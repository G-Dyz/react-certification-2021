import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Form from '../../components/Form'
import LoginApi from './Login.api'
import { AuthContext } from '../../context/AuthContext'
import Alert from '../../components/Alert'

const Container = styled.div`
    height: calc(100vh - 2 * 56px);
    padding-top: 16px;
`

function Login() {
    const [authContext, authDispatcher] = useContext(AuthContext)
    const [error, setError] = useState(false)
    const history = useHistory()
    const navigateTo = () => history.push('/home')

    const loginAction = async (username, password) => {
        try {
            const response = await LoginApi(username, password)
            console.log(response)
            if (response?.id) {
                authDispatcher({
                    type: 'set',
                    data: response,
                })
            }
            alert(`Welcome ${username}!`)
            navigateTo()
        } catch (e) {
            console.log(e)
            setError(true)
        }
    }

    return (
        <Container>
            <Form onSubmitClick={loginAction} />
            {error ? <Alert msg="Error: Username or password invalid" /> : null}
        </Container>
    )
}

export default Login

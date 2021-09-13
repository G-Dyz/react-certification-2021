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
    margin-left: 5vw;
    margin-right: 5vw;
`
const SubContainer = styled.div`
    margin-bottom: 20px;
`

function Login() {
    const [authContext, setAuth] = useContext(AuthContext)
    const [error, setError] = useState(false)
    const history = useHistory()
    const navigateTo = () => history.push('/home')

    const loginAction = async (username, password) => {
        try {
            const response = await LoginApi(username, password)

            if (response?.id) {
                setAuth(response)
            }

            window.alert(`Welcome ${username}!`)
            navigateTo()
        } catch (e) {
            setError(true)
        }
    }

    return (
        <Container>
            <SubContainer>
                <Form onSubmitClick={loginAction} />
            </SubContainer>

            {error ? <Alert msg="Error: Username or password invalid" /> : null}
        </Container>
    )
}

export default Login

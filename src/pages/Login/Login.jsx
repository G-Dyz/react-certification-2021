import React from 'react'
import styled from 'styled-components'
import Form from '../../components/Form'

const Container = styled.div`
    height: calc(100vh - 2 * 56px);
    padding-top: 16px;
`

function Login() {
    return (
        <Container>
            <Form />
        </Container>
    )
}

export default Login

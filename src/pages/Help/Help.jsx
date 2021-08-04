import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 2 * 56px);
`

function Help() {
    return (
        <Container>
            <h1>Help</h1>
        </Container>
    )
}

export default Help

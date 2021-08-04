import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 2 * 56px);

    p {
        color: #333;
        text-align: center;
        margin-top: 10px;
    }
`

function NotFound() {
    return (
        <Container>
            <img
                src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
                alt="Not found"
            />
            <p role="alert">
                This page isn&apos;t available. Sorry about that.
                <br />
                Try searching for something else.
            </p>
        </Container>
    )
}

export default NotFound

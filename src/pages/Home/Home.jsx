import React from 'react'
import styled from 'styled-components'
import mockData from '../../mocks/youtube-videos-mock'
import Card from '../../components/Card'

function Home() {
    return (
        <Container>
            {mockData.items.map((item) => (
                <Card item={item.snippet} key={item.snippet.publishedAt} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
`

export default Home

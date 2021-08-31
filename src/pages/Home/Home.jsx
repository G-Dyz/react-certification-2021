import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../../components/Card'
import { TopicContext } from '../../context/TopicContext'
import { ThemeContext } from '../../context/ThemeContext'

import API from '../../services/youtube.service'
import Colors from '../../styles/Colors'

const Container = styled.div`
    background: ${({ themeContext }) => (themeContext ? Colors.LIGHT_NEUTRO : Colors.DARK_NEUTRO)};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 24px;
    padding-bottom: 24px;
`
const VideoLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`

function Home() {
    const [videos, setVideos] = useState('')
    const [topicContext, topicDispatcher] = useContext(TopicContext)
    const [themeContext, themeDispatcher] = useContext(ThemeContext)

    const onSearch = async (keyword) => {
        const response = await API.get('/search', {
            params: {
                q: keyword,
            },
        })
        setVideos(response.data.items)
    }

    useEffect(() => {
        onSearch(topicContext)
    }, [topicContext])

    return (
        <Container themeContext={themeContext}>
            {videos?.length &&
                videos.map((item) => (
                    <VideoLink
                        to={{ pathname: `/video`, search: `?videoUrl=${item.id.videoId}` }}
                        key={item.snippet.publishedAt}
                        role="figure"
                    >
                        <Card item={item} />
                    </VideoLink>
                ))}
        </Container>
    )
}

export default Home

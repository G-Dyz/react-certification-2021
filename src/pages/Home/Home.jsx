/* eslint no-unused-vars: "off" */

import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import mockData from '../../mocks/youtube-videos-mock'
import Card from '../../components/Card'
import { TopicContext } from '../../context/TopicContext'

import API from '../../services/youtube.service'

function Home() {
    const [videos, setVideos] = useState('') // mockData.items
    const [topicContext, topicDispatcher] = useContext(TopicContext)
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
        <Container>
            {videos &&
                videos.length &&
                videos.map((item) => (
                    <VideoLink
                        to={{ pathname: `/video`, search: `?videoUrl=${item.id.videoId}` }}
                        key={item.snippet.publishedAt}
                        role="figure"
                    >
                        <Card item={item.snippet} />
                    </VideoLink>
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
const VideoLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`

export default Home

import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import API from '../../services/youtube.service'
import Card from '../../components/Card'
import Frame from '../../components/Frame'
import Device from '../../styles/Device'
import { FavoriteContext } from '../../context/FavoriteContext'

const VideoLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: column;

    @media ${Device.mobileS} {
        flex-direction: column;
    }
    @media ${Device.tablet} {
        flex-direction: row;
    }
    @media ${Device.laptop} {
        flex-direction: row;
    }
`
const RelatedContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    @media ${Device.mobileS} {
        flex-wrap: wrap;
    }
    @media ${Device.tablet} {
        flex-direction: column;
    }
    @media ${Device.laptop} {
        flex-direction: column;
    }
`
function Video({ history }) {
    const [idVideo, setIdVideo] = useState('')
    const [video, setVideo] = useState('')
    const [relatedVideos, setRelatedVideos] = useState('')
    const [favoriteContext, favoriteDispatcher] = useContext(FavoriteContext)

    const onSearch = async () => {
        if (idVideo !== '') {
            const response = await API.get('/videos', {
                params: {
                    part: 'snippet',
                    id: idVideo,
                },
            })
            setVideo(response.data.items[0])
        }
    }
    const updateRelated = async () => {
        if (idVideo !== '') {
            const relatedResponse = await API.get('/search', {
                params: {
                    part: 'snippet',
                    type: 'video',
                    relatedToVideoId: idVideo,
                },
            })
            setRelatedVideos(relatedResponse.data.items)
        }
    }
    const validateIsFavorite = () => {
        return (
            favoriteContext.filter((item) => (item.id.videoId || item.id) === video.id).length > 0
        )
    }

    useEffect(() => {
        setIdVideo(history.location.search.replace('?videoUrl=', ''))
    }, [history.location.search])

    useEffect(() => {
        onSearch()
        updateRelated()
    }, [idVideo])

    return (
        <Container>
            {relatedVideos?.length ? (
                <Frame video={video} isFavorite={validateIsFavorite()} />
            ) : null}

            <RelatedContainer>
                {relatedVideos?.length
                    ? relatedVideos.map((item) =>
                          item.snippet?.publishedAt ? (
                              <VideoLink
                                  to={{
                                      pathname: `/video`,
                                      search: `?videoUrl=${item.id.videoId}`,
                                  }}
                                  key={item.snippet.publishedAt}
                                  role="figure"
                              >
                                  <Card item={item} isFavorite={false} />
                              </VideoLink>
                          ) : null
                      )
                    : null}
            </RelatedContainer>
        </Container>
    )
}

Video.propTypes = {
    history: PropTypes.shape({
        location: PropTypes.shape({
            search: PropTypes.string,
        }),
    }),
}
Video.defaultProps = {
    history: {
        location: {
            search: '',
        },
    },
}

export default Video

import React from 'react'
import styled from 'styled-components'
import * as IconName from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import PropTypes from 'prop-types'
import Device from '../../styles/Device'

function Frame({ video }) {
    return (
        <Container>
            {video && video.snippet && video.snippet.localized ? (
                <>
                    <FrameVideo
                        title={video.snippet.localized.title}
                        src={`https://www.youtube.com/embed/${video.id}`}
                        alt={video.snippet.localized.title}
                        role="figure"
                    />
                    <CardDetail>
                        <h1>{video.snippet.localized.title}</h1>
                        <Channel>
                            <h2 role="contentinfo">{video.snippet.channelTitle}</h2>
                            <Icon>
                                <AiIcons.AiFillCheckCircle />
                            </Icon>
                        </Channel>
                        <p role="contentinfo">{video.snippet.localized.description}</p>
                        <Info>
                            <div>
                                <p role="contentinfo">
                                    {video.snippet.publishedAt.substring(0, 10)}
                                </p>
                            </div>
                            <Icon>
                                <IconName.BiListPlus />
                                <IconText>Guardar</IconText>
                            </Icon>
                        </Info>
                    </CardDetail>
                    <Separator />
                </>
            ) : null}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-right: 24px;
`
const FrameVideo = styled.iframe`
    width: 100%;
    height: auto;

    @media ${Device.mobileS} {
        min-height: 180px;
    }
    @media ${Device.mobileM} {
        min-height: 280px;
    }
    @media ${Device.mobileL} {
        min-height: 320px;
    }
    @media ${Device.tablet} {
        min-height: 360px;
    }
    @media ${Device.laptop} {
        min-height: 480px;
    }
`
const CardDetail = styled.div`
    display: flex;

    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 8px;
    h1 {
        font-size: 1.5em;
        padding-bottom: 8px;
    }
    h2 {
        font-size: 1em;
        padding-bottom: 8px;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 8px;
    justify-content: space-between;
    color: #737373;
`
const Icon = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #737373;
`
const IconText = styled.div`
    font-size: 1.2rem;
`
const Channel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        margin-bottom: 5px;
        padding: 5px;
    }
`
const Separator = styled.hr`
    margin-top: 24px;
    margin-bottom: 24px;
`

Frame.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string,
        snippet: PropTypes.shape({
            localized: PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
            }),
            channelTitle: PropTypes.string,
            publishedAt: PropTypes.string,
        }),
    }),
}

Frame.defaultProps = {
    video: PropTypes.shape({
        id: null,
        snippet: {
            localized: {
                title: '',
                description: '',
            },
            channelTitle: '',
            publishedAt: '',
        },
    }),
}

export default Frame

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import Device from '../../styles/Device'

const Container = styled.div`
    background: white;
    max-width: 250px;
    margin-bottom: 40px;
    margin-left: 8px;
    margin-right: 8px;

    @media ${Device.mobileS} {
        max-width: 250px;
    }
    @media ${Device.tablet} {
        max-width: 320px;
    }
    @media ${Device.laptop} {
        min-width: 350px;
    }
    img {
        max-width: 250px;
        @media ${Device.mobileS} {
            max-width: 250px;
        }
        @media ${Device.tablet} {
            max-width: 320px;
        }
        @media ${Device.laptop} {
            min-width: 350px;
        }
    }
    svg {
        display: none;
    }
    &:hover svg {
        position: relative;
        top: -50px;
        left: 5px;
        display: block;
        background: rgba(0, 0, 0, 0.75);
        border-radius: 5px;
        margin-right: 5px;
        padding: 2px;
    }
    &:hover img {
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
    }
`
const Tittle = styled.p`
    margin-top: 12px;
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 1.075em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
const Text = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #606060;
    font-size: 0.95em;
`
const Icon = styled.div`
    font-size: 1.5rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    position: absolute;
`
function Card({ item }) {
    return (
        <Container role="gridcell">
            <img src={item.thumbnails.medium.url} alt={item.title} />
            <Icon>
                <AiFillEye />
                <AiFillHeart />
            </Icon>
            <Tittle role="contentinfo">{item.title}</Tittle>
            <Text role="contentinfo">{item.channelTitle}</Text>
            <Text role="contentinfo">{item.description}</Text>
            <Text role="contentinfo">{item.publishTime.substring(0, 10)}</Text>
        </Container>
    )
}

Card.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        channelTitle: PropTypes.string,
        description: PropTypes.string,
        publishTime: PropTypes.string,
        thumbnails: PropTypes.shape({
            medium: PropTypes.shape({
                url: PropTypes.string,
            }),
        }),
    }),
}

Card.defaultProps = {
    item: PropTypes.shape({
        title: null,
        channelTitle: null,
        description: null,
        publishTime: null,
        thumbnails: null,
    }),
}

export default Card

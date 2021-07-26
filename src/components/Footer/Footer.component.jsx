import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiFillYoutube } from 'react-icons/ai'
import { IoHelpCircleSharp } from 'react-icons/io5'

function Footer() {
    return (
        <Container>
            <GroupLink to="/">
                <Icon role="figure">
                    <AiFillYoutube />
                </Icon>
                <Text role="contentinfo">Youtube 2021</Text>
            </GroupLink>
            <GroupLink to="/help">
                <Text role="contentinfo">Help</Text>
                <Icon role="figure">
                    <IoHelpCircleSharp />
                </Icon>
            </GroupLink>
        </Container>
    )
}

const Container = styled.div`
    background-color: #292929;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    flex-shrink: 0;
`
const Icon = styled.div`
    font-size: 1.5rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #e9e9e9;
    &:hover {
        color: white;
    }
`
const Text = styled.div`
    padding-left: 8px;
    padding-right: 8px;
    color: #e9e9e9;
    text-decoration: none;
    &:hover {
        color: white;
    }
`
const GroupLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`

export default Footer

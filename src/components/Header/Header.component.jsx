import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import PropTypes from 'prop-types'

import SearchBar from '../SearchBar/SearchBar.component'
import ToggleSwitch from '../ToggleSwitch'

import Colors from '../../styles/Colors'
import Button from '../Button'

function Header(props) {
    const [isToggled, setIsToggled] = useState(false)
    const pressHandler = () => props.func()

    return (
        <Container role="navigation">
            <Group>
                <NavIcon to="#" data-testid="hamburgerMenu" onClick={pressHandler}>
                    <FaIcons.FaBars />
                </NavIcon>
                <NavIcon to="/">
                    <AiIcons.AiFillYoutube />
                    <p>Youtube</p>
                </NavIcon>
            </Group>
            <Group>
                <SearchBar />
            </Group>
            <Group>
                <ToggleSwitch
                    id="theme-toggle"
                    toggled={isToggled}
                    onChange={(e) => setIsToggled(e.target.checked)}
                />
                <LinkButton to="/login">
                    <Button tittle="SIGN IN" />
                </LinkButton>
            </Group>
        </Container>
    )
}

const NavIcon = styled(Link)`
    font-size: 1.5rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    text-decoration: none;
    p {
        font-size: 1.2rem;
        margin-left: 2px;
        @media (max-width: 510px) {
            display: none;
        }
    }
`
const Container = styled.div`
    background-color: ${Colors.SECONDARYCOLOR};
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
`
const Group = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
`
const LinkButton = styled(Link)`
    text-decoration: none;
`

Header.propTypes = {
    func: PropTypes.func,
}

Header.defaultProps = {
    func: null,
}

export default Header

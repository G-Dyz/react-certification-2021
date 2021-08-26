import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import PropTypes from 'prop-types'

import SearchBar from '../SearchBar/SearchBar.component'
import ToggleSwitch from '../ToggleSwitch'

import Colors from '../../styles/Colors'
import Button from '../Button'

import { ThemeContext } from '../../context/ThemeContext'

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
    background: ${({ themeContext }) =>
        themeContext ? Colors.LIGHT_SECONDARYCOLOR : Colors.DARK_SECONDARYCOLOR};
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
function Header({ onHamburgerMenuClick }) {
    const [isToggled, setIsToggled] = useState(false)
    const pressHandler = () => onHamburgerMenuClick()

    const [themeContext, themeDispatcher] = useContext(ThemeContext)

    return (
        <Container themeContext={themeContext} role="navigation">
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
                    onChange={(e) => {
                        setIsToggled(e.target.checked)
                        themeDispatcher()
                    }}
                />
                <Button tittle="SIGN IN" />
            </Group>
        </Container>
    )
}

Header.propTypes = {
    onHamburgerMenuClick: PropTypes.func,
}

Header.defaultProps = {
    onHamburgerMenuClick: null,
}

export default Header

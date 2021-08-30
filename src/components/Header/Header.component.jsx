import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
// import * as RiIcons from 'react-icons/ri'

import PropTypes from 'prop-types'

import SearchBar from '../SearchBar/SearchBar.component'
import ToggleSwitch from '../ToggleSwitch'

import Colors from '../../styles/Colors'
import Button from '../Button'

import { ThemeContext } from '../../context/ThemeContext'
import { AuthContext } from '../../context/AuthContext'

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
const Image = styled.img`
    width: 32px;
    border-radius: 50%;
`
const MenuUser = styled.div`
    position: absolute;
    right: 0px;
`
const Option = styled.ul`
    display: flex;
    align-items: center;
    background: ${({ themeContext }) =>
        themeContext ? Colors.LIGHT_SUPERLIGHTPRIMARYCOLOR : Colors.DARK_SUPERLIGHTPRIMARYCOLOR};
    color: ${({ themeContext }) =>
        themeContext ? Colors.LIGHT_DARKSECONDARYCOLOR : Colors.DARK_LIGHTSECONDARYCOLOR};
    width: 200px;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 2px;
    p {
        padding-left: 10px;
    }
    &:hover {
        background: ${({ themeContext }) =>
            themeContext ? Colors.LIGHT_LIGHTSECONDARYCOLOR : Colors.DARK_LIGHTSECONDARYCOLOR};
        color: ${Colors.LIGHT_LETTER};
        cursor: pointer;
    }
`
function Header({ onHamburgerMenuClick }) {
    const [isToggled, setIsToggled] = useState(false)
    const [menuSign, setMenuSign] = useState(false)
    const pressHandler = () => onHamburgerMenuClick()
    const history = useHistory()

    const [themeContext, themeDispatcher] = useContext(ThemeContext)
    const [authContext, authDispatcher] = useContext(AuthContext)

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
                {authContext?.id ? (
                    <div>
                        <Image
                            src={authContext.avatarUrl}
                            alt={authContext.name}
                            onClick={(e) => {
                                setMenuSign(!menuSign)
                                e.preventDefault()
                            }}
                        />
                        {menuSign && (
                            <MenuUser>
                                <Option
                                    onClick={(e) => {
                                        authDispatcher({
                                            type: 'clear',
                                        })
                                        setMenuSign(!menuSign)
                                        e.preventDefault()
                                    }}
                                    themeContext={themeContext}
                                >
                                    <AiIcons.AiOutlineLogout />
                                    <p>Log out</p>
                                </Option>
                                <Option
                                    onClick={(e) => {
                                        history.push('/help')
                                        setMenuSign(!menuSign)
                                        e.preventDefault()
                                    }}
                                    themeContext={themeContext}
                                >
                                    <IoIcons.IoHelp />
                                    <p>Help</p>
                                </Option>
                            </MenuUser>
                        )}
                    </div>
                ) : (
                    <Button tittle="SIGN IN" />
                )}
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

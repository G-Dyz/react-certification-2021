import React, { useState, useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

import * as AiIcons from 'react-icons/ai'
import SidebarData from './SidebarData'
import SubMenu from '../Submenu/SubMenu.component'
import Header from '../Header'
import { ThemeContext } from '../../context/ThemeContext'
import { AuthContext } from '../../context/AuthContext'
import Colors from '../../styles/Colors'

const NavIcon = styled(Link)`
    font-size: 1.5rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
`
const SidebarNav = styled.nav`
    background: ${({ themeContext }) =>
        themeContext ? Colors.LIGHT_SECONDARYCOLOR : Colors.DARK_SECONDARYCOLOR};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
`
const SidebarWrap = styled.div`
    width: 100%;
`
const HeaderContainer = styled.div`
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

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ themeContext }) => (themeContext ? Colors.LIGHT_NEUTRO : Colors.DARK_NEUTRO)}; 
  }
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [themeContext, themeDispatcher] = useContext(ThemeContext)
    const [authContext, authDispatcher] = useContext(AuthContext)

    return (
        <>
            <Header onHamburgerMenuClick={showSidebar} />
            <SidebarNav
                themeContext={themeContext}
                sidebar={sidebar}
                role="navigation"
                data-testid="sidebar"
            >
                <SidebarWrap>
                    <HeaderContainer themeContext={themeContext}>
                        <NavIcon to="#" onClick={showSidebar} data-testid="closeHamburgerMenu">
                            <AiIcons.AiOutlineClose />
                        </NavIcon>
                    </HeaderContainer>
                    {SidebarData.map((item) => {
                        return item.security && !authContext?.id ? null : (
                            <SubMenu item={item} key={item.title} />
                        )
                    })}
                </SidebarWrap>
            </SidebarNav>
            <GlobalStyle themeContext={themeContext} />
        </>
    )
}

export default Sidebar

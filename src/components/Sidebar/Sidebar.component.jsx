import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import * as AiIcons from 'react-icons/ai'
import SidebarData from './SidebarData'
import SubMenu from '../Submenu/SubMenu.component'
import Header from '../Header'
import Colors from '../../styles/Colors'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Header func={showSidebar} />
            <SidebarNav sidebar={sidebar} role="navigation" data-testid="sidebar">
                <SidebarWrap>
                    <HeaderContainer>
                        <NavIcon to="#" onClick={showSidebar} data-testid="closeHamburgerMenu">
                            <AiIcons.AiOutlineClose />
                        </NavIcon>
                    </HeaderContainer>
                    {SidebarData.map((item) => {
                        return <SubMenu item={item} key={item.title} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

const NavIcon = styled(Link)`
    font-size: 1.5rem;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
`
const SidebarNav = styled.nav`
    background: ${Colors.SECONDARYCOLOR};
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
    background-color: ${Colors.SECONDARYCOLOR};
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
`

export default Sidebar

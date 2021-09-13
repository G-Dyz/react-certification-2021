import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext'
import Colors from '../../styles/Colors'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;

    &:hover {
        background: ${({ themecontext }) =>
            themecontext ? Colors.LIGHT_LIGHTSECONDARYCOLOR : Colors.DARK_LIGHTSECONDARYCOLOR};
        border-left: ${`4px solid ${({ themecontext }) =>
            themecontext ? Colors.LIGHT_DARKSECONDARYCOLOR : Colors.DARK_DARKSECONDARYCOLOR}`};
        cursor: pointer;
    }
`
const SidebarLabel = styled.span`
    margin-left: 16px;
`
const DropdownLink = styled(Link)`
    background: ${({ themecontext }) =>
        themecontext ? Colors.LIGHT_DARKSECONDARYCOLOR : Colors.DARK_DARKSECONDARYCOLOR};
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;

    &:hover {
        background: ${({ themecontext }) =>
            themecontext ? Colors.LIGHT_LIGHTSECONDARYCOLOR : Colors.DARK_LIGHTSECONDARYCOLOR};
        cursor: pointer;
    }
`

function SubMenu({ item, onClickCloseSidebar }) {
    const [subnav, setSubnav] = useState(false)
    const showSubNav = () => setSubnav(!subnav)
    const pressHandler = () => onClickCloseSidebar()

    const [themeContext, themeDispatcher] = useContext(ThemeContext)

    return (
        <>
            <SidebarLink
                to={item.path}
                onClick={item.subNav ? showSubNav : pressHandler}
                themecontext={+themeContext}
                role="contentinfo"
            >
                <div>
                    {item.icon}
                    <SidebarLabel role="note">{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((itemSubNav) => {
                    return (
                        <DropdownLink
                            to={itemSubNav.path}
                            themecontext={+themeContext}
                            key={itemSubNav.title}
                        >
                            {itemSubNav.icon}
                            <SidebarLabel role="note">{itemSubNav.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })}
        </>
    )
}

SubMenu.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
        icon: PropTypes.shape({ type: PropTypes.func }),
        subNav: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                path: PropTypes.string,
                icon: PropTypes.shape({ type: PropTypes.func }),
                map: PropTypes.func,
            })
        ),
    }),
    onClickCloseSidebar: PropTypes.func,
}

SubMenu.defaultProps = {
    item: PropTypes.shape({
        title: null,
        path: null,
        icon: null,
        subNav: null,
    }),
    onClickCloseSidebar: null,
}

export default SubMenu

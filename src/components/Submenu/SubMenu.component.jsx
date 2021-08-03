import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Colors from '../../styles/Colors'

function SubMenu({ item }) {
    const [subnav, setSubnav] = useState(false)
    const showSubNav = () => setSubnav(!subnav)

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubNav} role="contentinfo">
                <div>
                    {item.icon}
                    <SidebarLabel role="note">{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((itemSubNav) => {
                    return (
                        <DropdownLink to={itemSubNav.path} key={itemSubNav.title}>
                            {itemSubNav.icon}
                            <SidebarLabel role="note">{itemSubNav.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })}
        </>
    )
}

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    /* font-size: 18px; */

    &:hover {
        background: ${Colors.LIGHTSECONDARYCOLOR};
        border-left: ${`4px solid ${Colors.DARKSECONDARYCOLOR}`};
        cursor: pointer;
    }
`
const SidebarLabel = styled.span`
    margin-left: 16px;
`
const DropdownLink = styled(Link)`
    background: ${Colors.DARKSECONDARYCOLOR};
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    /* font-size: 18px; */

    &:hover {
        background: ${Colors.LIGHTSECONDARYCOLOR};
        cursor: pointer;
    }
`

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
}

SubMenu.defaultProps = {
    item: PropTypes.shape({
        title: null,
        path: null,
        icon: null,
        subNav: null,
    }),
}

export default SubMenu

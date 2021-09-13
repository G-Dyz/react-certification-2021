import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'

const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome role="img" />,
        security: false,
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <AiIcons.AiFillHeart role="img" />,
        security: true,
    },
    {
        title: 'Login',
        path: '/login',
        icon: <RiIcons.RiLoginCircleFill role="img" />,
        security: false,
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoHelpCircleSharp role="img" />,
        security: false,
    },
]

export default SidebarData

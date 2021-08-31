import React from 'react'
import * as AiIcons from 'react-icons/ai'

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
        icon: <AiIcons.AiOutlineLogin role="img" />,
        security: false,
    },
]

export default SidebarData

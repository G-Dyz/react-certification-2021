import React from 'react'
import * as AiIcons from 'react-icons/ai'

const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome role="img" />,
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <AiIcons.AiFillHeart role="img" />,
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin role="img" />,
    },
]

export default SidebarData

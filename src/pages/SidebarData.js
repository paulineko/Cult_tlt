import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Главная',
    path: '/Home',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Любимые места',
    path: '/Favorite_place',
    icon: <FaIcons.FaRegHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Достижения',
    path: '/Setting_account',
    icon: <AiIcons.AiOutlineQuestionCircle />,
    cName: 'nav-text'
  },
 
];

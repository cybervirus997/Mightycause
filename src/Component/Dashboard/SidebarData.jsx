import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Live Page',
    path: '/dashboard/live',
    icon: <AiIcons.AiFillEye />,
    cName: 'nav-text',
  },
  {
    title: 'Page Editor',
    path: '/pageEditor',
    icon: <FiIcons.FiEdit />,
    cName: 'nav-text',
  },
  {
    title: 'Compaings',
    path: '/compaings',
    icon: <AiIcons.AiFillDollarCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Participants',
    path: '/participants',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FaIcons.FaStickyNote />,
    cName: 'nav-text',
  },
  {
    title: 'Registration',
    path: '/registration',
    icon: <AiIcons.AiFillEdit />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/setting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text',
  },
  {
    title: 'Publish',
    path: '/publish',
    icon: <AiIcons.AiFillRocket />,
    cName: 'nav-text',
  },
];

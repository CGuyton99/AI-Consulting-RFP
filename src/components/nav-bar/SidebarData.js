import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Careers',
    path: '/careers',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar & Events',
    path: '/calendar',
    icon: <AiIcons.AiFillCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'Directories',
    path: '/directories',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text'
  },
  {
    title: 'News & Bulletin',
    path: '/news',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];
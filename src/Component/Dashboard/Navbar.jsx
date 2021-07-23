import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
// import { IconContext } from 'react-icons/lib';

const SideNavbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '(162, 167, 184)' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul
            className='nav-menu-items'
            onMouseOver={showSidebar}
            onMouseOut={showSidebar}>
            <li className='navbar-toggle'></li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className={sidebar ? 'title' : 'hide'}>
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideNavbar;

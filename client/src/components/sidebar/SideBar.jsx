import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './SideBar.module.css';
import { FiChevronLeft, FiGlobe, FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi';
import { IoTodayOutline, IoCalendarOutline, IoMegaphoneOutline, IoPieChartOutline, IoReceiptOutline, IoShieldOutline, IoTrendingUp, IoChevronForwardOutline, IoSettingsOutline } from 'react-icons/io5';
import { useEffect } from 'react';

const navItems = [
  {
    text: "Dashboard",
    icon: <FiHome />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <FiShoppingCart />,
  },
  {
    text: "Customers",
    icon: <FiUsers />,
  },
  {
    text: "Transactions",
    icon: <IoReceiptOutline/>,
  },
  {
    text: "Geography",
    icon: <FiGlobe />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <IoMegaphoneOutline />,
  },
  {
    text: "Daily",
    icon: <IoTodayOutline />,
  },
  {
    text: "Monthly",
    icon: <IoCalendarOutline />,
  },
  {
    text: "Breakdown",
    icon: <IoPieChartOutline />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <IoShieldOutline />,
  },
  {
    text: "Performance",
    icon: <IoTrendingUp />,
  },
];

const SideBar = ({ isSidebarOpen, setIsSidebarOpen, isNonMobile, user }) => {
  const [ active, setActive ] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <div 
      className={`${styles.sidebar} ${isSidebarOpen? styles.openSidebar: ''}`} 
      style={{
        overflow: 'hidden',
        width: isSidebarOpen ? '300px' : '0%'
      }}
    >
      <div className=''>
        <div style={{ width : '100%'}}>
          <div className={styles.logo__container}>
            <h3>SNEEKAdmin</h3>
            {/* Add this when not onn mobile divices */}
            { !isNonMobile && <div 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiChevronLeft/>
            </div>}
          </div>

          <ul>
            {navItems.map(({ text, icon }) => {
              if(!icon){
                return (
                  <div className={styles.listTitle}>
                    <p>{text}</p>
                  </div>
                )
              }

              const list = text.toLowerCase();

              return(
                <li 
                  key = {text} 
                  className = {`${styles.navList} ${list === active? styles.active : ''}`}
                  onClick = {()=> {
                    // navigate(`/${list}`) 
                    setActive(list)
                  }}
                >
                  <Link
                    to={`/${list}`}
                    className={styles.listItem}
                  >
                    <span 
                      style={{marginLeft: '3rem', fontSize: '1rem'}}
                    >
                      {icon}
                    </span>
                    <span style={{marginLeft: '2rem' }}>{text}</span>
                    { list === active && <span style={{ marginLeft: 'auto'}}>{<IoChevronForwardOutline />}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

            <div className={styles.userPanel}>
              <div className={styles.userContainer}>
                <div 
                  style={{ display: 'flex', alignItems: 'center'}}
                >
                  <img src="" alt="" className={styles.userImage}/>
                  <div style={{display: 'flex',flexDirection: 'column', marginLeft: '1rem'}} >
                    <p><b>{user.name}</b></p>
                    <p>{user.occupation}</p>
                  </div>
                </div>
                <div>
                  <IoSettingsOutline />
                </div>
              </div>
            </div>
      </div>
    </div>
  )
};

export default SideBar;
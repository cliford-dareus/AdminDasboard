import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from './SideBar.module.css';
import { FiChevronLeft, FiGlobe, FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi';
import { IoTodayOutline, IoCalendarOutline, IoMegaphoneOutline, IoPieChartOutline, IoReceiptOutline, IoShieldOutline, IoTrendingUp, IoChevronForwardOutline } from 'react-icons/io5';

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

const SideBar = ({ isSidebarOpen, setIsSidebarOpen, isNonMobile}) => {
  const { pathname } = useLocation();
  const [ active, setAtive ] = useState('');
  const navigate = useNavigate()

  console.log(pathname)

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
            {( !isNonMobile && <div 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FiChevronLeft/>
            </div> )}
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
                  key={text} 
                  className={styles.navList}
                  onClick={()=> {
                    // navigate(`/${list}`) 
                    setAtive(list)
                  }}
                >
                  <Link
                    to={`/${list}`}
                    className={styles.listItem}
                  >
                    <span style={{marginLeft: '3rem'}}>{icon}</span>
                    <span style={{marginLeft: '2rem' }}>{text}</span>
                    { null && <span>{<IoChevronForwardOutline />}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>


      </div>
    </div>
  )
};

export default SideBar;
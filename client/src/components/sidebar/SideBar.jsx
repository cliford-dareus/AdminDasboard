import React from 'react';
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

const SideBar = () => {
  return (
    <div 
      className={styles.sidebar} 
      style={{
        overflow: 'hidden',
      }}
    >
      <div className=''>
        <div style={{ width : '100%'}}>
          <div className={styles.logo__container}>
            <h3>SNEEKAdmin</h3>
            {/* Add this when not onn mobile divices */}
            {<div>
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
                <li key={text} className={styles.navList}>
                  <a href="" className={styles.listItem}>
                    <span style={{marginLeft: '3rem'}}>{icon}</span>
                    <span style={{marginLeft: '2rem' }}>{text}</span>
                    { null && <span>{<IoChevronForwardOutline />}</span>}
                  </a>
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
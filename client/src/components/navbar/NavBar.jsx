import React from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className=''
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <AiOutlineMenu/>
          </div>
      </div>
    </header>
  )
};

export default NavBar;


import React from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className=''>
            <AiOutlineMenu/>
          </div>
      </div>
    </header>
  )
};

export default NavBar;


import React from 'react';
import styles from './SideBar.module.css';

const SideBar = () => {

  return (
    <div 
      className={styles.sidebar} 
      style={{
        width :'250px',
        overflow: 'hidden',
        display: 'none'
      }}
    >
      SideBar
    </div>
  )
};

export default SideBar;
import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, subTitle }) => {
  return (
    <div className=''>
        <p 
          className={styles.titles}>
            {title}
        </p>
        <p 
          className={styles.subTitle}>
            {subTitle}
        </p>
    </div>
  )
}

export default Header;
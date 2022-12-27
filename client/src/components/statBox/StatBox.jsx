import React from 'react';
import styles from './StatBox.module.css';

const StatBox = ({ title, icon, value, increase, description }) => {

  return (
    <div className={styles.minibox}>
        <div className={styles.flex}>
            <p>{ title }</p>
            <div>
                {icon}
            </div>
        </div>

        <p 
            style={{
                fontSize: '1.5rem'
            }}
        >{value}</p>

        <div
            className={styles.flex}
        >
            <p>{increase}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default StatBox;
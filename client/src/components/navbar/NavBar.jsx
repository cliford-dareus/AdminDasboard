import React from 'react';
import styles from './NavBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMoonOutline, IoSearchOutline, IoSettingsOutline } from 'react-icons/io5';

const NavBar = ({ setIsSidebarOpen, isSidebarOpen, user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
            <div 
              className={styles.leftside}
            >
              <div
                style={{ display: 'flex', alignItems: 'center'}}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <AiOutlineMenu/>
              </div>

              <div className={styles.inputcontainer}>
                <input 
                  type="text" 
                  placeholder='Search'
                />
                <div style={{ display: 'flex', alignItems: 'center'}}>
                  <IoSearchOutline />
                </div>
              </div>
            </div>

            <div className={styles.rigthside}>
              <div className=''>
                <IoMoonOutline />
              </div>

              <div className=''>
                <IoSettingsOutline />
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
    </header>
  )
};

export default NavBar;


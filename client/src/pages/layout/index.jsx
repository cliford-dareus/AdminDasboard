import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import SideBar from '../../components/sidebar/SideBar';
import styles from './layout.module.css'

const Layout = () => {
  return (
    <div className={styles.layout}>
        <SideBar/>

        <main className={styles.main}>
            <NavBar/>
            <Outlet/>
        </main>
    </div>
  )
};

export default Layout;
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import SideBar from '../../components/sidebar/SideBar';
import styles from './layout.module.css'

const Layout = () => {
    const mediaQueryList = window.matchMedia("(min-width: 500px)");
    const [ isNonMobile, setIsNonMobile ] = useState();
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);

    const handleTabletChange = (e) => {
        setIsNonMobile(e.matches);
    };

    useEffect(()=> {
        mediaQueryList.addListener(handleTabletChange);
    },[])

  return (
    <div className={styles.layout}>
        <SideBar
            isNonMobile={isNonMobile}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className={styles.main}>
            <NavBar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet/>
        </main>
    </div>
  )
};

export default Layout;
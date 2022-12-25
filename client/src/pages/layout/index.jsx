import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';
import SideBar from '../../components/sidebar/SideBar';
import styles from './layout.module.css';
import { useSelector } from 'react-redux';
import { useGetUSerQuery } from '../../features/api';

const Layout = () => {
    const mediaQueryList = window.matchMedia("(min-width: 500px)");
    const [ isNonMobile, setIsNonMobile ] = useState();
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);
    const userId = useSelector(state => state.global.userId);
    const { data } = useGetUSerQuery(userId);

    const handleTabletChange = (e) => {
        setIsNonMobile(e.matches);
    };

    useEffect(()=> {
        mediaQueryList.addListener(handleTabletChange);

        return () => {
            mediaQueryList.removeListener(handleTabletChange);
        }
    },[]);

  return (
    <div className={styles.layout}>
        <SideBar
            user= { data || {} }
            isNonMobile={isNonMobile}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className={styles.main}>
            <NavBar
                user= { data || {} }
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet/>
        </main>
    </div>
  )
};

export default Layout;
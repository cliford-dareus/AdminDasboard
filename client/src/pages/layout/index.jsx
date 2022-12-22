import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <div>
            <div>Bitch</div>
             <Outlet/>
        </div>
    </div>
  )
};

export default Layout;
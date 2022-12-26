import React from 'react';
import Header from '../../components/hearder/header';
import { useGetDashboardQuery } from '../../features/api';



const Dashboard = () => {
  const { data, isLoading } = useGetDashboardQuery();

  console.log(data)
  return (
    <div>
      <div className=''>
        <Header 
          title= 'Dashboard'
          subTitle = 'Welcome to your dashboard'
        />
      </div>
    </div>
  )
};

export default Dashboard;
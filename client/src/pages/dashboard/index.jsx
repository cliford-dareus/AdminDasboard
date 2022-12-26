import React from 'react';
import Header from '../../components/hearder/header';
import { IoDownloadOutline, IoMailOutline, IoMegaphoneOutline } from 'react-icons/io5';
import { useGetDashboardQuery } from '../../features/api';
import styles from './dashboard.module.css'
import StatBox from '../../components/statBox/statBox';

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardQuery();

  // console.log(data?.totalCustomers)
  return (
    <div>
      <div className={styles.header}>
        <Header 
          title= 'Dashboard'
          subTitle = 'Welcome to your dashboard'
        />

        <div className=''>
          <button
            className={styles.downloadbtn}
          >
            <IoDownloadOutline />
            Download Reports
          </button>
        </div>
      </div>

      <div className={styles.main}>

          <StatBox 
            title='Total Customer'
            value = {data?.totalCustomers}
            increase="+14%"
            description="Since last month"
            icon = {<IoMailOutline />}   
          />

          <StatBox 
            title="Sales Today"
            value={data && data.todayStats.totalSales}
            increase="+21%"
            description="Since last month"
            icon={<IoMegaphoneOutline />}
          />

          <div
            className={styles.largebox}
          >
            dd
          </div>
        
      </div>
    </div>
  )
};

export default Dashboard;
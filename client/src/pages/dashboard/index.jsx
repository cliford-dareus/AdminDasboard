import React from 'react';
import Header from '../../components/hearder/header';
import { IoDownloadOutline, IoMailOutline, IoMegaphoneOutline, IoPersonAddOutline, IoStatsChartOutline } from 'react-icons/io5';
import { useGetDashboardQuery } from '../../features/api';
import styles from './dashboard.module.css'
import StatBox from '../../components/statBox/statBox';
import OverviewChart from '../../components/overView/OverviewChart';
import BreakdownChart from '../../components/breakdownChart/BreakdownChart';

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
            <OverviewChart
              view="sales"
            />
          </div>

          <StatBox
            title="Monthly Sales"
            value={data && data.thisMonthStats.totalSales}
            increase="+5%"
            description="Since last month"
            icon={ <IoPersonAddOutline /> }
          />

          <StatBox 
            title="Yearly Sales"
            value={data && data.yearlySalesTotal}
            increase="+43%"
            description="Since last month"
            icon={<IoStatsChartOutline />}
          />

          <div
            className={styles.largebox}
          >

          </div>

          <div
            className={styles.mediumbox}
          >
            <p>Sales by Category</p>

            <BreakdownChart 
              
            />

            <p>
              Breakdown of real states and information via category for revenue
              made for this year and total sales.
            </p>
          </div>
      </div>
    </div>
  )
};

export default Dashboard;
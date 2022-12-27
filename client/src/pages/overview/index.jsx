import React from 'react';
import Header from '../../components/hearder/Header';
import styles from './Overview.module.css';
import OverviewChart from '../../components/overView/OverviewChart';
import { useState } from 'react';

const Overview = () => {
    const [ view, setView ] = useState('units');

  return (
    <div className={styles.overview}>
        <Header title="OVERVIEW" subTitle="Overview of general revenue and profit" />
        <div className={styles.container}>
            <form>
                <label htmlFor="view">View</label>
                <select 
                    name="view" 
                    id="view"
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                >
                    <option value="sales">Sales</option>
                    <option value="units">Units</option>
                </select>
            </form>
            <OverviewChart view={view}/>
        </div>
    </div>
  )
}

export default Overview;
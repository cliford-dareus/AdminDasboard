import React from 'react';
import BreakdownChart from '../../components/breakdownChart/BreakdownChart';
import Header from '../../components/hearder/Header';

const Breakdown = () => {
  return (
    <div style={{ width: '100%', heigth: '80vh'}}>
        <Header title='BREAKDOWN' subTitle='Breakdown of Sales By Category'/>
        <div style={{ width: '100%', height: '100%'}}>
            <BreakdownChart isDashboard={true}/>
        </div>
    </div>
  )
}

export default Breakdown;
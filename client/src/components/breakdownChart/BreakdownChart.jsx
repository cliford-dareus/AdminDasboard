import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { useGetSalesQuery } from '../../features/api';
import styles from './Breakdown.module.css';

const BreakdownChart = ({ isDashboard = false}) => {
    const { data, isLoading } = useGetSalesQuery();

    if(!data ||isLoading) return <div>LOADING...</div>;

    const colors = [
        'red',
        '#F9EBE0',
        '#F9EBE0',
        'red',
      ];

    const formattedData = Object.entries(data?.salesByCategory)?.map(([category, sales], i) => ({
          id: category,
          label: category,
          value: sales,
          color: colors[i],
        })
    );

  return (
    <div className={styles.breakdown}>
      <div
          style={{ 
            position: 'relative',
            height: isDashboard? "80vh" : "200px",
            minWidth : isDashboard ? "325px" : undefined,
            minHeight: isDashboard ? "325px" : '200px',
          }}
      >
        <ResponsivePie
          data={formattedData}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: '#F9EBE0',
                },
              },
              legend: {
                text: {
                  fill: '#F9EBE0',
                },
              },
              ticks: {
                line: {
                  stroke: '#F9EBE0',
                  strokeWidth: 1,
                },
                text: {
                  fill: '#F9EBE0',
                },
              },
            },
            legends: {
              text: {
                fill: '#F9EBE0',
              },
            },
            tooltip: {
              container: {
                color: '#142038',
              },
            },
          }}
          colors={{ datum: "data.color" }}
          margin={
            isDashboard
              ? { top: 40, right: 80, bottom: 100, left: 50 }
              : { top: 40, right: 80, bottom: 80, left: 80 }
          }
          sortByValue={true}
          innerRadius={0.45}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          enableArcLinkLabels={!isDashboard}
          arcLinkLabelsTextColor={'#F9EBE0'}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: isDashboard ? 20 : 0,
              translateY: isDashboard ? 50 : 56,
              itemsSpacing: 0,
              itemWidth: 85,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: '#142038',
                  },
                },
              ],
            },
          ]}
        />
        <div className={styles.desc}>
          <p>
            {!isDashboard && "Total:"} ${data.yearlySalesTotal}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BreakdownChart;
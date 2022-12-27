import React, { useMemo, useState } from 'react'
import Header from '../../components/hearder/Header';
import { useGetSalesQuery } from '../../features/api';
import { ResponsiveLine } from '@nivo/line';
import styles from './Daily.module.css';

const Daily = () => {
    const [startDate, setStartDate] = useState(new Date("2021-02-01"));
    const [endDate, setEndDate] = useState(new Date("2021-03-01"));
    const { data } = useGetSalesQuery();
  
    const [formattedData] = useMemo(() => {
      if (!data) return [];
  
      const { dailyData } = data;
      const totalSalesLine = {
        id: "totalSales",
        color: 'red',
        data: [],
      };
      const totalUnitsLine = {
        id: "totalUnits",
        color: '#F9EBE0',
        data: [],
      };
  
      Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
        const dateFormatted = new Date(date);
        if (dateFormatted >= startDate && dateFormatted <= endDate) {
          const splitDate = date.substring(date.indexOf("-") + 1);
  
          totalSalesLine.data = [
            ...totalSalesLine.data,
            { x: splitDate, y: totalSales },
          ];
          totalUnitsLine.data = [
            ...totalUnitsLine.data,
            { x: splitDate, y: totalUnits },
          ];
        }
      });
  
      const formattedData = [totalSalesLine, totalUnitsLine];
      return [formattedData];
    }, [data, startDate, endDate]);


  return (
    <div style={{height: '80vh'}}>
        <Header title='DAILY' subTitle='Chart of daily sales'/>
        <div className={styles.container}>


            {data ? (<ResponsiveLine
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
                  colors={{ datum: "color" }}
                  margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: false,
                    reverse: false,
                  }}
                  yFormat=" >-.2f"
                  curve="catmullRom"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 90,
                    legend: "Month",
                    legendOffset: 60,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Total",
                    legendOffset: -50,
                    legendPosition: "middle",
                  }}
                  enableGridX={false}
                  enableGridY={false}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: "serieColor" }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      anchor: "top-right",
                      direction: "column",
                      justify: false,
                      translateX: 50,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: "left-to-right",
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: "circle",
                      symbolBorderColor: "rgba(0, 0, 0, .5)",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                ]}
            />) : (<>LOADING...</>)}
        </div>
    </div>
  )
}

export default Daily;
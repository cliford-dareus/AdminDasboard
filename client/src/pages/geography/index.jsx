import React from 'react';
import Header from '../../components/hearder/Header';
import styles from './Geography.module.css';
import { useGetGeographyQuery } from '../../features/api';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoData } from "../../assets/geoData";

const Geography = () => {
    const { data, isLoading } = useGetGeographyQuery();

  return (
    <div className={styles.geography}>
        <Header title='GEOGRAPHY' subTitle='Find where your users are located.'/>
        <div className={styles.container}>
            { data? (
                <ResponsiveChoropleth
                    data={data}
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
                      features={geoData.features}
                      margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
                      domain={[0, 60]}
                      unknownColor="#666666"
                      label="properties.name"
                      valueFormat=".2s"
                      projectionScale={150}
                      projectionTranslation={[0.45, 0.6]}
                      projectionRotation={[0, 0, 0]}
                      borderWidth={1.3}
                      borderColor="#ffffff"
                      legends={[
                        {
                          anchor: "bottom-right",
                          direction: "column",
                          justify: true,
                          translateX: 0,
                          translateY: -125,
                          itemsSpacing: 0,
                          itemWidth: 94,
                          itemHeight: 18,
                          itemDirection: "left-to-right",
                          itemTextColor: '#F9EBE0',
                          itemOpacity: 0.85,
                          symbolSize: 18,
                          effects: [
                            {
                              on: "hover",
                              style: {
                                itemTextColor: 'rgba(245, 245, 245, 0.20)',
                                itemOpacity: 1,
                              },
                            },
                          ],
                        },
                    ]}
                
            />
            ) : (<>LOADING...</>)}
        </div>
    </div>
  )
}

export default Geography;
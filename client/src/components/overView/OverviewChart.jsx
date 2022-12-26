import React, { useMemo} from 'react';
import { useGetSalesQuery } from '../../features/api';
import { ResponsiveLine } from '@nivo/line';

const OverviewChart = ({ view, isDashboard = false }) => {
  const { data, isLoading } = useGetSalesQuery();

  const [ totalSalesLine, totalUnitsLine ] = useMemo(() => {
    if(!data) return []

    const { monthlyData } = data;

    const totalSalesLine = {
      id: "totalSales",
      color: '#F9EBE0',
      data: [],
    };

    const totalUnitsLine = {
      id: "totalUnits",
      color: '#F9EBE0',
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: curSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: curUnits },
        ];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]);

  if (!data || isLoading) return "Loading...";

  return (
    <ResponsiveLine
      data={view === "sales" ? totalSalesLine : totalUnitsLine}
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
    margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
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
    enableArea={isDashboard}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      format: (v) => {
        if (isDashboard) return v.slice(0, 3);
        return v;
      },
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard ? "" : "Month",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickValues: 5,
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard
        ? ""
        : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
      legendOffset: -60,
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
    legends={
      !isDashboard
        ? [
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 30,
              translateY: -40,
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
          ]
        : undefined
    }
    />
  )
}

export default OverviewChart;
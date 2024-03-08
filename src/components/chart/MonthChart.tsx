import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Cell,
} from 'recharts';
import { getTrendTime } from '../../api/trend';

const MonthChart = () => {
  const [chartData, setChartData] = useState([]);

  const barColor = (entry: { ratio: number }) => {
    if (entry.ratio >= 15) {
      return '#B41729';
    } else if (entry.ratio >= 10) {
      return '#d33b4d';
    } else if (entry.ratio >= 5) {
      return '#dc6271';
    } else {
      return '#F2C4CA';
    }
  };

  const fetchData = async () => {
    try {
      const response = await getTrendTime({ trendKwd: '원피스' });
      const apiData = response.data;

      const transformedData = apiData.monthStatisticResponseList.map(
        (item: { month: string; ratio: number }) => ({
          month: item.month,
          ratio: item.ratio,
        })
      );

      setChartData(transformedData);
    } catch (error) {
      console.error('Error fetching trend time data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BarChart width={600} height={300} data={chartData}>
        <XAxis dataKey="month" stroke="#474750" />
        <YAxis
          tickFormatter={(value) => `${value}%`}
          domain={[0, 20]}
          ticks={[0, 5, 10, 15, 20]}
        />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px',
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="ratio" barSize={30}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColor(entry)} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

export default MonthChart;

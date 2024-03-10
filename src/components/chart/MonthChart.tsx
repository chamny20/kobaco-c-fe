import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
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
      <BarChart width={480.76} height={383} data={chartData}>
        <XAxis dataKey="month" stroke="#A0A0A0" />
        <YAxis
          tickFormatter={(value) => `${value}%`}
          domain={[0, 20]}
          ticks={[0, 5, 10, 15, 20]}
        />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <CartesianGrid strokeDasharray="7 7" vertical={false} />{' '}
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

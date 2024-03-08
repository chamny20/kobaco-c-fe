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
  const trendKwd = '검색어';

  const barColor = (entry: { uv: number }) => {
    if (entry.uv >= 15) {
      return '#B41729';
    } else if (entry.uv >= 10) {
      return '#d33b4d';
    } else if (entry.uv >= 5) {
      return '#dc6271';
    } else {
      return '#F2C4CA';
    }
  };

  const fetchData = async () => {
    try {
      const response = await getTrendTime({ trendKwd });
      const data = response.data;

      setChartData(data);
    } catch (error) {
      console.error('Error fetching trend time data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trendKwd]);

  return (
    <>
      <BarChart width={600} height={300} data={chartData}>
        <XAxis dataKey="name" stroke="#474750" />
        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 'dataMax']} />
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
        <Bar dataKey="uv" barSize={30}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColor(entry)} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

export default MonthChart;

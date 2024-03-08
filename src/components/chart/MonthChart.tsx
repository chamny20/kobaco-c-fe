import React from 'react';
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

const data = [
  { name: '1월', uv: 20, pv: 2400, amt: 2400 },
  { name: '2월', uv: 15, pv: 2400, amt: 2400 },
  { name: '3월', uv: 10, pv: 2400, amt: 2400 },
  { name: '4월', uv: 15, pv: 2400, amt: 2400 },
  { name: '5월', uv: 20, pv: 2400, amt: 2400 },
  { name: '6월', uv: 5, pv: 2400, amt: 2400 },
  { name: '7월', uv: 10, pv: 2400, amt: 2400 },
  { name: '8월', uv: 20, pv: 2400, amt: 2400 },
  { name: '9월', uv: 5, pv: 2400, amt: 2400 },
  { name: '10월', uv: 15, pv: 2400, amt: 2400 },
  { name: '11월', uv: 5, pv: 2400, amt: 2400 },
  { name: '12월', uv: 20, pv: 2400, amt: 2400 },
];

const MonthChart = () => {
  const percent = (value: number) => `${value}%`;

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

  return (
    <>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#474750" />
        <YAxis tickFormatter={percent} domain={[0, 'dataMax']} />
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
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColor(entry)} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

export default MonthChart;

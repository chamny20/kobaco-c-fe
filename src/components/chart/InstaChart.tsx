import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from 'recharts';

const data = [
  { name: '원피스1', uv: 1300, pv: 2400, amt: 2400 },
  { name: '원피스2', uv: 300, pv: 2400, amt: 2400 },
  { name: '원피스3', uv: 700, pv: 2400, amt: 2400 },
  { name: '원피스4', uv: 500, pv: 2400, amt: 2400 },
  { name: '원피스5', uv: 200, pv: 2400, amt: 2400 },
];

const InstaChart = () => {
  const barColor = (entry: { uv: number }) => {
    if (entry.uv >= 1500) {
      return '#B41729';
    } else if (entry.uv >= 1000) {
      return '#d33b4d';
    } else if (entry.uv >= 500) {
      return '#dc6271';
    } else {
      return '#F2C4CA';
    }
  };

  return (
    <>
      <BarChart width={600} height={300} data={data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" />
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

        <Bar dataKey="uv" barSize={45}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColor(entry)} />
          ))}
          <LabelList
            dataKey="uv"
            position="right"
            style={{ fill: '#000000', fontSize: 12 }}
            formatter={(value: number) => `${value}건`}
          />
        </Bar>
      </BarChart>
    </>
  );
};

export default InstaChart;

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  //CartesianGrid,
  Cell,
  LabelList,
} from 'recharts';

const data = [
  { name: '10대', uv: 5, pv: 2400, amt: 2400 },
  { name: '20대', uv: 8, pv: 2400, amt: 2400 },
  { name: '30대', uv: 10, pv: 2400, amt: 2400 },
  { name: '40대', uv: 15, pv: 2400, amt: 2400 },
  { name: '50대', uv: 14, pv: 2400, amt: 2400 },
];

const AgeChart = () => {
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
        <XAxis dataKey="name" stroke="#474750" interval={0} />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend width={50} />
        {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />*/}
        <Bar dataKey="uv" barSize={80} fill="#8884d8">
          <LabelList
            dataKey="uv"
            position="top"
            style={{ fill: '#000000', fontSize: 12 }}
            formatter={(value: number) => `${value}%`}
          />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColor(entry)} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

export default AgeChart;

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
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
  const gradientColors = [
    { offset: '5%', color: '#B41729', opacity: 0.8 },
    { offset: '95%', color: '#B41729', opacity: 0 },
    { offset: '5%', color: '#d33b4d', opacity: 0.8 },
    { offset: '95%', color: '#d33b4d', opacity: 0 },
    { offset: '5%', color: '#dc6271', opacity: 0.8 },
    { offset: '95%', color: '#dc6271', opacity: 0 },
    { offset: '5%', color: '#F2C4CA', opacity: 0.8 },
    { offset: '95%', color: '#F2C4CA', opacity: 0 },
  ];

  const getBarFill = (entry: { uv: number }) => {
    if (entry.uv >= 15) {
      return 'url(#gradient0)';
    } else if (entry.uv >= 5) {
      return 'url(#gradient2)';
    } else {
      return 'url(#gradient3)';
    }
  };

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#474750" interval={0} />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
      <Legend width={50} />
      <Bar dataKey="uv" barSize={80}>
        <LabelList
          dataKey="uv"
          position="top"
          style={{ fill: '#000000', fontSize: 12 }}
          formatter={(value: number) => `${value}%`}
        />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={getBarFill(entry)} />
        ))}
      </Bar>

      <defs>
        {gradientColors.map((color, index) => (
          <linearGradient
            key={index}
            id={`gradient${index}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset={color.offset}
              stopColor={color.color}
              stopOpacity={color.opacity}
            />
            <stop offset="95%" stopColor={color.color} stopOpacity={0} />
          </linearGradient>
        ))}
      </defs>
    </BarChart>
  );
};

export default AgeChart;

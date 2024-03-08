import React, { useEffect, useState } from 'react';
import { getTrendPerson } from '../../api/trend';
import { BarChart, Bar, XAxis, Tooltip, Cell, LabelList } from 'recharts';

const AgeChart: React.FC = () => {
  const [ageData, setAgeData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getTrendPerson({ trendKwd: '원피스' });
      const apiData = response.data;

      const transformedData = apiData.ageStatisticResponseList
        ? apiData.ageStatisticResponseList.map(
            (item: { ageType: string; ratio: number }) => ({
              name: item.ageType,
              uv: item.ratio,
            })
          )
        : [];

      setAgeData(transformedData);
    } catch (error) {
      console.error('Error fetching trend person data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <BarChart width={396} height={400} data={ageData}>
      <XAxis dataKey="name" stroke="#A0A0A0" interval={0} />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />

      <Bar dataKey="uv" barSize={80}>
        <LabelList
          dataKey="uv"
          position="top"
          style={{ fill: '#A0A0A0', fontSize: 12 }}
          formatter={(value: number) => `${value}%`}
        />
        {ageData.map((entry, index) => (
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

import React, { useEffect, useState } from 'react';
import { getTrendPerson } from '../../api/trend';
import { PieChart } from 'react-minimal-pie-chart';

interface GenderData {
  title: string;
  value: number;
  color: string;
}

const SexChart: React.FC = () => {
  const [chartData, setChartData] = useState<GenderData[]>([]);

  const fetchData = async () => {
    try {
      const response = await getTrendPerson({ trendKwd: '원피스' });
      const apiData = response.data;

      const transformedData = apiData.genderStatisticResponseList
        ? apiData.genderStatisticResponseList.map(
            (item: { genderType: string; ratio: number }) => ({
              title: item.genderType,
              value: item.ratio,
              color: getDefaultColor(item.genderType),
            })
          )
        : [];

      setChartData(transformedData);
    } catch (error) {
      console.error('Error fetching trend person data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getDefaultColor = (genderType: string) => {
    switch (genderType) {
      case 'FEMALE':
        return '#D33B4D';
      case 'MALE':
        return '#81A5DA';
      default:
        return '#999999';
    }
  };

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <PieChart
        data={chartData}
        radius={30}
        lineWidth={48}
        label={({ dataEntry }) => `${Math.round(dataEntry.value ?? 0)}%`}
        labelPosition={80}
        labelStyle={{
          fontSize: '5px',
          fill: '#ffffff',
        }}
      />
    </div>
  );
};

export default SexChart;

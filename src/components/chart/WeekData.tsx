import React, { useEffect, useState } from 'react';
import { getTrendTime } from '../../api/trend';

interface WeekDataProps {
  onMaxRatioChange?: (day: string) => void;
}

const WeekData: React.FC<WeekDataProps> = ({ onMaxRatioChange = () => {} }) => {
  const [maxRatioDay, setMaxRatioDay] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await getTrendTime({ trendKwd: '원피스' });
      const apiData = response.data;

      const transformedData = apiData.dayOfWeekStatisticResponseList
        ? apiData.dayOfWeekStatisticResponseList.map(
            (item: { dayOfWeek: string; ratio: number }) => ({
              dayOfWeek: item.dayOfWeek,
              ratio: item.ratio,
            })
          )
        : [];

      const maxEntry = transformedData.reduce(
        (
          max: { dayOfWeek: string; ratio: number },
          entry: { dayOfWeek: string; ratio: number }
        ) => {
          return entry.ratio > max.ratio ? entry : max;
        },
        { dayOfWeek: '', ratio: 0 }
      );

      setMaxRatioDay(maxEntry.dayOfWeek);
      onMaxRatioChange(maxEntry.dayOfWeek);
    } catch (error) {
      console.error('Error fetching trend time data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{maxRatioDay}</div>;
};

export default WeekData;

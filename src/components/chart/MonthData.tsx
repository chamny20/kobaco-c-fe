import { useEffect, useState } from 'react';
import { getTrendTime } from '../../api/trend';

const MonthData = () => {
  const [maxRatioMonth, setMaxRatioMonth] = useState<string | null>(null);

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

      const maxRatioEntry = transformedData.reduce(
        (
          max: { month: string; ratio: number },
          entry: { month: string; ratio: number }
        ) => {
          return entry.ratio > max.ratio ? entry : max;
        },
        { month: '', ratio: 0 }
      );

      setMaxRatioMonth(maxRatioEntry.month);
    } catch (error) {
      console.error('트렌드 타임 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>{maxRatioMonth}</p>
    </>
  );
};

export default MonthData;

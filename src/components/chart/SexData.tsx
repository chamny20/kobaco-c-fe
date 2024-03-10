import React, { useEffect, useState } from 'react';
import { getTrendPerson } from '../../api/trend';

const SexData: React.FC = () => {
  const [maxValueTitle, setMaxValueTitle] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await getTrendPerson({ trendKwd: '원피스' });
      const apiData = response.data;

      const transformedData = apiData.genderStatisticResponseList
        ? apiData.genderStatisticResponseList.map(
            (item: { genderType: string; ratio: number }) => ({
              title: item.genderType,
              value: item.ratio,
            })
          )
        : [];

      const maxEntry = transformedData.reduce(
        (
          max: { title: string; value: number },
          entry: { title: string; value: number }
        ) => {
          return entry.value > max.value ? entry : max;
        },
        { title: '', value: 0 }
      );

      setMaxValueTitle(maxEntry.title);
    } catch (error) {
      console.error('Error fetching trend person data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>{maxValueTitle}</p>
    </div>
  );
};

export default SexData;

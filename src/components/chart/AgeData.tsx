import React, { useEffect, useState } from 'react';
import { getTrendPerson } from '../../api/trend';

const AgeData: React.FC = () => {
  const [maxUvName, setMaxUvName] = useState<string | null>(null);

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

      const maxUvEntry = transformedData.reduce(
        (
          max: { name: string; uv: number },
          entry: { name: string; uv: number }
        ) => {
          return entry.uv > max.uv ? entry : max;
        },
        { name: '', uv: 0 }
      );

      setMaxUvName(maxUvEntry.name);
    } catch (error) {
      console.error('Error fetching trend person data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>{maxUvName}</p>
    </div>
  );
};

export default AgeData;

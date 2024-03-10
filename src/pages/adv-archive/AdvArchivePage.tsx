import { useEffect, useState } from 'react';
import { AdvertisementList } from '../../components/advertisement-archive/AdvertisementList';
import { getAdvertisementList } from '../../api/advertisement';
import { AdvertiseItemProps } from '../../components/advertisement-archive/AdvertisementItem';
import { AdvSearchBanner } from './AdvSearchBanner';
import dayjs from 'dayjs';

export const AdvArchivePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortType, setSortType] = useState<string>('LATEST');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [kwdVal, setKwdVal] = useState<string>('');

  const [advData, setAdvData] = useState<AdvertiseItemProps[]>();

  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(
    dayjs('2024-02-01')
  );
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(
    dayjs('2024-02-29')
  );

  const formatDate = (date: dayjs.Dayjs): string => {
    return date.format('YYYY-MM-DD');
  };

  const [expressionQuery, setExpressionQuery] = useState<string[]>([]);
  const [moodQuery, setMoodQuery] = useState<string[]>([]);

  // console.log('moodQuery', moodQuery);
  // console.log('expressionQuery', expressionQuery);

  useEffect(() => {
    handleSearch();
  }, [startDate, endDate, moodQuery, expressionQuery, sortType]);

  const handleSearch = () => {
    const transformedExpressionQuery = expressionQuery.map((query) => {
      switch (query) {
        case '미소짓는':
          return 'SMILING';
        case '슬픈':
          return 'SAD';
        case '놀란':
          return 'SURPRISED';
        case '무표정':
          return 'EXPRESSIONLESS';
        case '화난':
          return 'ANGRY';
        case '찡그린':
          return 'FROWN';
        case '겁난':
          return 'SCARED';
        default:
          return query;
      }
    });

    getAdvertisementList({
      sortType: sortType,
      kwdVal: kwdVal,
      startDate: formatDate(startDate ?? dayjs('2024-02-01')),
      endDate: formatDate(endDate ?? dayjs('2024-02-29')),
      expressionType:
        transformedExpressionQuery.length > 0
          ? transformedExpressionQuery.join(',')
          : undefined,
      moodType: moodQuery.length > 0 ? moodQuery.join(',') : undefined,
    })
      .then((res) => {
        // console.log('res:', res);
        setAdvData(res.data.advertisementSimpleResponses);
      })
      .catch((err) => console.log('err:', err));
  };

  return (
    <>
      <AdvSearchBanner
        kwdVal={kwdVal}
        setKwdVal={setKwdVal}
        handleSearch={handleSearch}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setMoodQuery={setMoodQuery}
        setExpressionQuery={setExpressionQuery}
      />
      <AdvertisementList data={advData ?? []} setSortType={setSortType} />
    </>
  );
};

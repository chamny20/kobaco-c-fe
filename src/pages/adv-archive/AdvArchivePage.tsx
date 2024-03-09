import { useEffect, useState } from 'react';
import { AdvertisementList } from '../../components/advertisement-archive/AdvertisementList';
import { getAdvertisementList } from '../../api/advertisement';
import { AdvertiseItemProps } from '../../components/advertisement-archive/AdvertisementItem';
import { AdvSearchBanner } from './AdvSearchBanner';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
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

  useEffect(() => {
    handleSearch();
  }, [startDate, endDate]);

  const handleSearch = () => {
    getAdvertisementList({
      sortType: sortType,
      kwdVal: kwdVal,
      startDate: formatDate(startDate ?? dayjs('2024-02-01')),
      endDate: formatDate(endDate ?? dayjs('2024-02-29')),
    })
      .then((res) => {
        console.log('res:', res);
        setAdvData(res.data.advertisementSimpleResponses);
      })
      .catch((err) => console.log('err:', err));
  };

  return (
    <>
      <ScrollContainer>
        <AdvSearchBanner
          kwdVal={kwdVal}
          setKwdVal={setKwdVal}
          handleSearch={handleSearch}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </ScrollContainer>
      <ScrollContainer>
        <AdvertisementList data={advData ?? []} />
      </ScrollContainer>
    </>
  );
};

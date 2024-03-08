import { useEffect, useState } from 'react';
import { AdvertisementList } from '../../components/advertisement-archive/AdvertisementList';
import { getAdvertisementList } from '../../api/advertisement';
import { AdvertiseItemProps } from '../../components/advertisement-archive/AdvertisementItem';
import { AdvSearchBanner } from './AdvSearchBanner';

export const AdvArchivePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortType, setSortType] = useState<string>('LATEST');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [kwdVal, setKwdVal] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [startDate, setStartDate] = useState<string>('2024-02-01');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [endDate, setEndDate] = useState<string>('2024-02-29');

  const [advData, setAdvData] = useState<AdvertiseItemProps[]>();

  useEffect(() => {
    getAdvertisementList({
      sortType: sortType,
      kwdVal: kwdVal,
      startDate: startDate,
      endDate: endDate,
    })
      .then((res) => {
        console.log('res:', res);
        setAdvData(res.data.advertisementSimpleResponses);
      })
      .catch((err) => console.log('err:', err));
  }, []);

  return (
    <>
      {/* TODO : prop으로 sortType, kwdVal, startDate, endDate */}
      <AdvSearchBanner />
      <AdvertisementList data={advData ?? []} />
    </>
  );
};

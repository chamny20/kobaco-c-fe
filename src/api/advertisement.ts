import { api } from '.';
import { AdvertisementListType } from '../types/api';

export const getAdvertisementList = async ({
  sortType,
  startDate,
  endDate,
  kwdVal,
}: AdvertisementListType) => {
  const res = await api.get('/api/advertisement/list', {
    params: {
      sortType,
      startDate,
      endDate,
      kwdVal,
    },
  });
  return res;
};

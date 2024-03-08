import {
  AdvertisementList,
  dummyData,
} from '../../components/advertisement/AdvertisementList';

export const AdvArchivePage = () => {
  return (
    <>
      <div>상단 배너 검색 부분</div>
      <AdvertisementList data={dummyData} />
    </>
  );
};

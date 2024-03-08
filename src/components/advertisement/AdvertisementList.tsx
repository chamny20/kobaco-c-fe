import styled from 'styled-components';
import { AdvertiseItemProps, AdvertisementItem } from './AdvertisementItem';

export const dummyData = [
  {
    advertisementId: 1,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 2,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 3,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 4,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 5,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 6,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
];

export const AdvertisementList = ({ data }: { data: AdvertiseItemProps[] }) => {
  return (
    <AdvertisementListContainer>
      <div>sorting area</div>
      <ListWrapper>
        {data.map((item) => {
          return (
            <AdvertisementItem
              key={item.advertisementId}
              title={item.title}
              videoUrl={item.videoUrl}
              createdAt={item.createdAt}
              isArchived={item.isArchived}
              time={item.time}
            />
          );
        })}
      </ListWrapper>
    </AdvertisementListContainer>
  );
};

export const AdvertisementListContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  border: 1px solid green;
  margin: 0 auto;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 28px;
`;

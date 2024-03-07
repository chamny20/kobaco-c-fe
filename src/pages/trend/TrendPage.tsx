import { ScrollContainer } from '../../components/animation/ScrollContainer';
import { PopularItem } from './PopularItem';
import { SearchBanner } from './SearchBanner';

export const TrendPage = () => {
  return (
    <>
      <ScrollContainer>
        <SearchBanner />
      </ScrollContainer>
      <ScrollContainer>
        <PopularItem />
      </ScrollContainer>
    </>
  );
};

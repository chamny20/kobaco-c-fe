import styled from 'styled-components';
import { KeywordCompare } from './KeywordCompare';

export const SearchPage = () => {
  return (
    <SearchPageWrapper>
      <KeywordCompare />
    </SearchPageWrapper>
  );
};

export const SearchPageWrapper = styled.div`
  margin: 0 auto;
`;

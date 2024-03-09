import { useEffect, useState } from 'react';
import { AdvertisementList } from '../../components/advertisement-archive/AdvertisementList';
import { getScrappedAdvertisementList } from '../../api/advertisement';
import { Input } from '../../components/common-components/Input/Input';
import {
  SelectFilter,
  expressionCategory,
} from '../../components/common-components/SelectFilter/SelectFilter';
import styled from 'styled-components';

export const ScrapPage = () => {
  const [kwdVal, setKwdVal] = useState<string>('');
  const [moodType, setMoodType] = useState<string[]>();
  const [expressionType, setExpressionType] = useState<string[]>();

  const [advScrappedData, setAdvScrappedData] = useState();
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    getScrappedAdvertisementList({
      kwdVal,
      moodType,
      expressionType,
    })
      .then((res) => {
        // console.log('res:', res.data.archiveAdvertisementResponseList);
        setAdvScrappedData(res.data.archiveAdvertisementResponseList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrapPageWrapper>
      <div className="title">스크랩한 광고 검색</div>
      <div className="input-box">
        <Input
          placeholder="검색어를 입력해주세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="sm"
          style={{ width: '400px' }}
        />

        <FilterBox>
          <SelectFilter
            placeholder="표정 분석"
            filterData={expressionCategory}
          />
          <SelectFilter
            placeholder="영상 분위기 분석"
            filterData={expressionCategory}
          />
        </FilterBox>
      </div>
      <AdvertisementList data={advScrappedData ?? []} />
    </ScrapPageWrapper>
  );
};

export const ScrapPageWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 20px;
  margin: 0 auto;
  box-sizing: border-box;

  .title {
    color: ${(props) => props.theme.gray_01};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.48px;
    margin-bottom: 25px;
  }

  .input-box {
    display: flex;
    gap: 60px;
  }
`;

export const FilterBox = styled.div`
  width: 540px;
  gap: 22px;
  display: flex;
  align-items: center;
`;

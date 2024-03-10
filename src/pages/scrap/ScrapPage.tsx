import { useEffect, useState } from 'react';
import { AdvertisementList } from '../../components/advertisement-archive/AdvertisementList';
import { getScrappedAdvertisementList } from '../../api/advertisement';
import { Input } from '../../components/common-components/Input/Input';
import {
  SelectFilter,
  expressionCategory,
} from '../../components/common-components/SelectFilter/SelectFilter';
import styled from 'styled-components';
import { moodCategory } from '../../components/common-components/SelectFilter/MoodType';
import { BreadContainer } from '../adv-archive/AdvSearchBanner';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ScrapPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [kwdVal, setKwdVal] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [moodType, setMoodType] = useState<string[]>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [expressionType, setExpressionType] = useState<string[]>();

  const [advScrappedData, setAdvScrappedData] = useState();
  const [keyword, setKeyword] = useState<string>('');

  const [filterData, setFilterData] = useState(expressionCategory);
  const [moodData, setMoodData] = useState(moodCategory);
  const [expressionQuery, setExpressionQuery] = useState<string[]>([]);
  const [moodQuery, setMoodQuery] = useState<string[]>([]);

  const [sortType, setSortType] = useState<string>('LATEST');

  console.log(filterData, moodData, expressionQuery, moodQuery, sortType);
  console.log(setKwdVal, setMoodType, setExpressionType);

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
      <BreadContainer>
        <span className="first-black">광고 아카이브</span>
        <span className="arrow-red-icon">
          <ArrowForwardIosIcon />
        </span>
        <span className="third-red">스크랩한 광고</span>
      </BreadContainer>

      <div className="title">스크랩한 광고 검색</div>
      <div className="input-box">
        <Input
          placeholder="검색어를 입력해주세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="sm"
          style={{ width: '400px' }}
          onClick={() => console.log('')}
        />

        <FilterBox>
          <SelectFilter
            placeholder="표정 분석"
            filterData={expressionCategory}
            setFilterData={setFilterData}
            setQuery={setExpressionQuery}
          />
          <SelectFilter
            placeholder="영상 분위기 분석"
            filterData={expressionCategory}
            setFilterData={setMoodData}
            setQuery={setMoodQuery}
          />
        </FilterBox>
      </div>
      <AdvertisementList
        data={advScrappedData ?? []}
        setSortType={setSortType}
      />
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
    margin: 25px 0px;
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

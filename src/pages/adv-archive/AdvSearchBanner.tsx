import styled from 'styled-components';
import adv_bg from '../../assets/advertisement/adv_bg.png';
import { Input } from '../../components/common-components/Input/Input';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  SelectFilter,
  expressionCategory,
} from '../../components/common-components/SelectFilter/SelectFilter';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Dayjs } from 'dayjs';
import { moodCategory } from '../../components/common-components/SelectFilter/MoodType';
// import { moodCategory } from '../../components/common-components/SelectFilter/MoodType';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export type SearchProps = {
  kwdVal?: string;
  setKwdVal: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
  startDate: Dayjs | null; // startDate와 endDate의 타입을 Dayjs로 변경
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>; // setStartDate와 setEndDate의 타입도 Dayjs로 변경
  endDate: Dayjs | null;
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;

  //
  setExpressionQuery: Dispatch<SetStateAction<string[]>>;
  setMoodQuery: Dispatch<SetStateAction<string[]>>;
};

export const AdvSearchBanner = (props: SearchProps) => {
  const {
    kwdVal,
    setKwdVal,
    handleSearch,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setExpressionQuery,
    setMoodQuery,
  } = props;

  const [filterData, setFilterData] = useState(expressionCategory);
  const [moodData, setMoodData] = useState(moodCategory);

  return (
    <SearchBannerContainer>
      <Container>
        <BreadContainer>
          <span className="first-item">광고 아카이브</span>
          <span className="arrow-icon">
            <ArrowForwardIosIcon />
          </span>
          <span className="second-item">광고 분석</span>
        </BreadContainer>
        <div className="banner-title">
          <p>내가 만들 광고와 관련된</p>
          <p>참고 영상을 찾고 분석하고 싶다면?</p>
          <br />
          <br />
          <span>
            아이디어를 얻기 위해 아카이브에서 참고영상을 찾아보세요.
            <br /> 키워드만 입력하면 AI 객체 인식 기반으로 원하는 광고를 쉽고
            빠르게 찾아볼 수 있어요.
          </span>
        </div>
        <Input
          placeholder="찾고 싶은 키워드를 검색하세요."
          value={kwdVal ?? ''}
          onChange={(e) => setKwdVal(e.target.value)}
          size="lg"
          style={{ width: '76%' }}
          onClick={handleSearch}
        />
        <div className="input-wrapper">
          <div className="date-wrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']} sx={{ padding: '0' }}>
                <DatePicker
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    width: '30px',
                  }}
                  value={startDate}
                  onChange={(newVal) => setStartDate(newVal)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <p>~</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']} sx={{ padding: '0' }}>
                <DatePicker
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    width: '30px',
                  }}
                  value={endDate}
                  onChange={(newVal) => setEndDate(newVal)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="filter-container">
            <SelectFilter
              placeholder="표정 분석"
              filterData={filterData}
              setFilterData={setFilterData}
              setQuery={setExpressionQuery}
            />
            <SelectFilter
              placeholder="영상 분위기 분석"
              filterData={moodData}
              setFilterData={setMoodData}
              setQuery={setMoodQuery}
            />
          </div>
        </div>
      </Container>
    </SearchBannerContainer>
  );
};

export const SearchBannerContainer = styled.div`
  background-image: url(${adv_bg});
  background-size: cover;
  width: 100%;
  /* height: 573px; */
  padding: 50px 0px;
  /* padding-bottom: 40px; */
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  .input-wrapper {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-right: 160px;
    box-sizing: border-box;
    gap: 22px;
    /* max-width: 910px; */
    width: 100%;

    .date-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        color: white;
        font-weight: 700;
      }
    }

    .filter-container {
      width: 540px;
      gap: 22px;
      display: flex;
      align-items: center;
    }
  }

  .banner-title {
    margin-bottom: 50px;

    p {
      color: var(--White, #fff);
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      letter-spacing: -0.76px;
    }

    span {
      color: var(--White, #fff);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 180%;
      letter-spacing: -0.4px;
    }
  }
`;

export const BreadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  justify-content: flex-end;

  svg {
    font-size: 14px;
  }

  .first-item {
    color: var(--red-red-0430, #f2c4ca);
    cursor: pointer;
  }

  .first-black {
    color: var(--Gray-Gray_02, #7b7b7b);
  }

  .arrow-icon {
    color: white;
  }

  .arrow-black-icon {
    color: var(--Gray-Gray_02, #7b7b7b);
  }

  .arrow-red-icon {
    color: var(--red-red-0280, #dc6271);
  }

  .third-red {
    color: var(--red-red-0280, #dc6271);
  }

  .second-item {
    color: white;
    cursor: pointer;
  }

  .first-black-item {
    color: var(--Gray-Gray_02, #7b7b7b);
  }
`;

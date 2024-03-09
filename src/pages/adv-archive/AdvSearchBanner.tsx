import styled from 'styled-components';
import adv_bg from '../../assets/advertisement/adv_bg.png';
import { Input } from '../../components/common-components/Input/Input';
import { Dispatch, SetStateAction } from 'react';
import {
  SelectFilter,
  expressionCategory,
} from '../../components/common-components/SelectFilter/SelectFilter';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export type SearchProps = {
  kwdVal?: string;
  setKwdVal: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
};

export const AdvSearchBanner = (props: SearchProps) => {
  const { kwdVal, setKwdVal, handleSearch } = props;

  return (
    <SearchBannerContainer>
      <Container>
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
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="filter-container">
            <SelectFilter
              placeholder="표정 분석"
              filterData={expressionCategory}
            />
            <SelectFilter
              placeholder="영상 분위기 분석"
              filterData={expressionCategory}
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
  padding: 100px 0px;
  padding-bottom: 40px;
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

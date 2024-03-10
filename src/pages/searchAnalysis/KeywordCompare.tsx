import styled from 'styled-components';
import { Card } from '../../components/common-components/Card/Card';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Button from '../../components/common-components/Button/Button';

export const KeywordCompare = () => {
  const rankingKeyword = [
    { id: 1, value: '반팔 티셔츠' },
    { id: 2, value: '원피스' },
    { id: 3, value: '청바지' },
    { id: 4, value: '에코백' },
    { id: 5, value: '샌들' },
    { id: 6, value: '데님' },
    { id: 7, value: '워커' },
    { id: 8, value: '플랫슈즈' },
    { id: 9, value: '가디건' },
    { id: 10, value: '크롭야상' },
  ];

  const leftRanking = rankingKeyword.slice(0, 5);
  const rightRanking = rankingKeyword.slice(5);

  return (
    <Card
      title="기간별 연관 키워드 순위 비교"
      subTitle="최신 연관 키워드 순위와 원하는 기간의 순위를 볼 수 있습니다."
    >
      <CardItemBox>
        <CardItem>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker sx={{ width: '100%' }} />
            </DemoContainer>
          </LocalizationProvider>
          <div className="rank-data">
            {/* 왼쪽 순위 */}
            <div className="left-rank">
              {leftRanking.map((item) => (
                <div className="rank-item" key={item.id}>
                  <p>{item.id}.</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
            {/* 오른쪽 순위 */}
            <div className="right-rank">
              {rightRanking.map((item) => (
                <div className="rank-item" key={item.id}>
                  <p>{item.id}.</p>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </CardItem>
        <CardItem>
          <DateWrapper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker />
              </DemoContainer>
            </LocalizationProvider>
            <p>~</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker />
              </DemoContainer>
            </LocalizationProvider>
            <Button
              color="default"
              size="sm"
              style={{
                width: '14%',
                marginTop: '6px',
                height: '56px',
              }}
            >
              확인
            </Button>
          </DateWrapper>
          <div className="empty-box">기간을 설정해주세요.</div>
        </CardItem>
      </CardItemBox>
    </Card>
  );
};

export const CardItemBox = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 594px;
`;

export const CardItem = styled.div`
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: var(--White, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
  padding: 40px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .empty-box {
    width: 100%;
    height: 100%;
    height: 236px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 30px 10px 30px;
    box-sizing: border-box;
    color: ${(props) => props.theme.gray_03};
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
  }

  .rank-data {
    display: flex;
    justify-content: flex-start;
    gap: 100px;
    padding: 30px 30px 10px 30px;
    box-sizing: border-box;

    .left-rank {
      color: ${(props) => props.theme.gray_01};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.4px;
    }

    .right-rank {
      color: ${(props) => props.theme.gray_03};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.4px;
    }

    .left-rank,
    .right-rank {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .rank-item {
        display: flex;
        gap: 30px;
      }
    }
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-weight: 700;
  }
`;

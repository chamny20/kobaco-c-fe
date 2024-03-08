import { ResponsiveBullet } from '@nivo/bullet';
import styled from 'styled-components';

export const ExpressionBar = () => {
  return (
    <>
      <BarText>구간대 별로 제일 비중이 높은 표정을 요약했어요</BarText>
      <div
        style={{
          //   width: '800px',
          height: '110px',
        }}
      >
        <ResponsiveBullet
          data={[
            {
              id: '',
              ranges: [0, 5, 10, 15, 20, 25, 30],
              measures: [0],
            },
          ]}
          margin={{ top: 30, right: 7, bottom: 30, left: 3 }}
          spacing={46}
          titleAlign="start"
          titleOffsetX={-70}
          rangeColors={[
            '#85A8DF',
            '#85A8DF',
            '#F6E69D',
            '#F6E69D',
            '#F6E69D',
            '#F6E69D',
          ]}
        />
      </div>
    </>
  );
};

export const BarText = styled.div`
  color: ${(props) => props.theme.gray_02};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

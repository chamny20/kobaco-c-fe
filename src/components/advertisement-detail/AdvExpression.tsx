import styled from 'styled-components';
import { RowBox } from './AdvAnalysis';
import { useEffect, useState } from 'react';

export type ExpressionProps = {
  expressionList: expressionListType[];
  sectionList: sectionListType[];
};

export type expressionListType = {
  expression: string;
  percentage: number;
};

export type sectionListType = {
  expressionType: string;
  endTime: number;
  startTime: number;
};

export const AdvExpression = ({ data }: { data: ExpressionProps }) => {
  console.log('exdata:', data);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [expressionTag, setExpressionTag] = useState<string[]>(
    data?.expressionList.map((item) => item.expression)
  );

  const [highestPercentageExpression, setHighestPercentageExpression] =
    useState<string>('');

  useEffect(() => {
    if (data.expressionList.length > 0) {
      let highestPercentage = 0;
      let highestPercentageExpression = '';

      data.expressionList.forEach((item) => {
        if (item.percentage > highestPercentage) {
          highestPercentage = item.percentage;
          highestPercentageExpression = item.expression;
        }
      });

      setHighestPercentageExpression(highestPercentageExpression);
    }
  }, [data.expressionList]);

  console.log(highestPercentageExpression);

  return (
    <AdvExpressionContainer>
      <RowBox>
        <div className="an-title">표정 분석</div>
        <div className="an-content">
          {expressionTag.map((item, idx) => (
            <div key={idx}>#{item}</div>
          ))}
        </div>
      </RowBox>
      <p>
        이 광고에서는 <span>{highestPercentageExpression}</span> 표정이 제일
        많아요.
      </p>

      <div>이모지 그래픽</div>
      <div>차트</div>
    </AdvExpressionContainer>
  );
};

export const AdvExpressionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  p {
    margin-top: 5px;
    color: ${(props) => props.theme.gray_02};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;

    span {
      color: ${(props) => props.theme.red_01};
      font-weight: 600;
    }
  }

  .an-title {
    color: ${(props) => props.theme.gray_01};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%;
    letter-spacing: -0.32px;
  }

  .an-content {
    color: ${(props) => props.theme.red_01};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    //
    display: flex;
    gap: 13px;
  }
`;

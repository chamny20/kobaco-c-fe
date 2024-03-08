import styled from 'styled-components';
import { RowBox } from './AdvAnalysis';
import { useEffect, useState } from 'react';
import basic_ex from '../../assets/advertisement/ex_basic.png';
import smile_ex from '../../assets/advertisement/ex_smile.png';
import surp_ex from '../../assets/advertisement/ex_surprise.png';

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

  // 퍼센트를 담는 배열
  const [percentageArray, setPercentageArray] = useState<number[]>([]);

  // 가장 높은 퍼센트 순으로 정렬된 표정 배열
  const [sortedExpressions, setSortedExpressions] = useState<string[]>([]);

  useEffect(() => {
    if (data?.expressionList.length > 0) {
      // 퍼센트만 담는 배열 생성
      const percentages = data.expressionList.map((item) => item.percentage);
      setPercentageArray(percentages);

      // 퍼센트가 높은 순으로 표정 정렬
      const sortedExpressions = [...data.expressionList]
        .sort((a, b) => b.percentage - a.percentage)
        .map((item) => item.expression);
      setSortedExpressions(sortedExpressions);
    }
  }, [data?.expressionList]);

  console.log(sortedExpressions);
  console.log(percentageArray);

  const getEmoji = (expression: string) => {
    switch (expression) {
      case '미소짓는':
        return smile_ex;
      case '놀란':
        return surp_ex;
      case '무표정':
      default:
        return basic_ex;
    }
  };

  return (
    <AdvExpressionContainer>
      <RowBox>
        <div className="an-title">표정 분석</div>
        <div className="an-content">
          {expressionTag?.map((item, idx) => <div key={idx}>#{item}</div>)}
        </div>
      </RowBox>
      <p>
        이 광고에서는 <span>{sortedExpressions[0]}</span> 표정이 제일 많아요.
      </p>

      <EmojiWrapper>
        <div className="img-box">
          <div>
            <RankCircleSecond>2</RankCircleSecond>
            <img src={getEmoji(sortedExpressions[1])} alt=""></img>
            <div className="expression">{sortedExpressions[1]}</div>
            <div className="percent">{percentageArray[1]}%</div>
          </div>
          <div>
            <div style={{ position: 'relative' }}>
              <RankCircle>1</RankCircle>
              <img src={getEmoji(sortedExpressions[0])} alt="" />
            </div>
            <div className="expression">{sortedExpressions[0]}</div>
            <div className="percent">{percentageArray[0]}%</div>
          </div>
          <div>
            <RankCircleSecond>3</RankCircleSecond>
            <img src={getEmoji(sortedExpressions[2])} alt="" />
            <div className="expression">{sortedExpressions[2]}</div>
            <div className="percent">{percentageArray[2]}%</div>
          </div>
        </div>
      </EmojiWrapper>
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

export const EmojiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 95px;
  margin: 30px 0px;
  box-sizing: border-box;

  .img-box {
    border: 1px solid red;
    display: flex;
    align-items: center;
    gap: 95px;
    justify-content: center;
    width: 100%;
    text-align: center;

    img {
      object-fit: cover;
      margin-bottom: 20px;
    }

    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;

    .expression {
      color: ${(props) => props.theme.gray_01};
    }

    .percent {
      margin-top: 8px;
      box-sizing: border-box;
      color: ${(props) => props.theme.gray_02};
    }
  }
`;

export const RankCircle = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.gray_01};
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 10px;
`;

export const RankCircleSecond = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.gray_01};
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

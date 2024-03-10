import React from 'react';
import styled from 'styled-components';

interface MyComponentProps {}

export const Banner: React.FC<MyComponentProps> = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <InsideContainer>
          <StyledContent>
            <Title>검색 성향 분석 리포트</Title>
            <Description>
              키워드에 대한 대중의 성향을 분석해 드려요. 연령별, 성별 데이터와
              월별, 요일별 데이터를 통해 광고에 유리한 전략을 세워보세요.
            </Description>
          </StyledContent>
        </InsideContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: rgba(248, 248, 248, 0.97);
  width: 100vw;
  padding: 100px 0px;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const InsideContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #d33b4d;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const StyledContent = styled.div`
  color: white;
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 700;
  word-wrap: break-word;

  & > div {
    color: rgba(248, 248, 248, 0.97);
    font-size: 20px;
    font-family: 'Pretendard';
    font-weight: 500;
    word-wrap: break-word;
  }
`;

const Title = styled.div`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  word-wrap: break-word;
`;

const Description = styled.div`
  color: rgba(0, 0, 0, 0.97);
  font-size: 20px;
  font-weight: 500;
  word-wrap: break-word;
`;

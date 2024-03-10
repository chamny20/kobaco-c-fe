import React from 'react';
import styled from 'styled-components';
import youtube from '../../assets/chart/youtube.png';

interface MyComponentProps {}

const StyledContainer = styled.div`
  background: rgba(248, 248, 248, 0.97);
  width: 100%;
  padding-top: 50px;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const InsideContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  box-sizing: border-box;
  background: #d33b4d;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 9px;
`;

const Title = styled.div`
  color: white;
  font-size: 24px;
  font-family: 'Pretendard';
  font-weight: 700;
  word-wrap: break-word;
`;

const Description = styled.div`
  color: rgba(248, 248, 248, 0.97);
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 500;
  word-wrap: break-word;
`;

export const YoutubeBanner: React.FC<MyComponentProps> = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <InsideContainer>
          <StyledContent>
            <Image src={youtube} />

            <TextContainer>
              <Title>유튜브 기반 SNS 트렌드</Title>
              <Description>
                검색한 키워드에 대한 SNS 게시글을 분석해드려요. 해시태그 데이터,
                콘텐츠 아카이브를 통해 광고에 유리한 전략을 세워보세요.
              </Description>
            </TextContainer>
          </StyledContent>
        </InsideContainer>
      </InnerContainer>
    </StyledContainer>
  );
};

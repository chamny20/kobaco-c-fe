import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import { YoutubeItem } from './YoutubeItem';

const dum = [
  {
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195222248_01.jpg',
    title: '10년 이상 입을 고퀄 원피스 소개',
    publisher: '블리티비',
  },
  {
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195222248_02.jpg',
    title: '[vlog] 원피스 입고 데이트',
    publisher: '단이 dani',
  },
  {
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195222248_03.jpg',
    title: '상견례 룩 갓성비 30개 추천합니다',
    publisher: '박실장의 패션쇼',
  },
  {
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195222248_04.jpg',
    title: '세상에 싸고 예쁜 옷이 있을까? 결혼식룩',
    publisher: '옆집언니 김팀장',
  },
];

export const YoutubeArchive = () => {
  return (
    <Card title="유튜브 콘텐츠 아카이브">
      <ContentsWrapper>
        <LengthTitle>총 {dum.length}개의 콘텐츠</LengthTitle>
        <YoutubeGridWrapper>
          {dum.map((item, idx) => {
            return (
              <YoutubeItem
                key={idx}
                title={item.title}
                publisher={item.publisher}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </YoutubeGridWrapper>
      </ContentsWrapper>
    </Card>
  );
};

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const YoutubeGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
`;

export const LengthTitle = styled.div`
  padding-bottom: 50px;
  color: ${(props) => props.theme.gray_01};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
`;

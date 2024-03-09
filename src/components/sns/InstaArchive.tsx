import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import { InstaItem } from './InstaItem';

const dummy = [
  {
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929.jpg',
    title: '성수에서 데이트~',
    tags: ['원피스', '데이트룩', '오빠랑', '성수핫플'],
    like: 132,
  },
  {
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_01.jpg',
    title: '오랜만에 친구들이랑 놀러왔다',
    tags: ['연남맛집', '원피스', '맛집투어'],
    like: 34,
  },
  {
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_02.jpg',
    title: '홍대에서 데이트',
    tags: ['원피스', '데이트룩', '파묘', '여친룩'],
    like: 2323,
  },
];

export const InstaArchive = () => {
  return (
    <Card
      title="인스타그램 콘텐츠 아카이브"
      subTitle="* 2022년 11월 이후 수집한 인스타그램 콘텐츠 중 검색 키워드를 포함하는 콘텐츠입니다."
    >
      <ContentsWrapper>
        <LengthTitle>총 123개의 콘텐츠</LengthTitle>
        <InstaGridWrapper>
          {dummy.map((item, idx) => {
            return (
              <InstaItem
                key={idx}
                title={item.title}
                tags={item.tags}
                like={item.like}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </InstaGridWrapper>
      </ContentsWrapper>
    </Card>
  );
};

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const InstaGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

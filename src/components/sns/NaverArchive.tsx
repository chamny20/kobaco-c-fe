import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import { NaverItem } from './NaverItem';

const dummyData = [
  {
    postType: '네이버 블로그',
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_01.jpg',
    title: '닥스 레이디스 여성 24SS 봄 트렌치코트',
    content:
      '봄 원피스부터 시작해 트렌치코트 등 그 종류도 생각보다 다양하게 출시가 되었더라고요. 특히나 창의적인 모던함은 물론 클래식한 분위기를 느낄 수 있는 닥스만의 컬러와 모던한 패턴 같은 경우 특유의 감각적인 느낌을 받을 수 있습니다.',
  },
  {
    postType: '네이버 뉴스',
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_02.jpg',
    title:
      '산다라박, 파리에서 센스 만점 비율 천재! 키 커 보이는 머메이드 원피스룩',
    content:
      '머메이드 원피스룩으로 센스 만점 비율 천재 모습을 뽐냈다. 산다라박은 2일 자신의 채널에 “PFW 2024 vetements”이라는 글과 함께 베트멍 2024 F/W 파리패션위크 관련 사진을 게재했다. 공개한 사진에서 산다라박은 키가 커 보이는 화이트 라인 트위드자켓을 입고 있다.',
  },
  {
    postType: '네이버 블로그',
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_03.jpg',
    title: '24FW 서울패션위크, 디자이너브랜드 얼킨 & 뉴진스 민지 원피스',
    content:
      '한국을 대표하는 패션브랜드 얼킨 패션쇼 & 서울패션위크 화보 속 뉴진스 민지 원피스 정보! 서울패션쇼 2024. 02. 03. 오후 6시 @DDP 꺄아! 서울패션위크 개막이... 특히 언밸런스하게',
  },
  {
    postType: '네이버 블로그',
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_04.jpg',
    title: '트위드원피스 추천) 듀엘 내돈내산',
    content:
      '아나운서원피스, 쇼호스트원피스가 궁금하셨던 분들에게 도움이 되길 바랍니다. 아! 그리고 그냥 제품 실제 사진이 궁금하셨던 분들도 참고하셔요ㅎㅎ 저도 가끔 브랜드 홈페이지에 올라온 사진으로는 감이 오지 않더라고요.',
  },
  {
    postType: '네이버 뉴스',
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_05.jpg',
    title: "여성의류 주줌, '봄 원피스' 신상 출시",
    content:
      '여성의류 브랜드 주줌이 감성 담은 봄 원피스 등 신상 의류 컬렉션을 선보였다. 야외 활동이 늘어나는 계절적 특성을 반영한 주줌의 이번 신상품 컬렉션은 30~50대의 다양한 연령층이 취향 대로 믹스매치 할 수 있도록 구성되었으며 베이직한 아이템부터 고급 아이템까지 다양하다',
  },
  {
    postType: '네이버 블로그',
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_06.jpg',
    title: '마쥬 플라워 원피스 사이즈',
    content:
      '얼른 봄이 오기를 기다리며 마쥬 원피스 폭풍 쇼핑! 페미닌하면서도 대담한 룩들로 많은 여성 분들에게 사랑받는 곳이죠. 현재 미국 공식홈페이지에서 최대 50% 세일에 추가 20% 할인 중입니다.',
  },
  {
    postType: '네이버 블로그',
    imageUrl:
      'https://kobaco2.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20240309_195142929_07.jpg',
    title: '셀프포트레이트 원피스 가디건 직구 - 세타이어 세일',
    content:
      '최근 글로벌 원피스 패션 시장에서 폭발적인 인기를 끌고 있는 브랜드가 있어요. 바로 영국 런던의 컨템퍼러리 브랜드 셀프포트레이트입니다. 페미닌하고 럭셔리한 디자인과 파워 메시, 리본, 트위드 소재 등을 이용했습니다.',
  },
];

export const NaverArchive = () => {
  return (
    <Card
      title="인스타그램 콘텐츠 아카이브"
      subTitle="* 2022년 11월 이후 수집한 인스타그램 콘텐츠 중 검색 키워드를 포함하는 콘텐츠입니다."
    >
      <ItemWrapper>
        {dummyData.map((item, idx) => {
          return (
            <NaverItem
              key={idx}
              postType={item.postType}
              title={item.title}
              imageUrl={item.imageUrl}
              content={item.content}
            />
          );
        })}
      </ItemWrapper>
    </Card>
  );
};

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

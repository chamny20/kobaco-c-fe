import styled from 'styled-components';
import trend_back from '../../assets/trend/trend_banner.png';
import { Input } from '../../components/common-components/Input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const SearchBanner = () => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search-chart?keyword=${keyword}`);
  };

  return (
    <SearchBannerContainer>
      <Container>
        <div className="banner-title">
          <p>내가 분석하고 싶은 타겟이</p>
          <p>어떤 트렌드를 갖고 있는지 궁금하다면?</p>
          <br />
          <br />
          <span>
            시장조사는 광고 홍보 단계 전 필수 단계입니다. <br />
            소비자들에게 현재 인기 있는 아이템을 알 수 있고, 타겟 그룹이 갖고
            있는 검색 성향을 분석할 수 있습니다.
          </span>
        </div>
        <Input
          placeholder="찾고 싶은 키워드를 검색하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="lg"
          style={{ width: '70%' }}
          onClick={handleSearch}
        />
      </Container>
    </SearchBannerContainer>
  );
};

export const SearchBannerContainer = styled.div`
  background-image: url(${trend_back});
  background-size: cover;
  width: 100vw;
  height: 544px;
  padding: 100px 0px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

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

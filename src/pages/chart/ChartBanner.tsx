import styled from 'styled-components';
import trend_back from '../../assets/trend/trend_banner.png';
import { Input } from '../../components/common-components/Input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const ChartBanner = () => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search-chart?keyword=${keyword}`);
  };

  return (
    <ChartBannerContainer>
      <Container>
        <div className="banner-title">
          <p>"원피스" 트렌드 분석 결과</p>
          <br />
          <span>
            키워드 "원피스"에 대한 트렌드 분석입니다 <br />
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
    </ChartBannerContainer>
  );
};

export const ChartBannerContainer = styled.div`
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

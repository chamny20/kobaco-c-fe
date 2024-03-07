import styled from 'styled-components';
import { Coupang } from '../../components/TrendItem/Coupang';
import { Naver } from '../../components/TrendItem/Naver';

export const PopularItem = () => {
  return (
    <PopularItemContainer>
      <Container>
        <div className="title-box">
          <p>현재 인기 있는 아이템</p>
          <span>
            국내 TOP 2 쇼핑몰의 현황을 분석해 드려요. 인기있는 아이템, 검색어로
            현재 소비자 동향을 파악해 보세요.
          </span>
        </div>
        <div className="card-box">
          <Coupang />
          <Naver />
        </div>
      </Container>
    </PopularItemContainer>
  );
};

export const PopularItemContainer = styled.div`
  background: rgba(248, 248, 248, 0.97);
  width: 100vw;
  /* height: 1036px; */
  padding: 100px 0px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  .title-box {
    text-align: left;
    margin-bottom: 50px;

    p {
      color: ${(props) => props.theme.gray_01};
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.64px;
      margin-bottom: 20px;
    }

    span {
      color: ${(props) => props.theme.gray_02};
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.48px;
    }
  }

  .card-box {
    display: flex;
    gap: 30px;
    height: 100%;
  }
`;

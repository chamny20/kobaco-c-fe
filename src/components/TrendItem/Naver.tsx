import styled from 'styled-components';
import logo from '../../assets/trend/naver.png';
import Carousel from './Carousel';

export const Naver = () => {
  return (
    <BasicCardContainer>
      <div className="item-title">
        <img src={logo} alt="" />
        <div>
          <p>네이버 쇼핑</p>
          <span>월간 인기 검색어</span>
        </div>
      </div>
      <CarouselWrapper>
        <Carousel />
      </CarouselWrapper>
    </BasicCardContainer>
  );
};

export const BasicCardContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  /* align-items: flex-start; */
  /* align-self: stretch; */
  width: 100%;
  max-width: 967px;
  gap: 30px;
  //
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);

  .item-title {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      color: ${(props) => props.theme.gray_01};
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.48px;
      margin-bottom: 6px;
    }

    span {
      color: ${(props) => props.theme.gray_01};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  margin: 0 auto;
`;

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 캐러셀 화살표
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { RankCard } from './RankCard';
import { RankDataContainer } from './Coupang';
import styled from 'styled-components';

const PrevArrow = ({ onClick }: any) => {
  return (
    <ArrowBackIosNewRoundedIcon
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '210px',
        left: '-50px',
        fill: '#E6E6E6',
        cursor: 'pointer',
      }}
      fontSize="large"
    />
  );
};

const NextArrow = ({ onClick }: any) => {
  return (
    <ArrowForwardIosRoundedIcon
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '210px',
        right: '-50px',
        fill: '#E6E6E6',
        cursor: 'pointer',
      }}
      fontSize="large"
    />
  );
};

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: false,
  autoplaySpeed: 5000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Carousel = () => {
  const monthData = [
    {
      date: '2024년 2월',
      data: [
        { id: 1, value: '부츠' },
        { id: 2, value: '목도리' },
        { id: 3, value: '핸드크림' },
        { id: 4, value: '핸드워머' },
        { id: 5, value: '장갑' },
        { id: 6, value: '바라클라바' },
        { id: 7, value: '캡모자' },
        { id: 8, value: '원피스' },
        { id: 9, value: '양말' },
        { id: 10, value: '치마' },
      ],
    },
    {
      date: '2024년 1월',
      data: [
        { id: 1, value: '부츠' },
        { id: 2, value: '핸드크림' },
        { id: 3, value: '핸드워머' },
        { id: 4, value: '목도리' },
        { id: 5, value: '장갑' },
        { id: 6, value: '캡모자' },
        { id: 7, value: '양말' },
        { id: 8, value: '원피스' },
        { id: 9, value: '치마' },
        { id: 10, value: '바라클라바' },
      ],
    },
    {
      date: '2023년 12월',
      data: [
        { id: 1, value: '핸드크림' },
        { id: 2, value: '목도리' },
        { id: 3, value: '부츠' },
        { id: 4, value: '장갑' },
        { id: 5, value: '양말' },
        { id: 6, value: '바라클라바' },
        { id: 7, value: '수면양말' },
        { id: 8, value: '원피스' },
        { id: 9, value: '청바지' },
        { id: 10, value: '슬랙스' },
      ],
    },
    {
      date: '2023년 11월',
      data: [
        { id: 1, value: '목도리' },
        { id: 2, value: '장갑' },
        { id: 3, value: '양말' },
        { id: 4, value: '수면양말' },
        { id: 5, value: '바라클라바' },
        { id: 6, value: '청바지' },
        { id: 7, value: '원피스' },
        { id: 8, value: '슬랙스' },
        { id: 9, value: '부츠' },
        { id: 10, value: '청바지' },
      ],
    },
    {
      date: '2023년 10월',
      data: [
        { id: 1, value: '양말' },
        { id: 2, value: '수면양말' },
        { id: 3, value: '청바지' },
        { id: 4, value: '원피스' },
        { id: 5, value: '슬랙스' },
        { id: 6, value: '부츠' },
        { id: 7, value: '청바지' },
        { id: 8, value: '장갑' },
        { id: 9, value: '목도리' },
        { id: 10, value: '바라클라바' },
      ],
    },
    {
      date: '2023년 9월',
      data: [
        { id: 1, value: '원피스' },
        { id: 2, value: '코트' },
        { id: 3, value: '청바지' },
        { id: 4, value: '장갑' },
        { id: 5, value: '양말' },
        { id: 6, value: '슬랙스' },
        { id: 7, value: '장갑' },
        { id: 8, value: '목도리' },
        { id: 9, value: '부츠' },
        { id: 10, value: '구두' },
      ],
    },
    {
      date: '2023년 8월',
      data: [
        { id: 1, value: '원피스' },
        { id: 2, value: '양말' },
        { id: 3, value: '반팔티셔츠' },
        { id: 4, value: '장갑' },
        { id: 5, value: '속옷' },
        { id: 6, value: '쿨토시' },
        { id: 7, value: '구두' },
        { id: 8, value: '샌들' },
        { id: 9, value: '쪼리' },
        { id: 10, value: '슬리퍼' },
      ],
    },
    {
      date: '2023년 7월',
      data: [
        { id: 1, value: '양말' },
        { id: 2, value: '반팔티셔츠' },
        { id: 3, value: '원피스' },
        { id: 4, value: '속옷' },
        { id: 5, value: '쿨토시' },
        { id: 6, value: '샌들' },
        { id: 7, value: '쪼리' },
        { id: 8, value: '구두' },
        { id: 9, value: '슬리퍼' },
        { id: 10, value: '장갑' },
      ],
    },
  ];

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {monthData.map((item, idx) => {
          return (
            <RankCard key={idx}>
              <RankDataContainer>
                <StyledDate>{item.date}</StyledDate>
                <div className="rank-box">
                  {item.data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="rank-item"
                        style={
                          item.id === 1
                            ? { color: '#d33b4d', fontWeight: '700' }
                            : item.id < 4
                              ? { color: '#373D49', fontWeight: '700' }
                              : { color: '#909090', fontWeight: '500' }
                        }
                      >
                        <span>{item.id}</span>
                        <span>{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              </RankDataContainer>
            </RankCard>
          );
        })}
      </StyledSlider>
    </CarouselContainer>
  );
};

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 810px;
  height: 100%;
`;

export const StyledSlider = styled(Slider)`
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-left: -20px;
  margin-right: -20px;
`;

export const StyledDate = styled.div`
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: #fff;
  display: flex;
  height: 54px;
  padding: 10px 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  margin-bottom: 30px;

  // font
  color: ${(props) => props.theme.gray_01};
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;
export default Carousel;

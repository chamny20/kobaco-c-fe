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
      date: '2023년 1월',
      data: [
        { id: 1, value: '1월 티셔츠' },
        { id: 2, value: '22 티셔츠' },
        { id: 3, value: 'ㄴㄴㅇ 티셔츠' },
        { id: 4, value: 'ㄴㄴ 티셔츠' },
        { id: 5, value: 'ㅁㅁ 티셔츠' },
        { id: 6, value: 'ㅍ 티셔츠' },
        { id: 7, value: '2 티셔츠' },
        { id: 8, value: 'ㄴㅇㄹ 티셔츠' },
        { id: 9, value: 'ㅁㅋ 티셔츠' },
        { id: 10, value: 'ㅌㅌ 티셔츠' },
      ],
    },
    {
      date: '2023년 2월',
      data: [
        { id: 1, value: '2월 티셔츠' },
        { id: 2, value: '22 티셔츠' },
        { id: 3, value: 'ㄴㄴㅇ 티셔츠' },
        { id: 4, value: 'ㄴㄴ 티셔츠' },
        { id: 5, value: 'ㅁㅁ 티셔츠' },
        { id: 6, value: 'ㅍ 티셔츠' },
        { id: 7, value: '2 티셔츠' },
        { id: 8, value: 'ㄴㅇㄹ 티셔츠' },
        { id: 9, value: 'ㅁㅋ 티셔츠' },
        { id: 10, value: 'ㅌㅌ 티셔츠' },
      ],
    },
    {
      date: '2023년 3월',
      data: [
        { id: 1, value: '2월 티셔츠' },
        { id: 2, value: '22 티셔츠' },
        { id: 3, value: 'ㄴㄴㅇ 티셔츠' },
        { id: 4, value: 'ㄴㄴ 티셔츠' },
        { id: 5, value: 'ㅁㅁ 티셔츠' },
        { id: 6, value: 'ㅍ 티셔츠' },
        { id: 7, value: '2 티셔츠' },
        { id: 8, value: 'ㄴㅇㄹ 티셔츠' },
        { id: 9, value: 'ㅁㅋ 티셔츠' },
        { id: 10, value: 'ㅌㅌ 티셔츠' },
      ],
    },
    {
      date: '2023년 4월',
      data: [
        { id: 1, value: '2월 티셔츠' },
        { id: 2, value: '22 티셔츠' },
        { id: 3, value: 'ㄴㄴㅇ 티셔츠' },
        { id: 4, value: 'ㄴㄴ 티셔츠' },
        { id: 5, value: 'ㅁㅁ 티셔츠' },
        { id: 6, value: 'ㅍ 티셔츠' },
        { id: 7, value: '2 티셔츠' },
        { id: 8, value: 'ㄴㅇㄹ 티셔츠' },
        { id: 9, value: 'ㅁㅋ 티셔츠' },
        { id: 10, value: 'ㅌㅌ 티셔츠' },
      ],
    },
    {
      date: '2023년 5월',
      data: [
        { id: 1, value: '2월 티셔츠' },
        { id: 2, value: '22 티셔츠' },
        { id: 3, value: 'ㄴㄴㅇ 티셔츠' },
        { id: 4, value: 'ㄴㄴ 티셔츠' },
        { id: 5, value: 'ㅁㅁ 티셔츠' },
        { id: 6, value: 'ㅍ 티셔츠' },
        { id: 7, value: '2 티셔츠' },
        { id: 8, value: 'ㄴㅇㄹ 티셔츠' },
        { id: 9, value: 'ㅁㅋ 티셔츠' },
        { id: 10, value: 'ㅌㅌ 티셔츠' },
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
  max-width: 800px;
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
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
`;
export default Carousel;

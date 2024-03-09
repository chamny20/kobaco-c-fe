import styled from 'styled-components';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import trendImg from '../../assets/landing/trend.png';
import archiveImg from '../../assets/landing/archive.png';
import videoImg from '../../assets/landing/video.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const ThirdView = () => {
  const stepItems = [
    {
      title: '트렌드 분석',
      img: trendImg,
      subtitle: '트렌드를 알아보고\n 유행하는 키워드를 탐색해요!',
    },
    {
      title: '광고 아카이브',
      img: archiveImg,
      subtitle: `다양한 광고 레퍼런스를 찾아보세요!\n 표정, 영상 분위기 분석을 제공해요!`,
    },
    {
      title: '광고 만들기',
      img: videoImg,
      subtitle:
        '이제 직접 만들어봐야겠죠?\n 코바코만의 ai 기술로 쉽게 만들어요!',
    },
  ];
  return (
    <ViewContainer>
      <ScrollContainer>
        <div className="content">
          <div className="title">아이작 이용 방법</div>
          <div className="sub-title">
            광고 제작의 순서대로 필요한 모든 것을 준비했어요. 필요하신 것을 찾아
            이용해보세요!
          </div>

          <div className="step-box">
            {stepItems.map((item, idx) => {
              return (
                <>
                  <div className="step-item" key={idx}>
                    <img src={item.img} alt="" />
                    <div>
                      <p>{item.title}</p>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                  <div className="step-icon">
                    {idx < 2 && (
                      <NavigateNextIcon style={{ fontSize: '48px' }} />
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </ScrollContainer>
    </ViewContainer>
  );
};

export const ViewContainer = styled.div`
  width: 100vw;
  height: 889px;
  padding: 150px 0px;
  box-sizing: border-box;
  background: #f8f9fa;

  .content {
    max-width: 1300px;
    /* width:100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      color: ${(props) => props.theme.gray_01};
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1.5px;
      margin-bottom: 20px;
    }

    .sub-title {
      color: ${(props) => props.theme.gray_03};
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }

    .step-box {
      display: flex;
      margin-top: 50px;
      box-sizing: border-box;
      max-width: 1300px;
      width: 100%;

      .step-icon {
        display: flex;
        align-items: center;
      }

      .step-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 40px;

        img {
          max-width: 200px;
          max-height: 200px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        p {
          color: ${(props) => props.theme.gray_01};
          text-align: center;
          font-size: 38px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.76px;
          margin-bottom: 12px;
        }

        span {
          color: ${(props) => props.theme.gray_04};
          text-align: center;
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          letter-spacing: -0.6px;
          white-space: pre-wrap;
        }
      }
    }
  }
`;

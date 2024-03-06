import styled from 'styled-components';
import { ScrollContainer } from '../../components/animation/ScrollContainer';

export const ThirdView = () => {
  const stepItems = [
    {
      title: '트렌드 분석',
      img: '',
      subtitle: '트렌드를 알아보고 유행하는 키워드를 탐색해요!',
    },
    {
      title: '광고 아카이브',
      img: '',
      subtitle:
        '다양한 광고 레퍼런스를 찾아보세요! 표정, 영상 분위기 분석을 제공해요!',
    },
    {
      title: '광고 만들기',
      img: '',
      subtitle: '이제 직접 만들어봐야겠죠? 코바코만의 ai 기술로 쉽게 만들어요!',
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
                <div className="step-item" key={idx}>
                  <div>{item.img}</div>
                  <div>
                    <p>{item.title}</p>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
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
  border: 1px solid black;
  padding: 150px 0px;
  box-sizing: border-box;

  .content {
    max-width: 1300px;
    /* width:100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      color: ${(props) => props.theme.gray_01};
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1.5px;
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

      .step-item {
        display: flex;
        flex-direction: column;
        gap: 40px;

        p {
          //title
        }

        span {
          /* subtitle */
        }
      }
    }
  }
`;

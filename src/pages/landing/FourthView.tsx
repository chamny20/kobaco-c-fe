import styled from 'styled-components';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import FullTab from '../../components/common-components/FullTab';
import trend1 from '../../assets/landing/trend1.png';
import trend2 from '../../assets/landing/trend2.png';
import arc1 from '../../assets/landing/arc1.png';
import arc2 from '../../assets/landing/arc2.png';
import arc3 from '../../assets/landing/arc3.png';
import adv1 from '../../assets/landing/adv1.png';
import adv2 from '../../assets/landing/adv2.png';

export const FourthView = () => {
  const tabs = [
    {
      label: '트렌드 분석',
      content: (
        <TabItem>
          <img src={trend1} alt="" />
          <img src={trend2} alt="" />
        </TabItem>
      ),
    },
    {
      label: '광고 아카이브',
      content: (
        <TabItem>
          <img src={arc1} alt="" />
          <img src={arc2} alt="" />
          <img src={arc3} alt="" />
        </TabItem>
      ),
    },
    {
      label: '광고 만들기',
      content: (
        <TabItem>
          <img src={adv1} alt="" />
          <img src={adv2} alt="" />
        </TabItem>
      ),
    },
  ];

  return (
    <ViewContainer>
      <ScrollContainer>
        <div className="content">
          <div className="title-box">
            <div className="title">기능 돋보기</div>
            <div className="sub-title">
              아이작이 제공하는 서비스를 자세히 살펴볼까요?
            </div>
          </div>
          <FullTab tabs={tabs} />
        </div>
      </ScrollContainer>
    </ViewContainer>
  );
};

export const ViewContainer = styled.div`
  width: 100vw;
  height: 1418px;
  padding: 200px 0px;
  box-sizing: border-box;

  .content {
    max-width: 1360px;
    /* width:100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;

    .title-box {
      text-align: center;
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
    }
  }
`;

export const TabItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 60px;

  img {
    object-fit: cover;
  }
`;

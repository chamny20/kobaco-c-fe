import styled from 'styled-components';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import back_img from '../../assets/landing/view2_img.png';

export const SecondView = () => {
  return (
    <ViewContainer>
      <ScrollContainer>
        <div className="content">
          <img src={back_img} alt="" />
          <div className="view-text">
            <div>
              <span>Al analysis System for AD Creation</span>
              <p>코바코, 아이작이란?</p>
            </div>

            <div>
              AiSAC은 광고분야 AI 공공서비스의 대중화를 위해 기획되었습니다.
              KOBACO 방송광고소재전송시스템(KODEX)에 축적된 광고영상에 딥러닝
              영상인식기술을 접목하여, 영상 속 객체정보를 추출하고 그 결과물을
              본 서비스를 통해 대국민 개방합니다.
            </div>
          </div>
        </div>
      </ScrollContainer>
    </ViewContainer>
  );
};

export const ViewContainer = styled.div`
  width: 100vw;
  height: 806px;
  background-color: white;
  padding: 200px 0px;
  box-sizing: border-box;

  .content {
    max-width: 1300px;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    gap: 10px;

    img {
      margin-right: 54px;
    }

    .view-text {
      display: flex;
      flex-direction: column;
      gap: 70px;

      div {
        color: ${(props) => props.theme.gray_02};
        font-size: 29px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%;
        letter-spacing: -0.6px;

        span {
          color: ${(props) => props.theme.red_02};
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.9px;
        }

        p {
          font-size: 60px;
          color: ${(props) => props.theme.gray_01};
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -1.8px;
        }
      }
    }
  }
`;

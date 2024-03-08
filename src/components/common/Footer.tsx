import styled from 'styled-components';
import footer1 from '../../assets/footer1.png';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="footer-side">
          <img src={footer1} alt="" />
          <div className="left-text">
            <p>주소: 서울시 중구 세종대로 124</p>
            <p>담당부서: 지능 정보 사업팀</p>
            <p>02)731-7350</p>
            <p>이용문의: 카카오톡 kobaco AiSAC</p>
          </div>
        </div>
        <div className="footer-side">
          <div className="footer-descript">
            <p className="descript-text">AiSAC이란?</p>
            <p>|</p>
            <p className="descript-text">서비스 이용약관</p>
            <p>|</p>
            <p className="descript-text">개인정보 처리방침</p>
            <p>|</p>
            <p className="descript-text">이메일 무단수집 거부</p>
          </div>
          <div className="copyright">
            <p>
              Copyright(C) Korea Broadcast Advertising Corp.
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.gray_05};
  padding: 80px 0px;
  box-sizing: border-box;
  height: 350px;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;

  .footer-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .footer-descript {
      display: flex;
      gap: 20px;

      .descript-text {
        cursor: pointer;
      }

      p {
        color: ${(props) => props.theme.gray_01};
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.28px;
      }
    }

    .copyright p {
      color: ${(props) => props.theme.gray_02};
      text-align: right;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    .left-text {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.gray_02};
    }
  }
`;

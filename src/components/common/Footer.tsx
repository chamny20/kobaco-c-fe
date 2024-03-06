import styled from 'styled-components';
import footer1 from '../../assets/footer1.png';

const StyledFooter = styled.div`
  width: 100%;
  background: #e6e6e6;
  position: absolute;
  bottom: 0;

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .background {
    width: 100%;
    height: 350px;
    position: absolute;
    left: 0;
    top: 0;
    background: #e6e6e6;
  }

  .address,
  .copyright,
  .navigation,
  .footerImage {
    max-width: 100%;
  }

  .address {
    left: 5%;
    top: 181px;
    position: absolute;
    color: #7b7b7b;
    font-size: 14px;
    font-family: 'Pretendard';
    font-weight: 400;
    white-space: pre-line;
    word-wrap: break-word;
    max-width: 50%;
    width: 100%;
    text-align: left;
  }

  .copyright {
    left: 71%;
    top: 231px;
    position: absolute;
    text-align: right;
    color: #7b7b7b;
    font-size: 14px;
    font-family: 'Pretendard';
    font-weight: 400;
    white-space: pre-line;
    word-wrap: break-word;
    max-width: 100%;
    width: 17%;
  }

  .navigation {
    left: 60%;
    top: 69px;
    position: absolute;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    display: inline-flex;

    div {
      color: #373d49;
      font-size: 14px;
      font-family: 'Pretendard';
      font-weight: 500;
      word-wrap: break-word;
    }

    .divider {
      width: 0;
      height: 13.5px;
      border: 1px #7b7b7b solid;
    }
  }

  .footerImage {
    width: 350px;
    height: 61px;
    left: 5%;
    top: 69px;
    position: absolute;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="background" />
      <div className="container">
        <div className="address">
          주소: 서울시 중구 세종대로 124
          <br />
          담당부서: 지능 정보 사업팀
          <br />
          02)731-7350
          <br />
          이용문의: 카카오톡 kobaco AiSAC
        </div>
        <div className="copyright">
          Copyright(C) Korea Broadcast Advertising Corp.
          <br />
          All Rights Reserved
        </div>
        <div className="navigation">
          <div>AiSAC이란?</div>
          <div className="divider" />
          <div>서비스 이용약관</div>
          <div className="divider" />
          <div>개인정보 처리방침</div>
          <div className="divider" />
          <div>이메일 무단수집 거부</div>
        </div>
        <img className="footerImage" src={footer1} alt="footer" />
      </div>
    </StyledFooter>
  );
};

export default Footer;

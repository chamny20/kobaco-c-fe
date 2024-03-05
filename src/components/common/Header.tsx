import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <div className="left-box">
          <div>logo</div>
          <div className="wrapper-left">
            <div>트렌드 분석</div>
            <div>광고 아카이브</div>
            <div>광고 만들기</div>
          </div>
        </div>

        <div className="wrapper-right">
          <div className="right-menu">
            <div>소통공간</div>
            <div>아이작 활용</div>
          </div>
          <div className="right-login">
            <div>로그인</div>
            <p>|</p>
            <div>회원가입</div>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  position: sticky;
  z-index: 9999;
  top: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;

  border: 1px solid black;
  width: 100%;
  height: 100px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .left-box {
    display: flex;
    gap: 87px;
    align-items: center;

    .wrapper-left {
      color: ${(props) => props.theme.gray_01};
      display: flex;
      gap: 50px;
      font-size: 20px;
      font-weight: 500;

      :hover {
        color: ${(props) => props.theme.red_01};
        cursor: pointer;
      }
    }
  }

  .wrapper-right {
    display: flex;
    font-size: 16px;
    gap: 107px;

    .right-menu {
      gap: 32px;
      /* gap: 2rem; */
      display: flex;
      font-style: normal;
      font-weight: 500;
      color: ${(props) => props.theme.gray_01};
      :hover {
        color: ${(props) => props.theme.red_01};
        cursor: pointer;
      }
    }

    .right-login {
      color: ${(props) => props.theme.gray_02};
      display: flex;
      gap: 23px;

      div:hover {
        color: ${(props) => props.theme.red_01};
        cursor: pointer;
      }
    }
  }
`;

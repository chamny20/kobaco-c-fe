import styled, { keyframes } from 'styled-components';
import logo from '../../assets/kobaco_logo.png';
import { useNavigate } from 'react-router-dom';
import { HeaderDropdown } from './HeaderDropdown';
import { useState } from 'react';

export const Header = () => {
  const navigate = useNavigate();

  const spaceTo = (page: string) => {
    navigate(page);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <div className="left-box">
          <img src={logo} alt="kobaco" onClick={() => spaceTo('/')} />
          <div className="wrapper-left">
            <NavItem
              onMouseEnter={() => setDropdownVisible(true)}
              onClick={() => spaceTo('/trend')}
            >
              트렌드 분석
            </NavItem>
            <div
              onClick={() => spaceTo('/adv-archive')}
              onMouseEnter={() => setDropdownVisible(true)}
            >
              광고 아카이브
            </div>
            <div
              onClick={() => spaceTo('/')}
              onMouseEnter={() => setDropdownVisible(true)}
            >
              광고 만들기
            </div>
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
      {/* {dropdownVisible && (
        <HeaderDropdown
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        />
      )} */}

      {dropdownVisible && (
        <HeaderDropdownContainer visible={dropdownVisible}>
          <HeaderDropdown
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          />
        </HeaderDropdownContainer>
      )}
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

  border-bottom: 1px solid ${(props) => props.theme.gray_05};
  width: 100%;
  height: 100px;
  /* padding: 0px 20px; */
  box-sizing: border-box;
  background-color: white;
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

    img {
      object-fit: cover;
      align-items: center;
      display: flex;
      cursor: pointer;
    }

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

export const NavItem = styled.div`
  position: relative;
`;

const slideIn = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: auto;
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    height: auto;
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
`;

export const HeaderDropdownContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid ${(props) => props.theme.gray_05};
  animation: ${({ visible }) => (visible ? slideIn : slideOut)} 0.3s ease-in-out;
`;

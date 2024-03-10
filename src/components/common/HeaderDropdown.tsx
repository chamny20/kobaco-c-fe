import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDropdown = ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const navigate = useNavigate();

  const spaceTo = (page: string) => {
    navigate(page);
  };

  return (
    <HeaderDropdownContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="menu-container">
        <div className="menu-item">
          <span onClick={() => spaceTo('/trend')}>트렌드 분석</span>
        </div>
        <div className="menu-item">
          <span onClick={() => spaceTo('/adv-archive')}>광고 분석</span>
          <span>레퍼런스 보드</span>
          <span onClick={() => spaceTo('/adv-scrap')}>스크랩한 광고</span>
        </div>
        <div className="menu-item">
          <span>광고 카피 제작하기</span>
          <span>스토리보드 만들기</span>
        </div>
      </div>
    </HeaderDropdownContainer>
  );
};

export const HeaderDropdownContainer = styled.div`
  width: 100vw;
  /* height: 100%; */
  background-color: white;
  height: 212px;
  border-top: 1px solid ${(props) => props.theme.gray_05};
  position: absolute;
  background-color: white;

  .menu-container {
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    gap: 70px;
    padding-left: 205px;
    box-sizing: border-box;

    .menu-item {
      display: flex;
      flex-direction: column;
      gap: 27px;

      span {
        color: var(--Gray-Gray_02, #7b7b7b);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 180%;
        letter-spacing: -0.32px;
        cursor: pointer;

        &:hover {
          color: var(--Red-Red_01, #d33b4d);
        }
      }
    }
  }
`;

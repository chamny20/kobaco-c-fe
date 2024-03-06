import styled from 'styled-components';
import Button from '../../components/common-components/Button/Button';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import first_view from '../../assets/landing/first_view.png';
import view_logo from '../../assets/landing/view_logo.png';

export const FirstView = () => {
  const onClick = () => {
    // TODO : add navigate
  };

  return (
    <ViewContainer>
      <ScrollContainer>
        <div className="content">
          <img src={view_logo} alt="kobaco" />
          <span>
            광고 직접 만들기, 어렵지 않아요. <br />
            광고 시작부터 제작까지 아이작에서 한 번에!
          </span>
          <Button shape="rounded" onClick={onClick} style={{ height: '30px' }}>
            아이작 서비스 시작하기
          </Button>
        </div>
      </ScrollContainer>
    </ViewContainer>
  );
};

export const ViewContainer = styled.div`
  width: 100vw;
  height: 990px;
  padding: 300px 0px;
  box-sizing: border-box;
  background-image: url(${first_view});
  background-size: cover;

  .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;

    span {
      color: ${(props) => props.theme.gray_01};
      text-align: center;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      letter-spacing: -1px;
    }
  }
`;

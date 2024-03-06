import styled from 'styled-components';
import Button from '../../components/common-components/Button/Button';
import { ScrollContainer } from '../../components/animation/ScrollContainer';

export const FirstView = () => {
  const onClick = () => {
    // TODO : add navigate
  };

  return (
    <ViewContainer>
      {/* <ViewContainer image={}> */}
      <ScrollContainer>
        <div className="content">
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
  border: 1px solid black;
  padding: 300px 0px;
  box-sizing: border-box;

  .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
`;

//background-image: url(${(props) => props.image.src});

import styled from 'styled-components';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import Button from '../../components/common-components/Button/Button';

export const FifthView = () => {
  return (
    <ViewContainer>
      <ScrollContainer>
        <div className="content">
          <p>코바코 아이작으로,</p>
          <span>누구나 할 수 있는 간편한 광고 제작!</span>
          <div>
            <Button
              shape="rounded"
              style={{
                height: '64px',
                backgroundColor: 'white',
                color: '#D33B4D',
                fontSize: '25px',
                fontStyle: 'normal',
                fontWeight: 700,
                padding: '0px 40px',
              }}
            >
              아이작 서비스 시작하기
            </Button>
          </div>
        </div>
      </ScrollContainer>
    </ViewContainer>
  );
};

export const ViewContainer = styled.div`
  width: 100vw;
  height: 644px;
  padding: 200px 0px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #ff7070 0%, #de1a1a 100%);

  .content {
    max-width: 1300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;

    p {
      color: #fff;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    span {
      color: #fff;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 40px;
    }
  }
`;

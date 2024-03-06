import styled from 'styled-components';
// import Button from '../components/common-components/Button/Button';
import { Card } from '../components/common-components/Card/Card';

export const TestChaemin = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* <div>hello world</div>
      <Button>hihihi</Button>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <div>안녕하세요. 테스트 페이지입니다.</div>
      <Button size="md" color="black">
        테스트버튼입니다
      </Button>
      <TestDiv>테스트인데볼드가될까요되네요</TestDiv>
      <div>이건 그냥 버전</div> */}

      <div>
        <Card title="검색량" subTitle="서브타이틀테스트트트트틑트트ㅡ">
          <div style={{ border: '1px solid red', textAlign: 'left' }}>
            hihi this area is content area hihi this area is content area hihi
            this area is content area hihi this area is content area hihi this
            area is content area hihi this area is content area
          </div>
        </Card>
      </div>
    </div>
  );
};

export const TestDiv = styled.div`
  font-weight: 700;
`;

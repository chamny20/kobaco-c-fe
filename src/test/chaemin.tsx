import styled from 'styled-components';
import Button from '../components/common-components/Button/Button';
import { Header } from '../layouts/Header';

export const TestChaemin = () => {
  return (
    <main>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          border: '1px solid black',
        }}
      >
        <div>hello world</div>
        <Button>hihihi</Button>
        <div>안녕하세요. 테스트 페이지입니다.</div>
        <div>안녕하세요. 테스트 페이지입니다.</div>
        <div>안녕하세요. 테스트 페이지입니다.</div>
        <div>안녕하세요. 테스트 페이지입니다.</div>
        <Button size="md" color="black">
          테스트버튼입니다
        </Button>
        <TestDiv>테스트인데볼드가될까요되네요</TestDiv>
        <div>이건 그냥 버전</div>
      </div>
    </main>
  );
};

export const TestDiv = styled.div`
  font-weight: 700;
`;

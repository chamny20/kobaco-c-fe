import styled from 'styled-components';
import Button from '../components/common-components/Button/Button';

export const TestChaemin = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
  );
};

export const TestDiv = styled.div`
  font-weight: 700;
`;

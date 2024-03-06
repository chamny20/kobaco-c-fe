import styled, { keyframes } from 'styled-components';
import ScrollAnimation from './ScrollAnimation';

type PropsType = {
  children: React.ReactNode;
};

export const ScrollContainer = ({ children }: PropsType) => {
  const { ref, isInViewport } = ScrollAnimation();

  return (
    <>
      <ExampleContainer ref={ref} className={isInViewport ? 'frame-in' : ''}>
        {children}
      </ExampleContainer>
    </>
  );
};

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }

  100%{
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;

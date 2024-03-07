import React from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from './ScrollAnimation';

type PropsType = {
  children: React.ReactNode;
};

export const ScrollContainer = React.memo(({ children }: PropsType) => {
  const { ref, isInViewport } = ScrollAnimation();

  return (
    <>
      <ExampleContainer
        ref={ref}
        className={isInViewport ? 'frame-in' : 'frame-out'}
      >
        {children}
      </ExampleContainer>
    </>
  );
});

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
  opacity: 0; /* 초기 상태에서 opacity를 0으로 설정합니다. */

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;

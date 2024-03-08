import styled from 'styled-components';

type RankCardProps = {
  children?: React.ReactNode;
};

export const RankCard = ({ children }: RankCardProps) => {
  return <RankCardContainer>{children}</RankCardContainer>;
};

export const RankCardContainer = styled.div`
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: var(--White, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 366px;
  max-width: 200px;
`;

import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '@mui/material';

interface TrendTabProps {
  activeTab: number;
  onTabChange: (newValue: number) => void;
}

export const TrendTab: React.FC<TrendTabProps> = ({
  activeTab,
  onTabChange,
}) => {
  const handleTabChange = (event: ChangeEvent<object>, newValue: number) => {
    if (newValue !== activeTab) {
      onTabChange(newValue);
    }
    console.log(event);
  };

  return (
    <PopularItemContainer>
      <Container>
        <StyledTabs value={activeTab} onChange={handleTabChange}>
          <StyledTab label="검색 성향 분석" />
          <StyledTab label="SNS 트렌드" />
        </StyledTabs>
      </Container>
    </PopularItemContainer>
  );
};

const PopularItemContainer = styled.div`
  background: rgba(255, 255, 255, 0.97);
  width: 100vw;
  padding: 50px 0px;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTabs = styled(Tabs)`
  /* margin-top: auto; */
  /* margin-bottom: -50px; */
  .MuiTabs-indicator {
    background-color: #d33b4d;
  }
`;

const StyledTab = styled(Tab)`
  &.Mui-selected {
    font-weight: 700 !important;
    color: #000000 !important;
    font-size: 20px;
    font-family: 'Pretendard';
  }
  &.Mui-selected:not(.Mui-focusVisible) {
    background-color: transparent;
    font-size: 20px;
    font-family: 'Pretendard';
  }
  &:not(.Mui-selected) {
    font-weight: 500;
    font-size: 20px;
    font-family: 'Pretendard';
  }
`;

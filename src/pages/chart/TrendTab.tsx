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
  };

  return (
    <PopularItemContainer>
      <Container>
        <StyledTabs value={activeTab} onChange={handleTabChange}>
          <StyledTab label="검색 성향 분석" />
          <StyledTab label="SNS 트렌드" />
          {/* Add more tabs as needed */}
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
  margin-top: auto;
  margin-bottom: -50px;
  .MuiTabs-indicator {
    background-color: #d33b4d;
  }
`;

const StyledTab = styled(Tab)`
  font-size: 20px;
  &.Mui-selected {
    font-weight: 700 !important;
    color: #000000 !important;
  }
  &.Mui-selected:not(.Mui-focusVisible) {
    background-color: transparent;
  }
  &:not(.Mui-selected) {
    font-weight: 500;
  }
`;

import React, { useState } from 'react';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import { SearchBanner } from '../trend/SearchBanner';
import { GraphCard } from './Graphs';
import { Banner } from './SnsBanner';
import { TrendTab } from './TrendTab';

export const SearchChartPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <ScrollContainer>
        <SearchBanner />
      </ScrollContainer>
      <TrendTab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 0 && (
        <>
          <Banner />
          <GraphCard />
        </>
      )}
      {activeTab === 1 && (
        <ScrollContainer>
          <Banner />
        </ScrollContainer>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import { ChartBanner } from './ChartBanner';
import { GraphCard } from './Graphs';
import { Banner } from './SnsBanner';
import { TrendTab } from './TrendTab';
import SnsTab from './SnsTab';

export const SearchChartPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <ScrollContainer>
        <ChartBanner />
      </ScrollContainer>
      <TrendTab activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 0 && (
        <>
          <Banner />
          <GraphCard />
        </>
      )}
      {activeTab === 1 && (
        <>
          <SnsTab activeTab={activeTab} onTabChange={handleTabChange} />
        </>
      )}
    </>
  );
};

import React, { useState } from 'react';
import styled from 'styled-components';

interface TabProps {
  label: string;
  content: React.ReactNode;
  // size?: TapSize;
}

interface TabsProps {
  tabs: TabProps[];
  style?: React.CSSProperties;
}

// export const TapSizes = {
//   sm: 'sm',
//   lg: 'lg',
// } as const;
// export type TapSize = (typeof TapSizes)[keyof typeof TapSizes];

const FullTab: React.FC<TabsProps> = ({ tabs, style }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Container
        style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start' }}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              padding: '20px 50px',
              boxSizing: 'border-box',
              background: index === activeTab ? '#D33B4D' : '#F2F2F2',
              borderRadius: '100px',
              overflow: 'hidden',
              border: `1px solid ${index === activeTab ? '#D33B4D' : '#F2F2F2'}`,
              textAlign: 'center',
              cursor: 'pointer',
              ...style,
            }}
            onClick={() => handleTabClick(index)}
          >
            <div
              style={{
                color: index === activeTab ? 'white' : '#A0A0A0',
                fontSize: '24px',
                fontWeight: index === activeTab ? '700' : '500',
                wordWrap: 'break-word',
              }}
            >
              {tab.label}
            </div>
          </div>
        ))}
      </Container>
      <div style={{ marginTop: '10px' }}>
        <div
          style={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '700',
            wordWrap: 'break-word',
          }}
        >
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export default FullTab;

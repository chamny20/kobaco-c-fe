import React, { useState } from 'react';

interface TabProps {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const FullTab: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              padding: '9px 30px',
              background: index === activeTab ? '#D33B4D' : '#F2F2F2',
              borderRadius: '100px',
              overflow: 'hidden',
              border: `1px solid ${index === activeTab ? '#D33B4D' : '#F2F2F2'}`,
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleTabClick(index)}
          >
            <div
              style={{
                color: index === activeTab ? 'white' : '#A0A0A0',
                fontSize: '14px',
                fontFamily: 'Pretendard',
                fontWeight: index === activeTab ? '700' : '500',
                wordWrap: 'break-word',
              }}
            >
              {tab.label}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <div
          style={{
            color: 'black',
            fontSize: '14px',
            fontFamily: 'Pretendard',
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

export default FullTab;

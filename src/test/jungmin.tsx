//import React from 'react';
import Chip from '../components/common-components/Chip/Chip';
import FullTab from '../components/common-components/FullTab';
import Tooltips from '../components/common-components/Tooltip';
import SexChart from '../components/chart/SexChart';
import MonthChart from '../components/chart/MonthChart';

const TestJungmin = () => {
  const tabs = [
    {
      label: '트렌드 분석',
      content: <div>트렌드 분석 내용</div>,
    },
    {
      label: '광고 아카이브',
      content: <div>광고 아카이브 내용</div>,
    },
    {
      label: '광고 만들기',
      content: <div>광고 만들기 내용</div>,
    },
  ];
  const tooltipContent = 'tooltip 설명 설명';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>라디오버튼</div>
      {/*<RadioButtons />*/}
      <div>탭</div>
      <FullTab tabs={tabs} />
      <Chip size="md" shape="rounded" color="blue">
        실험실험
      </Chip>
      <Chip size="md" shape="rounded" color="green">
        실험실험
      </Chip>
      <Tooltips content={tooltipContent} direction="bottom-start" />
      <MonthChart />
      <SexChart />
    </div>
  );
};

export default TestJungmin;

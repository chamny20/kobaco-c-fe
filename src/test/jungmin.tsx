import React from 'react';
//import RadioButton from '../components/common-components/RadioButton/RadioButton';
import {
  CustomTabs,
  getTabProps,
} from '../components/common-components/Tab/Tab';
import Chip from '../components/common-components/Chip/Chip';
import {
  tabColors,
  tabNumbers,
  tabSizes,
} from '../components/common-components/Tab/Tab.types';

const TestJungmin = () => {
  const tabs = [
    getTabProps('Tab 1', tabNumbers.zero, tabSizes.medium, tabColors.red),
    getTabProps('Tab 2', tabNumbers.one, tabSizes.medium, tabColors.gray),
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div>라디오버튼</div>
      {/*<RadioButtons />*/}
      <div>탭</div>
      <CustomTabs tabs={tabs} />
      <Chip size="md" shape="rounded" color="blue">
        실험실험
      </Chip>
      <Chip size="md" shape="rounded" color="green">
        실험실험
      </Chip>
    </div>
  );
};

export default TestJungmin;

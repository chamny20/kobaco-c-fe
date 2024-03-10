// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab, { TabProps } from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { TabSize, TabNumber, TabColor } from './Tab.types';
// import { theme } from '../../../style/theme';

// export interface CustomTabProps extends Omit<TabProps, 'style'> {
//   size: TabSize;
//   color?: TabColor;
//   style?: React.CSSProperties;
// }

// const getTabProps = (
//   label: string,
//   value: TabNumber,
//   size: TabSize,
//   color?: TabColor
// ): CustomTabProps => {
//   return {
//     label,
//     value,
//     size,
//     color,
//   };
// };

// const CustomTabs = ({ tabs }: { tabs: ReturnType<typeof getTabProps>[] }) => {
//   const [value, setValue] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor={
//           tabs[value].color === theme.red_01 ? theme.gray_01 : theme.gray_active
//         }
//         indicatorColor={
//           tabs[value].color === theme.red_01 ? theme.gray_01 : theme.gray_active
//         }
//         aria-label="tabs example"
//       >
//         {tabs.map((tab) => (
//           <Tab key={tab.value} {...tab} />
//         ))}
//       </Tabs>
//     </Box>
//   );
// };

// export { CustomTabs, getTabProps };

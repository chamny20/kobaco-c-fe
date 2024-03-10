import styled from 'styled-components';
import { RowBox } from './AdvAnalysis';
import { Box, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { TabItem } from './TabItem';
import { getAdvertisementAiAnalysisCategory } from '../../api/advertisement';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: '35px 0px' }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

export const ObjectAnalysis = () => {
  const [tab, setTab] = useState(0);
  const [category, setCategory] = useState<string>('person');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    console.log(e);
  };

  const [placeInfo, setPlaceInfo] = useState();
  const [objectInfo, setObjectInfo] = useState();
  const [personInfo, setPersonInfo] = useState();

  const [imgUrls, setImgUrls] = useState<string[]>();

  useEffect(() => {
    getAdvertisementAiAnalysisCategory(1, category)
      .then((res) => {
        console.log('객체분석:', res);
        if (category === 'person') setPersonInfo(res.data.personInfo);
        if (category === 'object') setObjectInfo(res.data.itemInfo);
        if (category === 'place') setPlaceInfo(res.data.placeInfo);

        setImgUrls(res.data.imageUrls);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <ObjectAnalysisContainer>
      <RowBox>
        <div className="an-title">객체 분석</div>
      </RowBox>
      <p>태그를 클릭하면 해당 객체가 나오는 장면을 볼 수 있어요</p>
      <TabContainer>
        <Box
          sx={{
            width: '100%',
            marginTop: '30px',
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Tabs
              value={tab}
              onChange={handleChange}
              sx={{
                width: '100%',
                '& .MuiTab-root': {
                  flex: 1,
                  maxWidth: 'none',
                  fontFamily: 'Pretendard',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#D33B4D',
                },
                '& .Mui-selected': {
                  color: '#D33B4D',
                },
              }}
            >
              <Tab
                label="인물"
                {...a11yProps(0)}
                sx={{
                  fontSize: '16px',
                  width: '33%',
                }}
                onClick={() => {
                  setCategory('person');
                }}
              />
              <Tab
                label="사물"
                {...a11yProps(1)}
                sx={{ fontSize: '16px', width: '33%' }}
                onClick={() => {
                  setCategory('object');
                }}
              />
              <Tab
                label="장소"
                {...a11yProps(2)}
                sx={{ fontSize: '16px', width: '33%' }}
                onClick={() => {
                  setCategory('place');
                }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={tab} index={0}>
            <TabItem
              category={category}
              dataInfo={personInfo}
              imageUrls={imgUrls ?? []}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            <TabItem
              category={category}
              dataInfo={objectInfo}
              imageUrls={imgUrls ?? []}
            />
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={2}>
            <TabItem
              category={category}
              dataInfo={placeInfo}
              imageUrls={imgUrls ?? []}
            />
          </CustomTabPanel>
        </Box>
      </TabContainer>
    </ObjectAnalysisContainer>
  );
};

export const ObjectAnalysisContainer = styled.div`
  margin-top: 64px;
  max-width: 1300px;
  width: 100%;
  margin-bottom: 130px;

  p {
    padding-top: 5px;
    box-sizing: border-box;
    color: ${(props) => props.theme.gray_02};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

export const TabContainer = styled.div``;

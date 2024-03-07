import styled from 'styled-components';
import logo from '../../assets/trend/coupang.png';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { RankCard } from './RankCard';

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 15;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5.5 + ITEM_PADDING_TOP,
    },
  },
};

export const Coupang = () => {
  const [item, setItem] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  const selectItems = [
    '여성패션',
    '남성패션',
    '가구/인테리어',
    '더미1',
    '더미2',
    '더미1',
    '더미2',
    '더미3',
    '더미4',
    '더미5',
  ];

  const rankData = [
    {
      selectedItem: '여성패션',
      data: [
        { id: 1, value: '반팔 티셔츠' },
        { id: 2, value: '여성 티셔츠' },
        { id: 3, value: 'ㄴㄴ 티셔츠' },
        { id: 4, value: 'ㄴㄴ 티셔츠' },
        { id: 5, value: 'ㅁㅁ 티셔츠' },
        { id: 6, value: 'ㅍ 티셔츠' },
        { id: 7, value: '2 티셔츠' },
        { id: 8, value: 'ㄴㅇㄹ 티셔츠' },
        { id: 9, value: 'ㅁㅋ 티셔츠' },
        { id: 10, value: 'ㅌㅌ 티셔츠' },
      ],
    },
    {
      selectedItem: '남성패션',
      data: [
        { id: 1, value: '남성 티셔츠' },
        { id: 2, value: '남성 티셔츠' },
        { id: 3, value: 'ㄴㄴ 남성' },
        { id: 4, value: 'ㄴㄴ 남성' },
        { id: 5, value: 'ㅁㅁ 남성' },
        { id: 6, value: 'ㅍ 티셔츠' },
        { id: 7, value: '2 티셔츠' },
        { id: 8, value: 'ㄴㅇㄹ 티셔츠' },
        { id: 9, value: 'ㅁㅋ 티셔츠' },
        { id: 10, value: 'ㅌㅌ 티셔츠' },
      ],
    },
  ];

  const filteredData =
    rankData.find((data) => data.selectedItem === item)?.data || [];

  return (
    <BasicCardContainer>
      <div className="item-title">
        <img src={logo} alt="" />
        <div>
          <p>쿠팡</p>
          <span>분야별 Hot 아이템</span>
        </div>
      </div>
      <Box sx={{ width: '100%' }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={item}
            onChange={handleChange}
            MenuProps={MenuProps}
            displayEmpty
          >
            <MenuItem disabled value="">
              카테고리를 선택하세요.
            </MenuItem>
            {selectItems.map((item, idx) => {
              return (
                <MenuItem
                  value={item}
                  key={idx}
                  style={{ padding: '15px', boxSizing: 'border-box' }}
                >
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <RankCard>
        <RankDataContainer>
          {filteredData.map((item) => {
            return (
              <div
                key={item.id}
                className="rank-item"
                style={
                  item.id === 1
                    ? { color: '#d33b4d', fontWeight: '700' }
                    : item.id < 4
                      ? { color: '#373D49', fontWeight: '700' }
                      : { color: '#909090', fontWeight: '500' }
                }
              >
                <span>{item.id}</span>
                <span>{item.value}</span>
              </div>
            );
          })}
        </RankDataContainer>
      </RankCard>
    </BasicCardContainer>
  );
};

export const BasicCardContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 200px;
  width: 100%;
  gap: 30px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);

  .item-title {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      color: ${(props) => props.theme.gray_01};
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.48px;
      margin-bottom: 6px;
    }

    span {
      color: ${(props) => props.theme.gray_01};
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }
`;

export const RankDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 12px;
  margin: 12px;
  box-sizing: border-box;

  .rank-item {
    display: flex;
    gap: 30px;

    p {
      color: ${(props) => props.theme.gray_01};
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }

  .rank-box {
    /* padding-left: 20px; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

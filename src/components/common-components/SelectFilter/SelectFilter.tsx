import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Transition } from '@headlessui/react';
import { SelectFilterProps } from './SelectFilter.types';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const expressionCategory = [
  {
    id: 1,
    value: '미소짓는',
    checked: false,
  },
  {
    id: 2,
    value: '무표정',
    checked: false,
  },
  {
    id: 3,
    value: '찡그린',
    checked: false,
  },
  {
    id: 4,
    value: '슬픈',
    checked: false,
  },
  {
    id: 5,
    value: '겁난',
    checked: false,
  },
  {
    id: 6,
    value: '놀란',
    checked: false,
  },
  {
    id: 7,
    value: '화난',
    checked: false,
  },
];

export const CustomCheckBox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <Checkbox
      {...label}
      size="small"
      sx={{
        color: pink[800],
        '&.Mui-checked': {
          color: '#D33B4D',
        },
      }}
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
  );
};

export const SelectFilter = (props: SelectFilterProps) => {
  const { placeholder, filterData, setFilterData, setQuery } = props;

  const [openFilter, setOpenFilter] = useState<boolean>(false);
  // const [expressionData, setExpressionData] = useState(filterData);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCheckBoxChange = (id: number) => {
    const updatedData = filterData?.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterData(updatedData);

    // console.log(updatedData);

    const checkedValues = updatedData
      ?.filter((item) => item.checked)
      .map((item) => item.value);

    console.log('Checked values:', checkedValues);
    setQuery(checkedValues);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <SelectFilterContainer>
        <SelectButton
          onMouseDown={() => setOpenFilter((prev) => !prev)}
          $openFilter={openFilter}
        >
          {placeholder}
          <FilterAltOutlinedIcon />
        </SelectButton>

        <Transition show={openFilter}>
          <DropDownWrapper ref={dropdownRef}>
            <Transition.Child>
              {filterData?.map((item) => {
                return (
                  <div className="check-item" key={item.id}>
                    <CustomCheckBox
                      checked={item.checked}
                      onChange={() => handleCheckBoxChange(item.id)}
                    />
                    <p>{item.value}</p>
                  </div>
                );
              })}
            </Transition.Child>
          </DropDownWrapper>
        </Transition>
      </SelectFilterContainer>
    </>
  );
};

export const SelectFilterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SelectButton = styled.button<{ $openFilter: boolean }>`
  border-radius: ${(props) => (props.$openFilter ? '6px 6px 0 0' : '6px')};
  border: 1px solid ${(props) => props.theme.gray_05};
  background: var(--White, #fff);
  width: 100%;
  display: flex;
  padding: 12px 16px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  cursor: pointer;
  color: ${(props) => props.theme.gray_02};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: -0.32px;
`;

export const DropDownWrapper = styled.div`
  max-width: 260px;
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  position: absolute;
  //
  border-radius: 0 0 5px 5px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: #fff;

  .check-item {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    width: 113px;
    color: ${(props) => props.theme.gray_01};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

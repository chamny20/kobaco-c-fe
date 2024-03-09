import styled from 'styled-components';
import { AdvertiseItemProps, AdvertisementItem } from './AdvertisementItem';
import { Menu, MenuItem, Pagination, Stack } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const dummyData = [
  {
    advertisementId: 1,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 2,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 3,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 4,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 5,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
  {
    advertisementId: 6,
    title: 'asjefija',
    videoUrl: 'ajeslfaj',
    createdAt: '2020202020',
    isArchived: false,
    time: 30,
  },
];

export const AdvertisementList = ({
  data,
  setSortType,
}: {
  data: AdvertiseItemProps[];
  setSortType: Dispatch<SetStateAction<string>>;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selectedSort: string) => {
    setSort(selectedSort);
    if (selectedSort === '최신순') {
      setSortType('LATEST');
    } else {
      setSortType('RELATION');
    }
    setAnchorEl(null);
  };
  const [sort, setSort] = useState<string>('최신순');

  // pagination
  const itemsPerPage = 16;
  const [page, setPage] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <AdvertisementListContainer>
      <div className="sort-box">
        <CustomButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <span>{sort}</span>
          <span>{open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span>
        </CustomButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ fontFamily: 'Pretendard', marginTop: '3px' }}
        >
          <MenuItem
            sx={{ fontFamily: 'Pretendard' }}
            style={{}}
            onClick={() => handleClose('최신순')}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D33B4D')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#424242')}
          >
            최신순
          </MenuItem>
          <MenuItem
            sx={{ fontFamily: 'Pretendard' }}
            onClick={() => handleClose('관련도순')}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D33B4D')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#424242')}
          >
            관련도순
          </MenuItem>
        </Menu>
      </div>
      <ListWrapper>
        {displayedData.map((item) => {
          return (
            <div key={item.advertisementId}>
              <AdvertisementItem
                advertisementId={item.advertisementId}
                key={item.advertisementId}
                title={item.title}
                videoUrl={item.videoUrl}
                createdAt={item.createdAt}
                isArchived={item.isArchived}
                time={item.time}
                topExpression={item.topExpression}
                moodInfo={item.moodInfo}
              />
            </div>
          );
        })}
      </ListWrapper>
      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '70px',

          '& .MuiPaginationItem-page': {
            '&.Mui-selected': {
              backgroundColor: '#dc6271',
              color: 'white',
            },
          },
        }}
      >
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </AdvertisementListContainer>
  );
};

export const AdvertisementListContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 120px;
  box-sizing: border-box;

  .sort-box {
    margin-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 28px;
`;

export const CustomButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 4px;
  width: 100px;
  color: #424242;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: -0.32px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    fill: ${(props) => props.theme.gray_02};
  }
`;

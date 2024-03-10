import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import { NaverItem, NaverItemProps } from './NaverItem';
import { CustomButton } from '../advertisement-archive/AdvertisementList';
import { Menu, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { getTrendNaver } from '../../api/trend';

export const NaverArchive = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = (selectedSort: string) => {
    setSort(selectedSort);
    if (selectedSort === '최신순') {
      //   setSortType('RECENT');
    } else {
      //   setSortType('RELEVANT');
    }
    setAnchorEl(null);
  };
  const [sort, setSort] = useState<string>('최신순');

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [data, setData] = useState<NaverItemProps[]>([]);

  const order = 'RECENT';
  const trendKwd = '원피스';

  useEffect(() => {
    getTrendNaver({ trendKwd, order })
      .then((res) => {
        console.log(res.data);
        setData(res.data.contentArchivingResponseList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card
      title="인스타그램 콘텐츠 아카이브"
      subTitle="* 2022년 11월 이후 수집한 인스타그램 콘텐츠 중 검색 키워드를 포함하는 콘텐츠입니다."
    >
      <SortContainer>
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
      </SortContainer>
      <ItemWrapper>
        {data.map((item, idx) => {
          return (
            <NaverItem
              key={idx}
              postType={item.postType}
              title={item.title}
              imageUrl={item.imageUrl}
              content={item.content}
            />
          );
        })}
      </ItemWrapper>
    </Card>
  );
};

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

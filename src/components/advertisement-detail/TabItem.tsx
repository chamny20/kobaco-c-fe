import styled from 'styled-components';
import personImg from '../../assets/advertisement/1-person.png';
import objectImg from '../../assets/advertisement/1-object.png';
import placeImg from '../../assets/advertisement/1-place.png';
import { Pagination, Stack } from '@mui/material';

export type TabItemProps = {
  tab?: number;
  dataInfo?: string[];
  //   objectInfo?: string[];
  //   personInfo?: string[];
};

export type TabDataProps = {
  category?: string;
  imageUrls: string[];
  dataInfo?: DateInfoType;
};

type DateInfoType = {
  name: string;
}[];

export const TabItem = (props: TabDataProps) => {
  const { category, dataInfo, imageUrls } = props;

  //   console.log('category:', category);
  //   console.log('dataInfo:', dataInfo);
  console.log('imageUrls:', imageUrls);

  const title =
    category === 'person' ? '인물' : category === 'object' ? '사물' : '장소';

  const tagItems = dataInfo?.map((item) => `${item.name}`);

  const selectedImg =
    title === '인물' ? personImg : title === '사물' ? objectImg : placeImg;

  return (
    <TabItemWrapper>
      <HalfItemWrapper>
        <div className="title-line">
          <div className="title">{title} 분석 결과</div>
          <div className="title">:</div>
          <div className="title-data">{dataInfo?.length}개</div>
        </div>
        <span>
          {dataInfo?.map((item, idx) => <div key={idx}>#{item.name}</div>)}
        </span>

        <img className="title-img" src={selectedImg} alt="" />
      </HalfItemWrapper>
      <HalfItemWrapper>
        <div className="row-line">
          <span>#{tagItems && tagItems[0]}</span>이(가) 나오는 장면
        </div>
        {/* <img src={imageUrls[0]} alt="" /> */}

        <div>
          <div className="img-grid">
            {imageUrls?.map((url, idx) => {
              return <img key={idx} src={url} alt="" />;
            })}
          </div>
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
              // count={Math.ceil(data.length / itemsPerPage)}
              page={1}
              // onChange={handleChange}
            />
          </Stack>
        </div>
      </HalfItemWrapper>
    </TabItemWrapper>
  );
};

export const TabItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 50px;
`;

export const HalfItemWrapper = styled.div`
  width: 50%;

  .img-grid {
    margin-top: 61px;

    padding-bottom: 100px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    /* max-width: 610px; */
    height: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }

  .title-img {
    padding-top: 35px;
    box-sizing: border-box;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }

  .row-line {
    display: flex;
    gap: 3px;
  }

  .title-line {
    display: flex;
    gap: 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    padding-bottom: 12px;

    .title {
      color: ${(props) => props.theme.gray_02};
    }

    .title-data {
      color: ${(props) => props.theme.gray_01};
    }
  }

  span {
    color: ${(props) => props.theme.red_01};
    display: flex;
    gap: 5px;
  }
`;

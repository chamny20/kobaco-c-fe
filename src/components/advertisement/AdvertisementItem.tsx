import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from 'styled-components';

export type AdvertiseItemProps = {
  advertisementId?: number;
  title: string;
  videoUrl: string;
  createdAt: string;
  isArchived: boolean;
  time: number;
};

export const AdvertisementItem = (props: AdvertiseItemProps) => {
  const { title, videoUrl, createdAt, isArchived, time } = props;

  return (
    <AdvWrapper>
      <div>{videoUrl}</div>
      <div className="title-line">
        <div>{title}</div>
        {isArchived ? (
          <BookmarkIcon />
        ) : (
          <BookmarkBorderIcon
          // onClick={handleScrappedClick}
          // className="fill-gray-60 mr-[20px]"
          />
        )}
      </div>

      <div className="last-line">
        <div>{createdAt}</div>
        <p>ㆍ</p>
        <div>{time}초</div>
      </div>
    </AdvWrapper>
  );
};

export const AdvWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid blue;
  max-width: 304px;
  width: 100%;

  .title-line {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .last-line {
    display: flex;
    color: ${(props) => props.theme.gray_02};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

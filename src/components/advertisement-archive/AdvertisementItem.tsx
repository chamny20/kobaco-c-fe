import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export type AdvertiseItemProps = {
  advertisementId?: number;
  title: string;
  videoUrl: string;
  createdAt: string;
  isArchived: boolean;
  time: number;
};

export const AdvertisementItem = (props: AdvertiseItemProps) => {
  const { title, videoUrl, createdAt, isArchived, time, advertisementId } =
    props;

  const navigate = useNavigate();

  const spaceTo = (page: string) => {
    navigate(page);
  };

  const [isBookmarked, setIsBookmarked] = useState(isArchived);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <AdvWrapper>
      <StyledImg
        src={videoUrl}
        alt="video-thumnail"
        onClick={() => spaceTo(`/adv-archive/${advertisementId}`)}
      />
      <div className="title-line">
        <div onClick={() => spaceTo(`/adv-archive/${advertisementId}`)}>
          {title}
        </div>
        {isBookmarked ? (
          <BookmarkIcon
            onClick={handleBookmarkClick}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <BookmarkBorderIcon
            onClick={handleBookmarkClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>

      <div className="last-line">
        <div>{createdAt}</div>
        {time !== null && <p>ㆍ</p>}
        {time !== null && <div>{time}초</div>}
      </div>
    </AdvWrapper>
  );
};

export const AdvWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* max-width: 304px; */
  width: 100%;
  cursor: pointer;

  .title-line {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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

export const StyledImg = styled.img`
  height: 171px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

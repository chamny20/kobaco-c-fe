import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from 'styled-components';

export type AdvertiseItemProps = {
  advertisementId?: number;
  title: string;
  videoUrl: string;
  createdAt?: string;
  isArchived: boolean;
  time?: number;
  topExpression?: string;
  moodInfo?: MoodInfoType;
};

type MoodInfoType = {
  type: string;
}[];

export const AdvertisementItem = (props: AdvertiseItemProps) => {
  const {
    title,
    videoUrl,
    createdAt,
    isArchived,
    time,
    moodInfo,
    topExpression,
  } = props;

  return (
    <AdvWrapper>
      <StyledImg src={videoUrl} alt="video-thumnail" />
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

      {time && createdAt && (
        <div className="last-line">
          <div>{createdAt}</div>
          {time !== null && <p>ㆍ</p>}
          {time !== null && <div>{time}초</div>}
        </div>
      )}

      {moodInfo && topExpression && (
        <div className="last-line">
          {topExpression === 'SMILING' ? (
            <div>미소짓는</div>
          ) : topExpression === 'EXPRESSIONLESS' ? (
            <div>무표정</div>
          ) : (
            <div>놀란</div>
          )}
          <p>ㆍ</p>
          <div className="mood-box">
            {moodInfo?.map((item, idx) => <div key={idx}>#{item.type}</div>)}
          </div>
        </div>
      )}
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

    .mood-box {
      display: flex;
      gap: 8px;
    }
  }
`;

export const StyledImg = styled.img`
  height: 171px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

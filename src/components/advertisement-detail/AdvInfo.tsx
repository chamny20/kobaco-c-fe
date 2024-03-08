import styled from 'styled-components';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export type AdvInfoProps = {
  advertiser: string;
  agency: string;
  isArchived: boolean;
  manufacturer: string;
  videoUrl: string;
  title: string;
  createdAt: string;
};

export const AdvInfo = ({ data }: { data: AdvInfoProps }) => {
  return (
    <AdvInfoContainer>
      <VideoImg src={data?.videoUrl} alt="" />
      <TextContainer>
        <div className="title-line">
          <div className="title">{data?.title}</div>
          <div>
            {data?.isArchived ? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon
              // onClick={handleScrappedClick}
              // className="fill-gray-60 mr-[20px]"
              />
            )}
          </div>
        </div>
        <p>{data?.createdAt}</p>
        <div className="adv-info">
          <div className="adv-item">
            <p>광고주</p>
            <span>{data?.advertiser}</span>
          </div>
          <div className="adv-item">
            <p>광고회사</p>
            <span>{data?.agency}</span>
          </div>
          <div className="adv-item">
            <p>제작사</p>
            <span>{data?.manufacturer}</span>
          </div>
        </div>
      </TextContainer>
    </AdvInfoContainer>
  );
};

export const AdvInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.gray_04};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: -0.32px;
    margin: 3px 0px;
  }

  .title-line {
    display: flex;
    justify-content: space-between;

    svg {
      font-size: 30px;
      fill: ${(props) => props.theme.gray_02};
    }

    .title {
      color: ${(props) => props.theme.gray_01};
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }

  .adv-info {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;

    .adv-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    p {
      color: ${(props) => props.theme.gray_02};
    }

    span {
      color: ${(props) => props.theme.gray_01};
    }
  }
`;

export const VideoImg = styled.img`
  width: 100%;
  max-width: 920px;
  height: 517px;
`;

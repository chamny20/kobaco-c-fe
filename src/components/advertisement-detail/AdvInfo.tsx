import styled from 'styled-components';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

export const AdvInfo = () => {
  return (
    <AdvInfoContainer>
      {/* <VideoImg src={} alt="" /> */}
      <TextContainer>
        <div className="title-line">
          <div className="title">title</div>
          <span>
            <BookmarkBorderIcon />
            {/* {isArchived ? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon
              // onClick={handleScrappedClick}
              // className="fill-gray-60 mr-[20px]"
              />
            )} */}
          </span>
        </div>
        <p>date</p>
        <div className="adv-info">
          <div>
            <p>광고주</p>
            <span>주식회사 장스푸드</span>
          </div>
          <div>
            <p>광고회사</p>
            <span>주식회사 장스푸드</span>
          </div>
          <div>
            <p>제작사</p>
            <span>주식회사 장스푸드</span>
          </div>
        </div>
      </TextContainer>
    </AdvInfoContainer>
  );
};

export const AdvInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

  .title {
    color: ${(props) => props.theme.gray_01};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.4px;
  }

  .adv-info {
    display: flex;
    gap: 12px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;

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

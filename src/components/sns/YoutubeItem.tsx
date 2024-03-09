import styled from 'styled-components';

export type YoutubeItemProps = {
  imageUrl: string;
  title: string;
  publisher: string;
};

export const YoutubeItem = (props: YoutubeItemProps) => {
  const { imageUrl, title, publisher } = props;

  return (
    <ItemWrapper>
      <img className="youtube-img" src={imageUrl} alt="" />
      <div className="text-box">
        <p>{title}</p>
        <span>{publisher}</span>
      </div>
    </ItemWrapper>
  );
};

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  color: ${(props) => props.theme.gray_01};
  font-style: normal;

  .youtube-img {
    max-width: 575px;
    max-height: 350px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: -0.32px;
  }
`;

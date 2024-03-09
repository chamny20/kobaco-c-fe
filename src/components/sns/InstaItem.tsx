import styled from 'styled-components';
import heartIcon from '../../assets/favorite.svg';

export type InstaItemProps = {
  imageUrl: string;
  title: string;
  tags: string[];
  like: number;
};

export const InstaItem = (props: InstaItemProps) => {
  const { imageUrl, title, tags, like } = props;

  return (
    <ItemWrapper>
      <img className="insta-img" src={imageUrl} alt="" />
      <div className="text-box">
        <div className="first-line">
          <div className="title">{title}</div>
          <div className="heart">
            <img src={heartIcon} alt="" />
            {like}
          </div>
        </div>
        <div className="tag-box">
          {tags?.map((item, idx) => {
            return <div key={idx}>#{item}</div>;
          })}
        </div>
      </div>
    </ItemWrapper>
  );
};

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 380px;
  width: 100%;

  .tag-box {
    display: flex;
    gap: 4px;
    align-items: center;
    padding-top: 10px;
  }

  .insta-img {
    max-width: 380px;
    max-height: 380px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .text-box {
    color: ${(props) => props.theme.gray_01};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;

    .first-line {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.4px;

      .title {
        font-weight: 600;
      }

      .heart {
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${(props) => props.theme.gray_02};
      }
    }
  }
`;

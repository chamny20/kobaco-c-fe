import styled from 'styled-components';
import Chip from '../common-components/Chip/Chip';

export type NaverItemProps = {
  postType: string;
  imageUrl: string;
  title: string;
  content: string;
};

export const NaverItem = (props: NaverItemProps) => {
  const { postType, imageUrl, title, content } = props;

  return (
    <NaverItemContainer>
      <Chip size="md" shape="rounded" color="blue">
        {postType}
      </Chip>
      <div className="item-content">
        <div className="item-text">
          <div className="title">{title}</div>
          <span>{content}</span>
        </div>

        <img src={imageUrl} alt="" />
      </div>
    </NaverItemContainer>
  );
};

export const NaverItemContainer = styled.div`
  border-radius: 20px;
  border: 1px solid var(--Gray-Gray_05, #e6e6e6);
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  /* max-height: 220px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .item-content {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    max-height: 120px;
    height: 100%;

    img {
      border-radius: 6px;
      background: var(--Gray-Gray_06, #f2f2f2);
      max-width: 200px;
      width: 100%;
      object-fit: cover;
    }

    .item-text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--Gray-Gray_01, #373d49);
      font-style: normal;
      line-height: normal;

      .title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.48px;
      }

      span {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: -0.4px;
      }
    }
  }
`;

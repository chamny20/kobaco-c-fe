import styled from 'styled-components';

export type SimilarItemProps = {
  videoUrl: string;
  title: string;
  createdAt: string;
  moodInfo: string[];
  isArchived?: boolean;
};

export const SimilarItem = ({ data }: { data: SimilarItemProps }) => {
  return (
    <SimilarItemContainer>
      <img src={data.videoUrl} alt="" />
      <div className="text-box">
        <p>{data.title}</p>
        <span>{data.createdAt}2</span>
        <div className="tag-box">
          {data.moodInfo.map((item, idx) => {
            return <div key={idx}>#{item}</div>;
          })}
        </div>
      </div>
    </SimilarItemContainer>
  );
};

export const SimilarItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 390px;
  height: 114px;
  /* height: 100%; */

  img {
    max-width: 202px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid red;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid blue;
    width: 100%;

    .tag-box {
      display: flex;
      gap: 13px;
      align-items: center;
      color: ${(props) => props.theme.gray_02};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    p {
      color: ${(props) => props.theme.gray_01};
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    span {
      margin-top: 8px;
      color: ${(props) => props.theme.gray_03};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    div {
      margin-top: 12px;
      color: ${(props) => props.theme.gray_02};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
    }
  }
`;

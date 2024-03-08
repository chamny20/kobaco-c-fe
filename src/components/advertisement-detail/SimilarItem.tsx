import styled from 'styled-components';

export type SimilarItemProps = {
  videoUrl: string;
  title: string;
  createdAt: string;
  moodInfo: string[];
  isArchived?: boolean;
}[];

export const SimilarItem = ({
  data,
  mood,
}: {
  data: SimilarItemProps;
  mood: string[];
}) => {
  return (
    <>
      <SimTitle>비슷한 분위기의 영상</SimTitle>
      <SimTag>{mood?.map((item, idx) => <div key={idx}>#{item}</div>)}</SimTag>

      {data?.map((item, idx) => {
        return (
          <SimilarItemContainer key={idx}>
            <img src={item.videoUrl} alt="" />
            <div className="text-box">
              <p>{item.title}</p>
              <span>{item.createdAt}</span>
              <div className="tag-box">
                {item.moodInfo.map((item, idx) => {
                  return <div key={idx}>#{item}</div>;
                })}
              </div>
            </div>
          </SimilarItemContainer>
        );
      })}
    </>
  );
};

export const SimilarItemContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 390px;
  height: 114px;
  /* height: 100%; */
  padding: 10px 0px;
  /* box-sizing: border-box; */

  img {
    max-width: 202px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

export const SimTitle = styled.div`
  overflow: hidden;
  color: ${(props) => props.theme.gray_01};
  text-overflow: ellipsis;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%;
  letter-spacing: -0.32px;
`;

export const SimTag = styled.div`
  color: ${(props) => props.theme.red_01};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: -0.32px;
  display: flex;
  flex-direction: row;
  gap: 13px;
  align-items: center;
`;

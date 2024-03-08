import styled from 'styled-components';

// {
//     "advertisementSimilarResponseList": [
//       {
//         "videoUrl": "string",
//         "title": "string",
//         "agency": "string",
//         "moodInfo": [
//           {
//             "type": "string"
//           }
//         ],
//         "isArchived": true
//       }
//     ]
//   }

export type SimilarItemProps = {
  videoUrl: string;
  title: string;
  agency: string;
  moodInfo: string[];
  isArchived?: boolean;
}[];

export const SimilarItem = ({ data }: { data: SimilarItemProps }) => {
  return (
    <>
      <div>비슷한 분위기의 영상</div>
      <div>#활기찬 #역동적인</div>
      <SimilarItemContainer>
        {/* TODO : Mapping */}
        <img src={videoUrl} alt="" />
        <div className="text-box">
          <p>{data.title}</p>
          {/* TODO : createdAt 넣기 */}
          <span>2020.02.02</span>
          {/* <div>
          {moodInfo.map((item, idx) => {
            return <div key={idx}>#{item}</div>;
          })}
        </div> */}
        </div>
      </SimilarItemContainer>
    </>
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

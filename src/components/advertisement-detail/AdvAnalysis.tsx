import styled from 'styled-components';

export type AdvAnalysisProps = {
  moodInfo: string[];
  objectInfo: string[];
  personInfo: string[];
};

export const AdvAnalysis = ({ data }: { data: AdvAnalysisProps }) => {
  return (
    <AdvAnalysisContainer>
      <div className="video-analysis">
        <RowBox>
          <div className="an-title">영상분위기</div>

          <div className="an-content">
            {data?.moodInfo.map((item, idx) => <div key={idx}>#{item}</div>)}
          </div>
        </RowBox>
        <div>
          <div className="an-title">영상 분석</div>
          <SecondBox>
            <div className="second-content">
              <div className="an-subtitle">인물</div>
              <div className="an-content">
                {data?.personInfo.map((item, idx) => (
                  <div key={idx}>#{item}</div>
                ))}
              </div>
            </div>
            <div className="second-content">
              <div className="an-subtitle">사물</div>
              <div className="an-content">
                {data?.objectInfo.map((item, idx) => (
                  <div key={idx}>#{item}</div>
                ))}
              </div>
            </div>
          </SecondBox>
        </div>
      </div>
    </AdvAnalysisContainer>
  );
};

export const AdvAnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 920px;
  width: 100%;

  .video-analysis {
    display: flex;
    flex-direction: column;
    gap: 28px;

    .an-title {
      color: ${(props) => props.theme.gray_01};
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 180%;
      letter-spacing: -0.32px;
    }

    .an-subtitle {
      color: ${(props) => props.theme.gray_02};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    .an-content {
      color: ${(props) => props.theme.red_01};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;
      //
      display: flex;
      gap: 13px;
    }
  }
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SecondBox = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  .second-content {
    display: flex;
    gap: 12px;
  }
`;

import styled from 'styled-components';

export const AdvAnalysis = () => {
  return (
    <AdvAnalysisContainer>
      <div className="video-analysis">
        <RowBox>
          <div className="an-title">영상분위기</div>
          <div className="an-content">#활기찬 #역동적인</div>
        </RowBox>
        <div>
          <div className="an-title">영상 분석</div>
          <SecondBox>
            <div className="second-content">
              <div className="an-subtitle">인물</div>
              <div className="an-content">#주현영</div>
            </div>
            <div className="second-content">
              <div className="an-subtitle">사물</div>
              <div className="an-content">#떡볶이 #그릇</div>
            </div>
          </SecondBox>
        </div>
        <RowBox>
          <div className="an-title">표정 분석</div>
          <div className="an-content">#활기찬 #역동적인</div>
        </RowBox>
      </div>
      <div>그래픽 비율 및 차트</div>
    </AdvAnalysisContainer>
  );
};

export const AdvAnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1px solid black;
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

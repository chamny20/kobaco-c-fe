import { useParams } from 'react-router-dom';
import {
  SimilarItem,
  SimilarItemProps,
} from '../../components/advertisement-detail/SimilarItem';
import {
  AdvAnalysis,
  AdvAnalysisProps,
} from '../../components/advertisement-detail/AdvAnalysis';
import {
  AdvInfo,
  AdvInfoProps,
} from '../../components/advertisement-detail/AdvInfo';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {
  getAdvertisementAnalysis,
  getAdvertisementExpression,
  getAdvertisementInfo,
  getSimilarAdvertisement,
} from '../../api/advertisement';
import {
  AdvExpression,
  ExpressionProps,
} from '../../components/advertisement-detail/AdvExpression';
import { ScrollContainer } from '../../components/animation/ScrollContainer';
import { ObjectAnalysis } from '../../components/advertisement-detail/ObjectAnalysis';
import { BreadContainer } from '../adv-archive/AdvSearchBanner';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const AdvDetailPage = () => {
  const { advertisementId } = useParams();
  const advId = Number(advertisementId);
  const [similarData, setSimilarData] = useState<SimilarItemProps>();
  const [infoData, setInfoData] = useState<AdvInfoProps>();
  const [moodInfo, setMoodInfo] = useState<string[]>();

  // video-analysis data
  const [analData, setAnalData] = useState<AdvAnalysisProps>();

  // video-expression data
  const [expressionData, setExpressionData] = useState<ExpressionProps>();

  useEffect(() => {
    getSimilarAdvertisement(advId)
      .then((res) => {
        // console.log('res:', res);
        setSimilarData(res.data.advertisementSimilarResponseList);
      })
      .catch((err) => {
        console.log('err:', err);
      });

    //info
    getAdvertisementInfo(advId)
      .then((res) => {
        // console.log('info:', res);
        setInfoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //video-analysis
    getAdvertisementAnalysis(advId)
      .then((res) => {
        // console.log('anal', res);
        setMoodInfo(res.data.moodInfo);
        setAnalData(res.data);
      })
      .catch((err) => console.log(err));

    //video-expression
    getAdvertisementExpression(advId)
      .then((res) => {
        // console.log('ex', res);
        setExpressionData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollContainer>
      <Wrapper>
        <BreadContainer>
          <span className="first-black">광고 아카이브</span>
          <span className="arrow-black-icon">
            <ArrowForwardIosIcon />
          </span>
          <span className="first-black">광고 분석</span>
          <span className="arrow-red-icon">
            <ArrowForwardIosIcon />
          </span>
          <span className="third-red">광고 상세보기</span>
        </BreadContainer>
        <AdvDetailPageContainer>
          <div>
            <AdvInfo data={infoData as AdvInfoProps} />
            <Divider />
            <AdvAnalysis data={analData as AdvAnalysisProps} />
            <AdvExpression data={expressionData as ExpressionProps} />
          </div>
          <div>
            <SimilarItem
              data={similarData as SimilarItemProps}
              mood={moodInfo ?? []}
            />
          </div>
        </AdvDetailPageContainer>
        <ObjectAnalysis />
      </Wrapper>
    </ScrollContainer>
  );
};

export const AdvDetailPageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1300px;
  padding: 50px 0px;
  margin-top: 20px;
  box-sizing: border-box;
  gap: 32px;
`;

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme.gray_05};
  margin: 30px 0px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  padding-top: 40px;
  box-sizing: border-box;
`;

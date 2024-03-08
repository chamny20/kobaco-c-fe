import { api } from '.';
import { AdvertisementListType } from '../types/api';

// 광고 리스트 조회
export const getAdvertisementList = async ({
  sortType,
  startDate,
  endDate,
  kwdVal,
}: AdvertisementListType) => {
  const res = await api.get('/api/advertisement/list', {
    params: {
      sortType,
      startDate,
      endDate,
      kwdVal,
    },
  });
  return res;
};

// 비슷한 영상 광고 리스트 조회
export const getSimilarAdvertisement = async (advertisementId: number) => {
  const res = await api.get(`/api/advertisement/similar/${advertisementId}`);
  return res;
};

// 광고 기본 정보 조회
export const getAdvertisementInfo = async (advertisementId: number) => {
  const res = await api.get(`/api/advertisement/info/${advertisementId}`);
  return res;
};

// 광고 표정 분석 조회
export const getAdvertisementExpression = async (advertisementId: number) => {
  const res = await api.get(`/api/advertisement/expression/${advertisementId}`);
  return res;
};

// 광고 영상 분석 결과 조회(영상 분위기, 인물, 사물)
export const getAdvertisementAnalysis = async (advertisementId: number) => {
  const res = await api.get(`/api/advertisement/analysis/${advertisementId}`);
  return res;
};

// 영상 분석 결과 조회(이미지만 조회), category는 {person, objet, place}만 가능
export const getAdvertisementAiAnalysisCategory = async (
  advertisementId: number,
  category: string
) => {
  const res = await api.get(
    `/api/advertisement/ai-analysis/${advertisementId}/${category}`
  );
  return res;
};

// 광고 스크랩
export const getAdvertisementScrap = async (advertisementId: number) => {
  const res = await api.patch(`/api/advertisement/archive/${advertisementId}`);
  return res;
};

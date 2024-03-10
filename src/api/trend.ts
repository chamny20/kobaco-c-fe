import { api } from '.';
import { TrendSearchType } from '../types/api';

// sns 트렌드 검색, kwdVal은 검색어, snsType(INSTAGRAM, YOUTUBE)은 sns 유형
export const getTrendSearch = async ({ kwdVal, snsType }: TrendSearchType) => {
  const res = await api.get(`/api/trend`, {
    params: {
      kwdVal,
      snsType,
    },
  });
  return res;
};

// 트렌드 월별 & 요일별 분석 조회
export const getTrendTime = async ({ trendKwd }: { trendKwd: string }) => {
  const res = await api.get(`/api/trend/time`, {
    params: {
      trendKwd,
    },
  });
  return res;
};

// 트렌드 성별 & 나이 분석 조회
export const getTrendPerson = async ({ trendKwd }: { trendKwd: string }) => {
  const res = await api.get(`/api/trend/person`, {
    params: {
      trendKwd,
    },
  });
  return res;
};

// SNS 트렌드 검색
export const getTrendArchive = async ({
  trendKwd,
  snsType,
}: {
  trendKwd: string;
  snsType: string;
}) => {
  const res = await api.get(`/api/trend`, {
    params: {
      trendKwd,
      snsType,
    },
  });
  return res;
};

// SNS 트렌드 검색
export const getTrendNaver = async ({
  trendKwd,
  order,
}: {
  trendKwd: string;
  order: string;
}) => {
  const res = await api.get(`/api/trend/archiving`, {
    params: {
      trendKwd,
      order,
    },
  });
  return res;
};

export interface AdvertisementListType {
  sortType: string;
  kwdVal?: string;
  startDate: string;
  endDate: string;
  expressionType?: string;
  moodType?: string;
}

export interface TrendSearchType {
  kwdVal: string;
  snsType: string;
}

export interface ScrappedAdvType {
  kwdVal?: string;
  expressionType?: string[];
  moodType?: string[];
}

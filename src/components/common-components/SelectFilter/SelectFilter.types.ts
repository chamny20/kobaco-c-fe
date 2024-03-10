import { Dispatch, SetStateAction } from 'react';

export type SelectFilterProps = {
  style?: React.CSSProperties;
  // filterData?: FilterItemType;
  placeholder?: string;
  // moodData?: FilterItemType;
  // setMoodData?: Dispatch<SetStateAction<FilterItemType>>;
  filterData: FilterItemType;
  setFilterData: Dispatch<SetStateAction<FilterItemType>>;
  //
  setQuery: Dispatch<SetStateAction<string[]>>;
};

export type FilterItemType = {
  id: number;
  checked: boolean;
  value: string;
}[];

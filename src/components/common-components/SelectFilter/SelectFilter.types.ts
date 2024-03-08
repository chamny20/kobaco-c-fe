export type SelectFilterProps = {
  style?: React.CSSProperties;
  filterData: FilterItemType;
  placeholder?: string;
};

export type FilterItemType = {
  id: number;
  checked: boolean;
  value: string;
}[];

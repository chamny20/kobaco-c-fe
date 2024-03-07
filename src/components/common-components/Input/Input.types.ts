export type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: InputSize;
  style?: React.CSSProperties;
};

export const inputSizes = {
  sm: 'sm',
  lg: 'lg',
} as const;
export type InputSize = (typeof inputSizes)[keyof typeof inputSizes];

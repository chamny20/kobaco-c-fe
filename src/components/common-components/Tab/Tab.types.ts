export const tabSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;
export type TabSize = (typeof tabSizes)[keyof typeof tabSizes];

export const tabNumbers = {
  zero: 0,
  one: 1,
  two: 2,
} as const;
export type TabNumber = (typeof tabNumbers)[keyof typeof tabNumbers];

export const tabStyles = {
  center: 'center',
  left: 'left',
} as const;
export type TabStyle = (typeof tabStyles)[keyof typeof tabStyles];

export const tabShapes = {
  full: 'full',
  default: 'default',
} as const;
export type TabShape = (typeof tabShapes)[keyof typeof tabShapes];

export const tabColors = {
  red: 'theme.red_01',
  gray: 'theme.gray_01',
  default: 'default',
} as const;
export type TabColor = (typeof tabColors)[keyof typeof tabColors];

import React, { HTMLAttributes } from 'react';

export const chipSizes = {
  sm: 'sm',
  md: 'md',
} as const;
export type ChipSize = (typeof chipSizes)[keyof typeof chipSizes];

export const chipShapes = {
  square: 'square',
  rounded: 'rounded',
} as const;
export type ChipShape = (typeof chipShapes)[keyof typeof chipShapes];

export const chipColors = {
  default: 'default',
  negative: 'negative',
  green: 'green',
  blue: 'blue',
  black: 'black',
} as const;
export type ChipColor = (typeof chipColors)[keyof typeof chipColors];

export type ChipProps = {
  size?: ChipSize;
  shape?: ChipShape;
  color?: ChipColor;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

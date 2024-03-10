import { ChipColor, ChipShape, ChipSize } from './Chip.types';
import styled, { css } from 'styled-components';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  box-sizing: border-box;
  /* margin: 0;
  padding: 0; */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &.disabled {
    cursor: default;
  }
`;

const sizeStyles: Record<ChipSize, ReturnType<typeof css>> = {
  sm: css`
    min-height: 34px;
    padding: 9px 30px;
    font-size: 14px;
    gap: 4px;
  `,
  md: css`
    min-height: 23px;
    padding: 3px 12px;
    width: 120px;
    font-size: 14px;
    font-weight: 500;
    gap: 10px;
  `,
};

const shapeStyles: Record<ChipShape, ReturnType<typeof css>> = {
  square: css``,
  rounded: css`
    border-radius: 4px;
  `,
};

const colorStyles: Record<ChipColor, ReturnType<typeof css>> = {
  negative: css`
    color: #ffffff;
    &:hover {
    }
    &.disabled {
    }
  `,
  black: css`
    color: white;
    background-color: ${(props) => props.theme.gray_01};
  `,
  default: css`
    color: white;
    background-color: ${(props) => props.theme.red_01};
  `,
  blue: css`
    color: #4664b9;
    background-color: #edeff8;
  `,
  green: css`
    color: #3bcd6f;
    background-color: #e5f9ee;
  `,
};

const Chip = styled.div<{
  size?: ChipSize;
  shape?: ChipShape;
  color?: ChipColor;
}>`
  ${baseStyles}
  ${({ size }) => size && sizeStyles[size || 'md']}
    ${({ shape }) => shape && shapeStyles[shape || 'square']}
    ${({ color }) => color && colorStyles[color || 'default']}
`;

export default Chip;

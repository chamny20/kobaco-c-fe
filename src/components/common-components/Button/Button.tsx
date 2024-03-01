import { PropsWithChildren, forwardRef } from 'react';
import {
  ButtonColor,
  ButtonProps,
  ButtonShape,
  ButtonSize,
} from './Button.types';
import styled, { css } from 'styled-components';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &.disabled {
    cursor: default;
  }
`;

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    min-height: 34px;
    padding: 8px 14px;
    font-size: 14px;
    gap: 4px;
  `,
  md: css`
    min-height: 54px;
    padding: 20px 30px;
    font-size: 16px;
    gap: 6px;
  `,
  lg: css`
    min-height: 42px;
    padding: 10px 15px;
    font-size: 16px;
    gap: 6px;
  `,
};

const shapeStyles: Record<ButtonShape, ReturnType<typeof css>> = {
  square: css`
    border-radius: 8px;
  `,
  rounded: css`
    border-radius: 9999px;
  `,
};

const colorStyles: Record<ButtonColor, ReturnType<typeof css>> = {
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
    outline: none;
    &:hover,
    :focus {
      background-color: ${(props) => props.theme.gray_active};
      /* outline: none; */
    }
    &.disabled {
      background-color: ${(props) => props.theme.gray_03};
    }
  `,
  default: css`
    color: white;
    background-color: ${(props) => props.theme.red_01};
    &:hover {
      background-color: ${(props) => props.theme.red_active};
    }
    &.disabled {
      background-color: ${(props) => props.theme.red_03};
    }
  `,
  lineGray: css`
    color: black;
  `,
  lineRed: css`
    color: black;
  `,
};

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const {
      size = 'md',
      shape = 'square',
      color = 'default',
      startIcon,
      endIcon,
      children,
      ...rest
    } = props;

    return (
      <StyledButton
        type="button"
        ref={ref}
        size={size}
        shape={shape}
        color={color}
        {...rest}
      >
        {' '}
        {startIcon}
        {children}
        {endIcon}
      </StyledButton>
    );
  }
);

const StyledButton = styled.button<{
  size?: ButtonSize;
  shape?: ButtonShape;
  color?: ButtonColor;
}>`
  ${baseStyles}
  ${({ size }) => size && sizeStyles[size || 'md']}
  ${({ shape }) => shape && shapeStyles[shape || 'square']}
  ${({ color }) => color && colorStyles[color || 'default']}
`;

export default Button;

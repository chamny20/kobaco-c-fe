import styled, { css } from 'styled-components';
import { InputProps, InputSize } from './Input.types';
import { PropsWithChildren, forwardRef } from 'react';

const sizeStyles: Record<InputSize, ReturnType<typeof css>> = {
  sm: css`
    height: 54px;
    padding: 15px;
    border-radius: 8px;
  `,
  lg: css`
    height: 80px;
    padding: 15px 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
  `,
};

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputProps>
>((props, ref) => {
  const { value, placeholder, onChange, size, style } = props;

  return (
    <StyledInput
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size={size}
      style={{ ...style }}
    />
  );
});

export const StyledInput = styled.input<{ size?: InputSize }>`
  border: 1px solid ${(props) => props.theme.gray_05};
  background: var(--White, #fff);
  box-sizing: border-box;
  width: 100%;
  ${({ size }) => size && sizeStyles[size || 'lg']}

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.red_01};
  }
`;

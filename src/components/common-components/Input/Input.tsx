import styled, { css } from 'styled-components';
import { InputProps, InputSize } from './Input.types';
import { PropsWithChildren, forwardRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const sizeStyles: Record<InputSize, ReturnType<typeof css>> = {
  sm: css`
    height: 54px;
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    &::placeholder {
      font-size: 16px;
    }
  `,
  lg: css`
    height: 80px;
    padding: 15px 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
    font-size: 20px;
    &::placeholder {
      font-size: 20px;
    }
  `,
};

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputProps>
>((props, ref) => {
  const { value, placeholder, onChange, size, style, onClick } = props;

  return (
    <div
      style={{
        position: 'relative',
        ...style,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <SearchIcon
        style={{ position: 'absolute', left: '20px', fill: '#7B7B7B' }}
      />

      <StyledInput
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClick();
          }
        }}
      />
      <InputButton size={size} onClick={onClick}>
        검색
      </InputButton>
    </div>
  );
});

export const StyledInput = styled.input<{ size?: InputSize }>`
  border: 1px solid ${(props) => props.theme.gray_05};
  background: var(--White, #fff);
  box-sizing: border-box;
  width: 100%;
  ${({ size }) => size && sizeStyles[size || 'lg']}
  padding:0px 54px;
  /* font-size: 20px; */

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.red_01};
  }
  /* &::placeholder {
    font-size: 20px;
  } */
`;

export const InputButton = styled.button<{ size?: InputSize }>`
  position: absolute;
  cursor: pointer;
  right: 20px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.red_01};
  font-size: ${({ size }) => (size === 'sm' ? '12px' : '16px')};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ size }) => (size === 'sm' ? '10px 16px' : '20px 30px')};
  height: ${({ size }) => (size === 'sm' ? '32px' : '54px')};

  &:hover {
    background-color: ${(props) => props.theme.red_active};
  }
`;

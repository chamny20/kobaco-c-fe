import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

type ModalTopProps = {
  onClick: () => void;
  style?: React.CSSProperties;
  title?: string;
};

export default function ModalTop({ onClick, style, title }: ModalTopProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
        ...style,
        marginBottom: '50px',
      }}
    >
      <TitleContainer>{title}</TitleContainer>

      <CloseIcon
        type="button"
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
          e.currentTarget.style.borderRadius = '10px';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        style={{
          padding: '3px',
          fontSize: '40px',
          transition: 'background-color 0.2s ease',
          cursor: 'pointer',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
}
export const TitleContainer = styled.div`
  color: ${(props) => props.theme.gray_01};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
`;

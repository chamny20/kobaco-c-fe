import styled from 'styled-components';
import { CardProps } from '../../components/common-components/Card/Card.types';
import InfoIcon from '@mui/icons-material/Info';

const CustomInfoIcon = styled(InfoIcon)`
  color: ${(props) => props.theme.gray_04};
`;

export const CardGraph: React.FC<
  CardProps & { additionalText?: React.ReactNode }
> = (props) => {
  const { title, subTitle, children, additionalText } = props;
  return (
    <CardContainer>
      <div className="title-box">
        <div className="title-info-container">
          <div className="card-title">{title}</div>
          <CustomInfoIcon className="info-icon" />
        </div>
        <div className="subtitle-container">
          {additionalText && (
            <AdditionalTextContainer>{additionalText}</AdditionalTextContainer>
          )}
          <div className="card-sub-title">{subTitle}</div>
        </div>
      </div>
      <div className="card-child">{children}</div>
    </CardContainer>
  );
};

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.gray_05};
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
  font-style: normal;
  margin: 0 auto;

  .title-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;

    .title-info-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .card-title {
        color: ${(props) => props.theme.gray_01};
        font-size: 20px;
        font-weight: 700;
      }

      .info-icon {
        color: ${(props) => props.theme.gray_01};
      }
    }

    .subtitle-container {
      display: flex;
      align-items: baseline;
      gap: 10px;

      .card-sub-title {
        color: ${(props) => props.theme.gray_03};
        font-size: 32px;
        font-weight: 700;
        line-height: 180%;
        letter-spacing: -0.32px;
      }

      .additional-text {
        color: #555;
        font-size: 32px;
        font-weight: 700;
        line-height: 180%;
        letter-spacing: -0.32px;
      }
    }
  }

  .card-child {
    margin-top: 50px;
    box-sizing: border-box;
  }
`;
const AdditionalTextContainer = styled.div`
  color: #d33b4d;
  font-size: 32px;
  font-weight: 700;
  line-height: 180%;
  letter-spacing: -0.32px;
`;

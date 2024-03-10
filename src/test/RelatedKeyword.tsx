import styled from 'styled-components';
import line from './line.png';

export const RelatedKeyword = () => {
  return (
    <RelatedKeywordWrapper>
      <SubCircle1>텍스트</SubCircle1>
      <SubCircle2>텍스트</SubCircle2>
      <SubCircle3>텍스트</SubCircle3>
      <SubCircle4>텍스트</SubCircle4>
      <SubCircle5>텍스트</SubCircle5>
      <SubCircle6>텍스트</SubCircle6>
      <SubCircle7>텍스트</SubCircle7>
      <SubCircle8>텍스트</SubCircle8>
      <MainCircle>텍스트</MainCircle>
      <img className="img" src={line} alt="" />
    </RelatedKeywordWrapper>
  );
};

export const RelatedKeywordWrapper = styled.div`
  border: 1px solid black;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  /* min-height: 870px; */
  margin: 100px auto;

  img {
    position: absolute;
  }
`;

export const MainCircle = styled.div`
  border-radius: 100%;
  background-image: url(${line});
  background-size: cover;
  border: 15px solid var(--red-red-0430, #f2c4ca);
  background: var(--Red-Red_01, #d33b4d);
  display: inline-flex;
  height: 280px;
  max-width: 280px;
  width: 100%;
  padding: 0px 48px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: var(--White, #fff);
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 115.2px */
  letter-spacing: -1.28px;
  margin-top: 90px;
  margin-left: 40px;
  z-index: 999;
`;

export const SubCircle1 = styled.div`
  display: inline-flex;
  max-width: 150px;
  height: 150px;
  width: 100%;
  padding: 0px 28px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  background: var(--red-red-0280, #dc6271);
  color: var(--White, #fff);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: -0.64px;
  //
  position: absolute;
  top: -100px;
  right: 80px;
`;

export const SubCircle2 = styled.div`
  display: inline-flex;
  max-width: 150px;
  height: 150px;
  width: 100%;
  padding: 0px 28px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  background: var(--red-red-0280, #dc6271);
  color: var(--White, #fff);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: -0.64px;
  position: absolute;
  top: 5px;
  left: 220px;
  z-index: 999;
`;

export const SubCircle3 = styled.div`
  display: inline-flex;
  max-width: 140px;
  height: 140px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  color: var(--White, #fff);
  position: absolute;
  top: -120px;
  left: 490px;
  z-index: 999;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 57.6px */
  letter-spacing: -0.64px;
  background: var(--red-red-0430, #f2c4ca);
`;

export const SubCircle4 = styled.div`
  display: inline-flex;
  max-width: 140px;
  height: 140px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  color: var(--White, #fff);
  position: absolute;
  top: 520px;
  left: 500px;
  z-index: 999;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 57.6px */
  letter-spacing: -0.64px;
  background: var(--red-red-0430, #f2c4ca);
`;

export const SubCircle5 = styled.div`
  display: inline-flex;
  max-width: 140px;
  height: 140px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  background: var(--red-red-0280, #dc6271);
  color: var(--White, #fff);
  position: absolute;
  top: 460px;
  left: 200px;
  z-index: 999;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 57.6px */
  letter-spacing: -0.64px;
`;

export const SubCircle6 = styled.div`
  display: inline-flex;
  max-width: 140px;
  height: 140px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  color: var(--White, #fff);
  position: absolute;
  top: 200px;
  left: -30px;
  z-index: 999;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 57.6px */
  letter-spacing: -0.64px;
  background: var(--red-red-0430, #f2c4ca);
`;

export const SubCircle7 = styled.div`
  display: inline-flex;
  max-width: 140px;
  height: 140px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  color: var(--White, #fff);
  position: absolute;
  top: 200px;
  right: -20px;
  z-index: 999;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 57.6px */
  letter-spacing: -0.64px;
  background: var(--red-red-0430, #f2c4ca);
`;

export const SubCircle8 = styled.div`
  display: inline-flex;
  max-width: 140px;
  height: 140px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 23px;
  flex-shrink: 0;
  border-radius: 100%;
  background: var(--red-red-0280, #dc6271);
  color: var(--White, #fff);
  position: absolute;
  top: 440px;
  right: 160px;
  z-index: 999;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 57.6px */
  letter-spacing: -0.64px;
`;

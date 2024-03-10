import React from 'react';
import styled from 'styled-components';
import line from './line.png';

export const RelatedKeyword = () => {
  return (
    <RelatedKeywordWrapper>
      <SubCircle1>투피스</SubCircle1>
      <SubCircle2>데이트</SubCircle2>
      <SubCircle3>상견례</SubCircle3>
      <SubCircle4>결혼식</SubCircle4>
      <SubCircle5>여친룩</SubCircle5>
      <SubCircle6>목걸이</SubCircle6>
      <SubCircle7>자켓</SubCircle7>
      <SubCircle8>치마</SubCircle8>
      <MainCircle>원피스</MainCircle>
      <img className="img" src={line} alt="" />
    </RelatedKeywordWrapper>
  );
};

export const RelatedKeywordWrapper = styled.div`
  // 필요에 따라 크기 조절
  max-width: 60%; // 특정 너비를 설정하거나 max-width 사용
  height: auto; // 내용에 따라 높이 조절
  display: flex;
  position: relative;
  margin: 100px auto;
  justify-content: center;
  align-items: center;

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
  margin-top: 60px;
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
  top: -210px;
  right: -120px;
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
  top: -60px;
  left: -10px;
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
  top: -180px;
  left: 270px;
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
  top: 340px;
  left: 600px;
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
  top: 340px;
  left: -40px;
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
  top: 120px;
  left: -250px;
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
  top: 100px;
  right: -240px;
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
  max-width: 120px;
  height: 120px;
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
  top: 360px;
  right: 240px;
  z-index: 999;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 57.6px */
  letter-spacing: -0.64px;
`;

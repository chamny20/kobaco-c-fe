import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import { InstaItem, InstaItemProps } from './InstaItem';
import { useEffect, useState } from 'react';
import { getTrendArchive } from '../../api/trend';

export const InstaArchive = () => {
  const [data, setData] = useState<InstaItemProps[]>([]);

  const snsType = 'INSTAGRAM';
  const trendKwd = '원피스';

  useEffect(() => {
    getTrendArchive({ trendKwd, snsType })
      .then((res) => {
        console.log(res.data);
        setData(res.data.contentInfoResponseList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card
      title="인스타그램 콘텐츠 아카이브"
      subTitle="* 2022년 11월 이후 수집한 인스타그램 콘텐츠 중 검색 키워드를 포함하는 콘텐츠입니다."
    >
      <ContentsWrapper>
        <LengthTitle>총 {data.length}개의 콘텐츠</LengthTitle>
        <InstaGridWrapper>
          {data.map((item, idx) => {
            return (
              <InstaItem
                key={idx}
                title={item.title}
                tags={item.tags}
                like={item.like}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </InstaGridWrapper>
      </ContentsWrapper>
    </Card>
  );
};

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const InstaGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
`;

export const LengthTitle = styled.div`
  padding-bottom: 50px;
  color: ${(props) => props.theme.gray_01};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
`;

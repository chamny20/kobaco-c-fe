import styled from 'styled-components';
import { Card } from '../common-components/Card/Card';
import { YoutubeItem, YoutubeItemProps } from './YoutubeItem';
import { useEffect, useState } from 'react';
import { getTrendArchive } from '../../api/trend';

export const YoutubeArchive = () => {
  const [data, setData] = useState<YoutubeItemProps[]>([]);

  const snsType = 'YOUTUBE';
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
    <Card title="유튜브 콘텐츠 아카이브">
      <ContentsWrapper>
        <LengthTitle>총 {data.length}개의 콘텐츠</LengthTitle>
        <YoutubeGridWrapper>
          {data.map((item, idx) => {
            return (
              <YoutubeItem
                key={idx}
                title={item.title}
                publisher={item.publisher}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </YoutubeGridWrapper>
      </ContentsWrapper>
    </Card>
  );
};

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const YoutubeGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

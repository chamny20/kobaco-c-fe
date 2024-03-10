import React from 'react';
import styled from 'styled-components';
import FullTab from '../../components/common-components/FullTab';
import { InstaBanner } from './InstaBanner';
import { NaverBanner } from './NaverBanner';
import { YoutubeBanner } from './YoutubeBanner';
import { Card } from '../../components/common-components/Card/Card';
import { CardGraph } from './GraphCard';
import InstaChart from '../../components/chart/InstaChart';
import TagGraph from '../../components/chart/YoutubeChart';
import { RelatedKeyword } from '../../test/RelatedKeyword';
import { InstaArchive } from '../../components/sns/InstaArchive';
import { YoutubeItem } from '../../components/sns/YoutubeItem';
import { YoutubeArchive } from '../../components/sns/YoutubeArchive';
import { NaverArchive } from '../../components/sns/NaverArchive';

interface SnsTabProps {
  activeTab: number;
  onTabChange: (newValue: number) => void;
}

const SnsTab: React.FC<SnsTabProps> = () => {
  const tabs = [
    {
      label: '인스타그램',
      content: (
        <div>
          <InstaBanner />
          <StyledContainer>
            <InnerContainer>
              <Card
                title="인스타그램 연관 해시태그"
                subTitle="검색한 키워드에 관련한 해시태그를 제공합니다."
              >
                <CardGraph title="연관 해시태그 키워드 TOP 5">
                  <InstaChart />
                </CardGraph>
              </Card>
              <InstaArchive />
            </InnerContainer>
          </StyledContainer>
        </div>
      ),
    },
    {
      label: '유튜브',
      content: (
        <div>
          <YoutubeBanner />
          <StyledContainer>
            <InnerContainer>
              <Card
                title="유튜브 연관 해시태그"
                subTitle="검색한 키워드에 대한 유튜브 연관 키워드를 제공합니다."
              >
                <CardGraph title="연관 키워드">
                  <RelatedKeyword />
                </CardGraph>
              </Card>
              <YoutubeArchive />
            </InnerContainer>
          </StyledContainer>
        </div>
      ),
    },
    {
      label: '네이버 콘텐츠',
      content: (
        <div>
          <NaverBanner />
          <StyledContainer>
            <InnerContainer>
              <NaverArchive />
            </InnerContainer>
          </StyledContainer>
        </div>
      ),
    },
  ];

  return (
    <SnsTabContainer>
      <FullTab tabs={tabs} />
    </SnsTabContainer>
  );
};

const SnsTabContainer = styled.div``;

export default SnsTab;

const StyledContainer = styled.div`
  background: rgba(248, 248, 248, 0.97);
  width: 100vw;
  padding: 100px 0px;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  gap: 50px;
  grid-template-rows: auto auto;
`;

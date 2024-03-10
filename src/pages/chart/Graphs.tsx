import styled from 'styled-components';
import { Card } from '../../components/common-components/Card/Card';
import AgeChart from '../../components/chart/AgeChart';
import WeekChart from '../../components/chart/WeekChart';
import MonthChart from '../../components/chart/MonthChart';
import SexChart from './../../components/chart/SexChart';
import MonthData from '../../components/chart/MonthData';
import SexData from '../../components/chart/SexData';
import AgeData from '../../components/chart/AgeData';
import WeekData from '../../components/chart/WeekData';
import { CardGraph } from './GraphCard';
import KeywordChart from '../../components/chart/KeywordChart';
import { KeywordCompare } from '../searchAnalysis/KeywordCompare';

interface ChartContainerProps {
  rightAlign?: boolean;
  SexChart?: boolean;
}

interface MyComponentProps {}

export const GraphCard: React.FC<MyComponentProps> = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Card title="검색통계">
          <CardContainer>
            <GraphContainer>
              <CardGraph
                title="연령별 검색 비율"
                subTitle="가 가장 많이 검색했네요!"
                additionalText={<AgeData />}
              >
                <ChartContainer rightAlign>
                  <AgeChart />
                </ChartContainer>
              </CardGraph>
              <CardGraph
                title="성별 검색 비율"
                subTitle="이 더 많이 검색했네요!"
                additionalText={<SexData />}
              >
                <ChartContainer rightAlign>
                  <SexChart />
                </ChartContainer>
              </CardGraph>
            </GraphContainer>
            <GraphContainer>
              <CardGraph
                title="월별 검색 비율"
                subTitle="에 가장 많이 검색했네요!"
                additionalText={<MonthData />}
              >
                <ChartContainer>
                  <MonthChart />
                </ChartContainer>
              </CardGraph>
              <CardGraph
                title="요일별 검색 비율"
                subTitle="요일에 가장 많이 검색했네요!"
                additionalText={<WeekData />}
              >
                <ChartContainer>
                  <WeekChart />
                </ChartContainer>
              </CardGraph>
            </GraphContainer>
          </CardContainer>
        </Card>
        <Card
          title="검색 통계"
          subTitle="그래프를 클릭하면 해당 월의 일간 상세 검색량을 볼 수 있습니다."
        >
          <CardGraph title="키워드 검색량 추이">
            <ChartContainer>
              <KeywordChart />
            </ChartContainer>
          </CardGraph>
        </Card>
        <KeywordCompare />
      </InnerContainer>
    </StyledContainer>
  );
};

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

const CardContainer = styled.div`
  overflow: hidden;
`;

const GraphContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin: 25px 0;
`;

const ChartContainer = styled.div<ChartContainerProps>`
  display: flex;
  justify-content: ${(props) => (props.rightAlign ? 'flex-end' : 'flex-start')};
  margin-left: ${(props) =>
    props.rightAlign && !props.SexChart ? '0' : '20px'};
`;

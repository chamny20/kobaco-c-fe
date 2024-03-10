import { useEffect, useState } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from 'recharts';
import { getTrendTime } from '../../api/trend';
import { Modal } from '../common-components/Modal';
import modal from '../../assets/chart/modalGraph.png';

const KeywordChart = () => {
  const [chartData, setChartData] = useState([]);

  const gradientColors = [
    { offset: '5%', color: '#D33B4D', opacity: 0.8 },
    { offset: '95%', color: '#D33B4D', opacity: 0 },
  ];

  const fetchData = async () => {
    try {
      const response = await getTrendTime({ trendKwd: '원피스' });
      const apiData = response.data;

      const transformedData = apiData.monthStatisticResponseList.map(
        (item: { month: string; ratio: number }) => ({
          name: item.month,
          uv: item.ratio * 5,
        })
      );

      setChartData(transformedData);
    } catch (error) {
      console.error('Error fetching trend time data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [selectedMonth, setSelectedMonth] = useState<boolean>(false);

  // YAxis 클릭 이벤트 처리 함수
  const handleYAxisClick = () => {
    setSelectedMonth(true);
  };

  return (
    <>
      <AreaChart
        width={1100}
        height={694}
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={color.offset}
                stopColor={color.color}
                stopOpacity={color.opacity}
              />
            ))}
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#A0A0A0" />
        <YAxis
          tickFormatter={(value) => `${value}`}
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
        />
        <CartesianGrid strokeDasharray="7 7" vertical={false} /> <Tooltip />
        <Area
          type="linear"
          dataKey="uv"
          stroke="#D33B4D"
          fillOpacity={1}
          fill="url(#colorUv)"
          dot={{ stroke: '#D33B4D', strokeWidth: 2, r: 2 }}
          onClick={() => handleYAxisClick()}
        />
      </AreaChart>
      {selectedMonth && (
        <Modal open={selectedMonth} onClose={() => setSelectedMonth(false)}>
          <Modal.Top onClick={() => setSelectedMonth(false)} title="검색량" />
          <Modal.Body>
            <img src={modal} alt="" />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default KeywordChart;

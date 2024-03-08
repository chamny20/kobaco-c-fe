import React, { useState } from 'react';
import { PieChart, PieChartProps } from 'react-minimal-pie-chart';

interface PieChart extends PieChartProps {
  data: { title: string; value: number; color: string }[];
}

const FullOption: React.FC<PieChart> = ({ data, ...props }) => {
  const [internalHovered, setInternalHovered] = useState<number | undefined>(
    undefined
  );

  const datas = data.map((entry, i) => {
    if (internalHovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const lineWidth = 50;

  return (
    <PieChart
      {...props}
      data={datas}
      radius={20}
      lineWidth={lineWidth}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === internalHovered ? 6 : 1)}
      animate
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage ?? 0)}%`}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: '#fff',
        opacity: 0.75,
        pointerEvents: 'none',
        fontSize: 3,
      }}
      onMouseOver={(_, index) => {
        setInternalHovered(index);
      }}
      onMouseOut={() => {
        setInternalHovered(undefined);
      }}
    />
  );
};

const chartData = [
  { title: 'One', value: 67, color: '#D33B4D' },
  { title: 'Two', value: 33, color: '#81A5DA' },
];

const SexChart: React.FC = () => {
  return (
    <div>
      <FullOption data={chartData} />
    </div>
  );
};

export default SexChart;

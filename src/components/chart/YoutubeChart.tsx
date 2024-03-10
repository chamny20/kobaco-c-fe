import React, { useEffect, useState } from 'react';

interface TagInfo {
  name: string;
}

const tagInfoResponseList: string[] = [
  '투피스',
  '데이트',
  '상견례',
  '결혼식',
  '여친룩',
  '오프숄더',
  '홀터넥',
  '자켓',
  '치마',
];

interface TagNodeProps {
  tagInfo: TagInfo;
}

const getRandomPosition = (
  existingPositions: { left: number; top: number }[],
  containerWidth: number,
  containerHeight: number
): { left: string; top: string } => {
  const maxAttempts = 100;
  let left: number, top: number;
  let attempt = 0;

  do {
    const nodeSize = 50;
    left = Math.random() * (containerWidth - nodeSize);
    top = Math.random() * (containerHeight - nodeSize);
    attempt++;
  } while (
    existingPositions.some(
      (pos) =>
        left < pos.left + 100 &&
        left + 100 > pos.left &&
        top < pos.top + 100 &&
        top + 100 > pos.top
    ) &&
    attempt < maxAttempts
  );

  if (attempt < maxAttempts) {
    existingPositions.push({ left, top });
    return { left: `${left}px`, top: `${top}px` };
  }

  left = Math.random() * (containerWidth - 100);
  top = Math.random() * (containerHeight - 100);

  existingPositions.push({ left, top });
  return { left: `${left}px`, top: `${top}px` };
};

const getRandomSize = (): number => {
  return Math.floor(Math.random() * 30) + 50;
};

const getRandomColor = (): string => {
  const colors = ['#B41729', '#d33b4d', '#dc6271', '#F2C4CA'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const TagNode: React.FC<TagNodeProps> = ({ tagInfo }) => {
  const [position, setPosition] = useState({ left: '0px', top: '0px' });

  useEffect(() => {
    const existingPositions: { left: number; top: number }[] = [];

    setPosition(() =>
      getRandomPosition(
        existingPositions,
        Math.min(window.innerWidth, 1000),
        Math.min(window.innerHeight, 800)
      )
    );
  }, []);

  const nodeStyle: React.CSSProperties = {
    display: 'inline-block',
    position: 'absolute',
    ...position,
    margin: '10px',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: getRandomColor(),
    color: 'white',
    fontSize: `${getRandomSize()}px`,
  };

  return <div style={nodeStyle}>{tagInfo.name}</div>;
};

const TagGraph: React.FC = () => {
  const tagsToDisplay = tagInfoResponseList.slice(
    0,
    Math.floor(Math.random() * 3) + 8
  );

  return (
    <div style={{ position: 'relative', width: '1000px', height: '800px' }}>
      {tagsToDisplay.map((tagName, index) => (
        <TagNode key={index} tagInfo={{ name: tagName }} />
      ))}
    </div>
  );
};

export default TagGraph;

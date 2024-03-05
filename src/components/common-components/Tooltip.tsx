import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

interface TooltipProps {
  content: string;
}

const Tooltips: React.FC<TooltipProps> = ({ content }) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleXClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    handleTooltipClose();
  };

  return (
    <>
      <Tooltip
        title={
          <div
            style={{
              fontSize: '16px',
              display: 'flex',
              fontFamily: 'Pretendard',
              alignItems: 'center',
            }}
          >
            <div style={{ marginRight: '10px' }}>{content}</div>
            <span
              style={{
                cursor: 'pointer',
              }}
              onClick={handleXClick}
            >
              x
            </span>
          </div>
        }
        placement="bottom-end"
        arrow
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={tooltipOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <h2
          style={{ cursor: 'pointer' }}
          onClick={() => setTooltipOpen(!tooltipOpen)}
        >
          tooltip
        </h2>
      </Tooltip>
    </>
  );
};

export default Tooltips;

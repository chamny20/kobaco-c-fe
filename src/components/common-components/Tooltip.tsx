import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from './Button/Button';

interface TooltipProps {
  content: string;
  direction:
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end';
}

const Tooltips: React.FC<TooltipProps> = ({ content, direction }) => {
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
        placement={direction}
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
        <Button
          style={{
            width: '32px',
            height: '32px',
            cursor: 'pointer',
          }}
          onClick={() => setTooltipOpen(!tooltipOpen)}
        >
          tooltip
        </Button>
      </Tooltip>
    </>
  );
};

export default Tooltips;

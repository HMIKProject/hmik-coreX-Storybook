import React from 'react';
import './TapeCard.css';
import Tape1Icon from '../icon/Tape1Icon';
import Tape2Icon from '../icon/Tape2Icon';
import Typography from '../typography/Typography';

const TapeCard = ({
  title,
  children,
  variant = 'blue', // 'blue' | 'yellow'
  tapeType = '1',   // '1' (yellow tape) | '2' (blue tape)
  className = '',
}) => {
  return (
    <div className={`tape-card tape-card--${variant} ${className}`}>
      <div className="tape-card-decoration">
        {tapeType === '1' ? (
          <Tape1Icon width={265} height={57} />
        ) : (
          <Tape2Icon width={265} height={57} />
        )}
      </div>
      <div className="tape-card-content">
        <Typography variant="heading2" className="tape-card-title">
          {title}
        </Typography>
        <Typography variant="body" className="tape-card-body">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default TapeCard;

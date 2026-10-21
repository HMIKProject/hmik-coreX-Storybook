import React from 'react';
import './TextCard.css';
import Typography from '../typography/Typography';
import IdeaIcon from '../icon/IdeaIcon';

const TextCard = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`text-card ${className}`}>
      <div className="text-card-header">
        {icon ? icon : <IdeaIcon width={24} height={24} />}
        <Typography variant="heading3" className="text-card-title">
          {title}
        </Typography>
      </div>
      <div className="text-card-body">
        {typeof children === 'string' ? (
          <Typography variant="body" className="text-card-paragraph">
            {children}
          </Typography>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default TextCard;

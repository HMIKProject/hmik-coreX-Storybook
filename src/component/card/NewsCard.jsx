import React from 'react';
import './NewsCard.css';
import Typography from '../typography/Typography';

/**
 * NewsCard Component
 * Mendukung varian: 'default', dam 'profile'
 */
export const NewsCard = ({ image, title, date, subtitle, variant = 'default' }) => {
  const cardClassName = `news-card ${variant === 'profile' ? 'news-card--profile' : ''}`;

  return (
    <div className={cardClassName}>
      <div className="news-card-image-container">
        <img src={image} alt={title} className="news-card-image" />
      </div>
      <div className="news-card-content">
        
        <Typography variant="heading3" className="news-card-title">
          {title}
        </Typography>

        {variant === 'profile' && subtitle ? (
          <Typography variant="body" className="news-card-subtitle">
            {subtitle}
          </Typography>
        ) : date ? (
          <Typography variant="caption" className="news-card-date">
            {date}
          </Typography>
        ) : null}
        
      </div>
    </div>
  );
};
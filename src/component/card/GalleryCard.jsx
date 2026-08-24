import React from 'react';
import './GalleryCard.css';
import Typography from '../typography/Typography';

/**
 * GalleryCard Component
 * Mendukung varian: 'default', 'avatar', dan 'overlay'
 */
export const GalleryCard = ({ image, title, subtitle, variant = 'default' }) => {
  // Class dinamis yang otomatis merender nama varian, contoh: 'gallery-card--overlay'
  const cardClassName = `gallery-card ${variant !== 'default' ? `gallery-card--${variant}` : ''}`;

  return (
    <div className={cardClassName}>
      <div className="gallery-card-image-wrapper">
        <img src={image} alt={title} className="gallery-card-image" />
      </div>
      <div className="gallery-card-content">
        
        <Typography variant="heading3" className="gallery-card-title">
          {title}
        </Typography>
        
        {subtitle && (
          <Typography variant="body" className="gallery-card-subtitle">
            {subtitle}
          </Typography>
        )}
        
      </div>
    </div>
  );
};
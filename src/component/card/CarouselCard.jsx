import React from 'react';
import './CarouselCard.css';
import CarouselBg from '../../assets/CarouselCard.svg';
import ProkerBg from '../../assets/prokerfoto.svg';
import Typography from '../typography/Typography';
import AstarIcon from '../icon/4starIcon';

const CarouselCard = ({ image, title, description, onPrev, onNext }) => {
  return (
    <div className="carousel-card-container">
      <img src={CarouselBg} alt="Carousel Background" className="carousel-card-bg" />
      
      {/* Ornamen Bintang di pojok kanan atas */}
      <div className="carousel-stars-ornament">
        <AstarIcon width={80} height={80} />
      </div>
      
      {/* Tombol Navigasi */}
      <button className="carousel-nav-btn carousel-nav-btn--prev" onClick={onPrev}>
        &#10094;
      </button>
      <button className="carousel-nav-btn carousel-nav-btn--next" onClick={onNext}>
        &#10095;
      </button>

      {/* Konten dengan key untuk trigger animasi CSS saat ganti slide */}
      <div className="carousel-card-content" key={title}>
        {/* Gambar Kiri */}
        <div className="carousel-image-section">
          <div className="carousel-image-wrapper">
            <img src={ProkerBg} alt="Proker Frame" className="carousel-proker-bg" />
            <div className="carousel-proker-content">
              <img src={image} alt={title} className="carousel-proker-photo" />
              <div className="carousel-proker-title">
                {title}
              </div>
            </div>
          </div>
        </div>

        {/* Teks Kanan */}
        <div className="carousel-text-section">
          <Typography variant="body" className="carousel-description">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

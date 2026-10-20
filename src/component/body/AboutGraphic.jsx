import React from 'react';
import './AboutGraphic.css';
import LogoHmik from '../icon/LogoHmik';
import StarIcon from '../icon/StarIcon';
import YellowStarIcon from '../icon/YellowStarIcon';
import AstarIcon from '../icon/4starIcon';

const AboutGraphic = ({ className = '' }) => {
  return (
    <div className={`about-graphic ${className}`}>
      <div className="about-graphic-circle">
        {/* Logo Utama HMIK dengan persentase agar proporsional dan lebih besar */}
        <LogoHmik width="85%" height="85%" />
        
        {/* Dekorasi Bintang Biru (Kiri Bawah) */}
        <div className="about-star-blue">
          <AstarIcon width={40} height={40} />
        </div>
        
        {/* Dekorasi Bintang Kuning (Kanan Atas) */}
        <div className="about-star-yellow">
          <StarIcon width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default AboutGraphic;

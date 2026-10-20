import React from 'react';
import './PengurusCard.css';
import Typography from '../typography/Typography';
import KetuaBg from '../../assets/card_pengurus_ketua.svg';

const PengurusCard = ({ variant = 'anggota', image, name, role = 'Anggota' }) => {
  const isKetua = variant === 'ketua';
  
  return (
    <div className={`pengurus-card pengurus-card--${variant}`}>
      {isKetua && <img src={KetuaBg} alt="bg" className="pengurus-card-bg" />}
      
      <div className="pengurus-card-content">
        <div className="pengurus-card-image-container">
          <img src={image} alt={name} className="pengurus-card-image" />
        </div>
        <Typography variant="heading3" className="pengurus-card-name">
          {name}
        </Typography>
        <button className="pengurus-card-btn">
          {role}
        </button>
      </div>
    </div>
  );
};

export default PengurusCard;

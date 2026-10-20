import React from 'react';
import './OrgChartNode.css';
import Typography from '../typography/Typography';
import RectangularBg from '../../assets/Rectangularkuning.svg';
import CircularBg from '../../assets/circularbiru.svg';

const OrgChartNode = ({ variant = 'rectangular', icon, title, onClick }) => {
  const isCircular = variant === 'circular';
  const bgImage = isCircular ? CircularBg : RectangularBg;

  return (
    <div 
      className={`org-chart-node org-chart-node--${variant} ${onClick ? 'org-chart-node--clickable' : ''}`}
      onClick={onClick}
    >
      {/* Gunakan img tag dengan position absolute sebagai ganti background-image */}
      <img src={bgImage} alt="Node Background" className="org-chart-node-bg" />
      
      <div className="org-chart-node-content">
        {icon && <div className="org-chart-node-icon">{icon}</div>}
        <Typography variant="body" className="org-chart-node-title">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default OrgChartNode;

import React from 'react';

const AnalysisCard = ({ title, imageUrl }) => {
  return (
    <div className="analysis-card">
      <img src={imageUrl} alt={title} className="analysis-image" />
      <div className="analysis-title">{title}</div>
    </div>
  );
};

export default AnalysisCard;
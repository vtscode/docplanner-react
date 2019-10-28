import React from 'react'

const FeatureCard = ({icon, title, description}) =>
  <div className="feature-card">
    <img src={icon} alt="feature" />
    <h2 className="feature-card-title">{title}</h2>
    <p className="feature-card-description">
      {description}
    </p>
  </div>
  
export default FeatureCard
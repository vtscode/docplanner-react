import React from 'react'

const ServiceCard = ({innerJsx, service : {background, category, title, image}}) =>
  <div className='service-card' style={{background: background}}>
    <p className='category'>{category}</p>
    <h1 className='title'>{title}</h1>
    { innerJsx }
    <img className='screenshot' src={image} alt="service" />
  </div>
  
export default ServiceCard
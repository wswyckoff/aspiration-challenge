import React from 'react'

const CarouselSlide = ({author, id, location, quote}) => (
  <li className={`carousel-slide ${id}`}>
    <blockquote className="carousel-slide-quote">{quote}</blockquote>
    <cite className="carousel-slide-author">{author}</cite>
    <p className="carousel-slide-location">{location}</p>
  </li>
)

export default CarouselSlide

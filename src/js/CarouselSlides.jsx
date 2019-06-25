import React from 'react'

import CarouselSlide from './CarouselSlide'

const CarouselSlides = ({slides}) => (
  <ul className="carousel-slides">
    {slides.map(slide => <CarouselSlide key={slide.id} {...slide} />)}
  </ul>
)

export default CarouselSlides

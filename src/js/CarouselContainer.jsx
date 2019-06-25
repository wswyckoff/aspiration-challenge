import React from 'react';
import '../css/master-styles.css';
import {title, slides} from '../config.json'

import CarouselHeader from './CarouselHeader'
import CarouselSlides from './CarouselSlides'
import TestimonialLegal from './TestimonialLegal'

const CarouselContainer = () => (
  <section className="carousel-container">
    <div className="carousel-inner">
      <CarouselHeader title={title} />
      <CarouselSlides slides={slides} />
      <TestimonialLegal />
    </div>
  </section>
)

export default CarouselContainer

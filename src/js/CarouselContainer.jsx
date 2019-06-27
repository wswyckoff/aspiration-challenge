import React, {useState} from 'react';
import '../css/master-styles.css';
import {title, slides} from '../config.json'

import CarouselHeader from './CarouselHeader'
import CarouselNav from './CarouselNav'
import CarouselSlides from './CarouselSlides'
import TestimonialLegal from './TestimonialLegal'

const CarouselContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSetCurrentSlide = (slide) => setCurrentSlide(slide)

  return (
    <section className="carousel-container">
      <div className="carousel-inner">
        <CarouselHeader title={title} />
        <CarouselSlides
          currentSlide={currentSlide}
          setCurrentSlide={handleSetCurrentSlide}
          slides={slides}
        />
        <CarouselNav
          currentSlide={currentSlide}
          setCurrentSlide={handleSetCurrentSlide}
          slides={slides}
        />
        <TestimonialLegal />
      </div>
    </section>
  )
}

export default CarouselContainer

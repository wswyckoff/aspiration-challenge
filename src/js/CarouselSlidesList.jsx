import PropTypes from 'prop-types'
import React from 'react'

import CarouselSlidesListItem from './CarouselSlidesListItem'

const CarouselSlidesList = ({
  currentSlide,
  onTouchEnd,
  onTouchStart,
  slides,
}) => (
  <ul className="carousel-slides-list">
    {slides.map(slide =>
      <CarouselSlidesListItem
        key={slide.id}
        currentSlide={currentSlide}
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
        {...slide}
      />
    )}
  </ul>
)

CarouselSlidesList.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}

export default CarouselSlidesList

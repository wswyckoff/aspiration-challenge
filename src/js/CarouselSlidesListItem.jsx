import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const CarouselSlidesListItem = ({
  author,
  currentSlide,
  id,
  location,
  onTouchEnd,
  onTouchStart,
  quote,
}) => (
  <li
    className={classNames('carousel-slides-list-item', {
      'is--current': currentSlide === id,
      'is--next': currentSlide < id,
      'is--prev': currentSlide > id,
      'is--mod': id - currentSlide === 2 || id - currentSlide === -2,
    })}
    onTouchEnd={onTouchEnd}
    onTouchStart={onTouchStart}
  >
    <blockquote className="carousel-slides-list-item-quote">{quote}</blockquote>
    <cite className="carousel-slides-list-item-author">{author}</cite>
    <p className="carousel-slides-list-item-location">{location}</p>
  </li>
)

CarouselSlidesListItem.propTypes = {
  author: PropTypes.string.isRequired,
  currentSlide: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  onTouchEnd: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
}

export default CarouselSlidesListItem

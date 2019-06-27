import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const CarouselNav = ({
  currentSlide,
  setCurrentSlide,
  slides,
}) => (
  <nav className="carousel-nav" aria-label="mobile-slide-nav-menu">
    <ul>
      {slides.map(slide =>
        <li
          key={slide.id}
          className={classNames('carousel-nav-item', {
            'is--current': currentSlide === slide.id,
          })}
          onClick={() => setCurrentSlide(slide.id)}
        />
      )}
    </ul>
  </nav>
)

CarouselNav.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}

export default CarouselNav

import PropTypes from 'prop-types'
import React from 'react'

const CarouselHeader = ({title}) => (
  <header className="carousel-header">
    <h2 className="carousel-container-title">{title}</h2>
  </header>
)

CarouselHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CarouselHeader

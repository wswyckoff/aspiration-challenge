import PropTypes from 'prop-types'
import React, {useState} from 'react'
import CarouselSlidesList from './CarouselSlidesList'

let dist
let startX = 0
const thresholdLeft = -50
const thresholdRight = 50

const CarouselSlides = ({
  currentSlide,
  setCurrentSlide,
  slides,
}) => {
  const [swipeDirection, setSwipeDirection] = useState('')

  const handleSetSwipe = () => {
    const leftMax = 0
    const rightMax = slides.length - 1

    if (swipeDirection === 'right' && currentSlide > leftMax) {
      // we swiped to the right, decrease visible slide by 1
      setCurrentSlide(currentSlide => currentSlide - 1)
    } else if (swipeDirection === 'left' && currentSlide < rightMax)  {
      // we swiped to the left, increase visible slide by 1
      setCurrentSlide(currentSlide => currentSlide + 1)
    }
  }

  const handleTouchEnd = e => {
    const touch = e.changedTouches[0]
    // save distance of swipe
    dist = parseInt(touch.clientX) - startX
    if (dist > thresholdRight) {
      setSwipeDirection('right')
      handleSetSwipe()
    } else if (dist < thresholdLeft) {
      setSwipeDirection('left')
      handleSetSwipe()
    } else {
      // not a good swipe
      return false
    }
  }

  const handleTouchStart = e => {
    // get first touch point
    const touch = e.changedTouches[0]
    // get start location
    startX = parseInt(touch.clientX)
  }

  return (
    <div className="carousel-slides">
      <CarouselSlidesList
        currentSlide={currentSlide}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
        slides={slides}
      />
    </div>
  )
}

CarouselSlides.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}

export default CarouselSlides

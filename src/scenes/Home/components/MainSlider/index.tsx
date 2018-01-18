import * as React from 'react'
import Slider from 'react-slick'

import { ImageSharp } from 'graphql-types'

import MainSlide, { IMainSlide } from './MainSlide'

interface IMainsSlidesProps {
  slides: IMainSlide[]
}

const MainsSlide: React.StatelessComponent<IMainsSlidesProps> = ({ slides }) => {
  return (
    <Slider
      arrows={false}
      infinite
      autoplay
      autoplaySpeed={5000}
    >
      {slides.sort((a, b) => a.order - b.order).map(slideProps => (
        <div key={slideProps.title}>
          <MainSlide {...slideProps} />
        </div>
      ))}
    </Slider>
  )
}

export default MainsSlide

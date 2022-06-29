import React from 'react'
import Photo1 from '../image/Photo1.jpg'
import Photo2 from '../image/Photo2.jpg'
import Photo3 from '../image/Photo3.jpg'
import Photo4 from '../image/Photo4.jpg'
import Photo5 from '../image/Photo5.jpg'
import Photo6 from '../image/Photo6.jpg'
import Photo7 from '../image/Photo7.jpg'
import Photo8 from '../image/Photo8.jpg'
import Photo9 from '../image/Photo9.jpg'
import Photo10 from '../image/Photo10.jpg'

import InfiniteCarousel from 'react-leaf-carousel';

export const Photo = () => {
  return (
    <div>
     <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.2}
    slidesToScroll={2}
    slidesToShow={2}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src={Photo1}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo2}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo3}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo4}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo5}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo6}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo7}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo8}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo9}
      />
    </div>
    <div>
      <img
        alt=''
        src={Photo10}
      />
    </div>
  </InfiniteCarousel>
  </div>
  )
}

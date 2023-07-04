import React, { Component } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/Gallery.css";

import { GALLERY_IMAGES } from "../utils/gallery-utils";

class Gallery extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div class="gallery">
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation
        breakpoints={{
          // when window width is >= 750px
          750: {
            spaceBetween: 50,
            slidesPerView: 3
          }
        }}
        >
        {GALLERY_IMAGES.map(image => 
          <SwiperSlide>
            <img className="gallery-image" src={`${image.src}`} alt={`${image.src}`} />
          </SwiperSlide>)}
        </Swiper>
      </div>
    );
  }
}

export default Gallery;

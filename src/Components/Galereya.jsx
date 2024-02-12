import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// images

import img1 from '../Images/Galereya/1.jpg'
import img2 from '../Images/Galereya/2.jpg'
import img3 from '../Images/Galereya/3.jpg'
import img4 from '../Images/Galereya/4.jpg'
import img5 from '../Images/Galereya/5.jpg'
import img6 from '../Images/Galereya/6.jpg'
import img7 from '../Images/Galereya/7.jpg'
import img8 from '../Images/Galereya/8.jpg'
import img9 from '../Images/Galereya/9.jpg'


export default function Galereya() {
  return (
    <section className='Galereya'>
      <div className="container">
        <h2>МОМЕНТЫ ИЗ РАБОЧЕГО ПРОЦЕССА</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='block'>
            <img src={img1} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img2} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img3} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img4} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img5} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img6} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img7} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img8} alt="cars" />
          </SwiperSlide>

          <SwiperSlide className='block'>
            <img src={img9} alt="cars" />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  )
}

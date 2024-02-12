import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import User from '../Images/user.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Comments() {
  return (
    <section id='Comments' className='Comments'>
      <div className="container">
        <h2>Отзывы</h2>
        <Swiper
          slidesPerView={2.2}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={User} alt="user-icon" />
                  <h3>САРДОР ИБРАГИМОВ</h3>
                </div>

                <p className='comment-txt'>Если кому-то требуется адекватная по цене и быстрая грузовая эвакуация могу с чистой совестью рекомендовать данную компанию. Работаем с ними третий год все полностью устраивает Хорошее время подачи и большой автопарк</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={User} alt="user-icon" />
                  <h3>САРДОР ИБРАГИМОВ</h3>
                </div>

                <p className='comment-txt'>Если кому-то требуется адекватная по цене и быстрая грузовая эвакуация могу с чистой совестью рекомендовать данную компанию. Работаем с ними третий год все полностью устраивает Хорошее время подачи и большой автопарк</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={User} alt="user-icon" />
                  <h3>САРДОР ИБРАГИМОВ</h3>
                </div>

                <p className='comment-txt'>Если кому-то требуется адекватная по цене и быстрая грузовая эвакуация могу с чистой совестью рекомендовать данную компанию. Работаем с ними третий год все полностью устраивает Хорошее время подачи и большой автопарк</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={User} alt="user-icon" />
                  <h3>САРДОР ИБРАГИМОВ</h3>
                </div>

                <p className='comment-txt'>Если кому-то требуется адекватная по цене и быстрая грузовая эвакуация могу с чистой совестью рекомендовать данную компанию. Работаем с ними третий год все полностью устраивает Хорошее время подачи и большой автопарк</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={User} alt="user-icon" />
                  <h3>САРДОР ИБРАГИМОВ</h3>
                </div>

                <p className='comment-txt'>Если кому-то требуется адекватная по цене и быстрая грузовая эвакуация могу с чистой совестью рекомендовать данную компанию. Работаем с ними третий год все полностью устраивает Хорошее время подачи и большой автопарк</p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  )
}

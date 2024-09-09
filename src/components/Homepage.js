import React from 'react'
import Header from './Header'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import About from './About';
import WhatIdo from './WhatIdo';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

export default function Homepage() {
  return (
    <div className='HomepageSection'>
      <Header />
      <div className="slider">
          <Swiper
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='slides'>
             <h1>Frontend Developer</h1>
          </SwiperSlide>
          <SwiperSlide className='slides'>
            <h1>Graphic Designer</h1>
          </SwiperSlide>
          <SwiperSlide className='slides'>
             <h1>Web Designer</h1>
          </SwiperSlide>
          <SwiperSlide className='slides'>
             <h1>Freelancer</h1>
          </SwiperSlide>
        </Swiper>
      </div>
      <About />
      <WhatIdo />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

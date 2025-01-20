import React from 'react'
import '../Line1/L1.css'
import {Swiper} from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation} from 'swiper/modules';

import Hou1 from '../../assets/house1.jpg'
import Hou2 from '../../assets/house2.jpg'
import Hou3 from '../../assets/house3.jpg'
import Hou4 from '../../assets/house4.jpg'
import Hou5 from '../../assets/house5.jpg'
import Hou6 from '../../assets/house6.jpg'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const L1 = () => {
  return (
    <div className="ln1content">
        <h1 className="ln1text">Discover Real Estate Best Deals</h1>
    <div className='slider-container'>
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2.9}
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 150,
            modifier: 5.5,
            slideShadows: false
          }}
          navigation={{
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow,Navigation]}
          
          >
            
            <SwiperSlide><div className="hou-fea"><img src={Hou1} alt="" />
            <div className="hou-fea-text">
            <div className="featue">FEATURED</div>
            <div className="forsle">FOR SALE</div>
            <div className="Amout">$170,000/N170,000,000 <FaRegArrowAltCircleRight/></div>
            <div className="perviw">4 Bedroom Semi-Detached Duplex...</div>
            </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="hou-fea"><img src={Hou2} alt="" />
            <div className="hou-fea-text">
            <div className="featue">FEATURED</div>
            <div className="forsle">FOR SALE</div>
            <div className="Amout">$170,000/N170,000,000 <FaRegArrowAltCircleRight/></div>
            <div className="perviw">4 Bedroom Semi-Detached Duplex...</div>
            </div></div></SwiperSlide>
            <SwiperSlide><div className="hou-fea"><img src={Hou3} alt="" />
            <div className="hou-fea-text">
            <div className="featue">FEATURED</div>
            <div className="forsle">FOR SALE</div>
            <div className="Amout">$170,000/N170,000,000 <FaRegArrowAltCircleRight/></div>
            <div className="perviw">4 Bedroom Semi-Detached Duplex...</div>
            </div></div></SwiperSlide>
            <SwiperSlide><div className="hou-fea"><img src={Hou4} alt="" />
            <div className="hou-fea-text">
            <div className="featue">FEATURED</div>
            <div className="forsle">FOR SALE</div>
            <div className="Amout">$170,000/N170,000,000 <FaRegArrowAltCircleRight/></div>
            <div className="perviw">4 Bedroom Semi-Detached Duplex...</div>
            </div></div></SwiperSlide>
            <SwiperSlide><div className="hou-fea"><img src={Hou5} alt="" />
            <div className="hou-fea-text">
            <div className="featue">FEATURED</div>
            <div className="forsle">FOR SALE</div>
            <div className="Amout">$170,000/N170,000,000 <FaRegArrowAltCircleRight/></div>
            <div className="perviw">4 Bedroom Semi-Detached Duplex...</div>
            </div></div></SwiperSlide>
            <SwiperSlide><div className="hou-fea"><img src={Hou6} alt="" />
            <div className="hou-fea-text">
            <div className="featue">FEATURED</div>
            <div className="forsle">FOR SALE</div>
            <div className="Amout">$170,000/N170,000,000 <FaRegArrowAltCircleRight/></div>
            <div className="perviw">4 Bedroom Semi-Detached Duplex...</div>
            </div></div></SwiperSlide>
            
            
            <div className="slider-nav">
                <div className="slider-button-prev">
                    Prev
                </div>
                <div className="slider-button-next">
                    Next
                </div>
            </div>
          </Swiper>
        </div>
        </div>
  )
}

export default L1

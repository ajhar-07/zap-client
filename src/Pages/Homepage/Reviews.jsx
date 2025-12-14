import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Reviews = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        axios.get('/reviews.json')
        .then(data=>{
            setReviews(data.data)
        })
        .catch(error=>{
            console.log(error);
            
        })
    },[])

    console.log(reviews);
    
    return (
          <>
    <Swiper
  effect="coverflow"
  grabCursor
  centeredSlides
  slidesPerView="auto"
  loop
  loopAdditionalSlides={reviews.length}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    
  }}
  coverflowEffect={{
    rotate: 20,
    stretch: 0,
    depth: 120,
    modifier: 4,
    slideShadows: true,
    
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
>


      {reviews.map((review, i) => (
  <SwiperSlide key={i} className="">
    <div className="card w-200 h-[250px] mx-auto bg-base-100 shadow-xl bg">
      <div className="card-body text-center">
        <h2 className="card-title justify-center">
          {review.userName}
        </h2>
        <p>{review.review}</p>
      </div>
    </div>
  </SwiperSlide>
))}

    
       
      </Swiper>
    </>
    );
};

export default Reviews;
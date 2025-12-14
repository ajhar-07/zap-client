import React from 'react';
import Marquee from 'react-fast-marquee';
import brand1 from '../../assets/brands/amazon.png'
import brand2 from '../../assets/brands/amazon_vector.png'
import brand3 from '../../assets/brands/casio.png'
import brand4 from '../../assets/brands/moonstar.png'
import brand5 from '../../assets/brands/randstad.png'
import brand6 from '../../assets/brands/star.png'
import brand7 from '../../assets/brands/start_people.png'
const Brands = () => {
    return (
        <div>
           <Marquee loop={0} gradient={true}  gradientWidth={100} className='rounded-3xl'>
         <div className='flex gap-20 my-5'>
            <img src={brand1} alt="" srcset="" />
            <img src={brand2} alt="" srcset="" />
            <img src={brand3} alt="" srcset="" />
            <img src={brand4} alt="" srcset="" />
            <img src={brand5} alt="" srcset="" />
            <img src={brand6} alt="" srcset="" />
            <img src={brand7} alt="" srcset="" />
         </div>
          </Marquee>  
        </div>
    );
};

export default Brands;
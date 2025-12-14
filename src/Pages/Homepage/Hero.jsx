import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../assets/banner/banner1.png'
import bannerImg2 from '../../assets/banner/banner2.png'
import bannerImg3 from '../../assets/banner/banner3.png'
const Hero = () => {
    return (
         <Carousel autoPlay={true} interval={2500} 
         infiniteLoop={true} showArrows={false}
         showStatus={false}
         showThumbs={false}>
                <div>
                    <img src={bannerImg1} />
                  
                </div>
                <div>
                    <img src={bannerImg2} />
                   
                </div>
                <div>
                    <img src={bannerImg3} />
                  
                </div>
            </Carousel>
    );
};

export default Hero;
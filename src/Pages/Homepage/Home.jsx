import React from 'react';
import Hero from './Hero';
import Howitswork from './Howitswork';
import Services from './Services';
import Brands from './Brands';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            {/* -----Hero/Banner */}
         <div className='my-10'>
            <Hero></Hero>
            </div>   
      <div>
        <Howitswork></Howitswork>
      </div>


        <div>
            <Services></Services>
        </div>
 

     <div className='my-10'>
        <Brands></Brands>
     </div>

     <div className='my-10'>
        <Reviews></Reviews>
     </div>
        </div>
    );
};

export default Home;
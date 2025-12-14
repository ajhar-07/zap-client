import React from 'react';
import logoicon from '../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex  items-end  '>
           <img src={logoicon} alt="" srcset="" /> 
           <p className='font-bold -ms-2.5'>ZapShift</p>
        </div>
    );
};

export default Logo;
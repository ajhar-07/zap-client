import React from 'react';
import Card from './Card';
import { CiDeliveryTruck } from 'react-icons/ci';

const Howitswork = () => {

    const works=[
        {icon:<CiDeliveryTruck />,
         title:"Booking pik & Drop",
         des:"Render a custom item. Receives an item of the carousel, and an object with the isSelected property as arguments."
        },
        {icon:<CiDeliveryTruck />,
         title:"Booking pik & Drop",
         des:"Render a custom item. Receives an item of the carousel, and an object with the isSelected property as arguments."
        },
        {icon:<CiDeliveryTruck />,
         title:"Booking pik & Drop",
         des:"Render a custom item. Receives an item of the carousel, and an object with the isSelected property as arguments."
        },
        {icon:<CiDeliveryTruck />,
         title:"Booking pik & Drop",
         des:"Render a custom item. Receives an item of the carousel, and an object with the isSelected property as arguments."
        },

    ]
    return (
        <div>
            <h3 className='text-3xl font-bold'>How it Works</h3>
            <div className='grid grid-cols-4 gap-4 my-10'>
            {
                works.map((work,i)=><Card work={work} key={i} ></Card>)
            }
        </div>
        </div>
    );
};

export default Howitswork;
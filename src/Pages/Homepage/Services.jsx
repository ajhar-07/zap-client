import React from 'react';
import Card from './Card';
import { CiDeliveryTruck } from 'react-icons/ci';

const Services = () => {
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
        <div className='bg-secondary p-10 rounded-3xl my-10 '>
            <div className='text-center my-4'>
                <h3 className='text-white font-bold  text-3xl'>Our Services</h3>
            <p className='text-gray-200 my-3'>By default, simple arrows are rendered on each side. If you need to customize them and the css is not enough, use the renderArrowPrev and renderArrowNext. The click handler is passed as argument to the prop and needs to be added as click handler in the custom arrow.</p>
          
          
            </div>
           <div className='grid grid-cols-4 gap-3 '>
            {
                works.map((work,i)=><Card work={work} key={i}></Card>)
            }

           </div>


        </div>
    );
};

export default Services;
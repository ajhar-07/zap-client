import React from 'react';

const Card = ({work}) => {
    return (
        <div className="card bg-base-100 w-65 shadow-sm">
 
  <div className="card-body">
    <p className='text-5xl'>{work.icon}</p>
    <h2 className="card-title">{work.title}</h2>
    <p>{work.des}</p>
   
  </div>
</div>
    );
};

export default Card;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiossecure from '../../../Hooks/useAxiossecure';

const Payment = () => {
    const {id}=useParams()
    const axiosSecure=useAxiossecure()
    const{data:parcel,isLoading}=useQuery({
        queryKey:['parcels',id],
        queryFn:async()=>{
            const res= await axiosSecure.get(`/parcels/${id}`)
            return res.data
        }
        
    }
)
if(isLoading){
    return <p>Loading</p>
   }
    return (
        <div>
           <p>{parcel?.parcelName}</p> 
           <button className="btn btn-sm text-black btn-primary">Pay</button>
        </div>
    );
   
};

export default Payment;
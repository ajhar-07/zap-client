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

 const handlePayment = async () => {
  if (!parcel) return

  const paymentInfo = {
    cost: parcel.cost,
    senderEmail: parcel.senderEmail,
    parcelId: parcel._id,
    parcelName: parcel.parcelName,
  }

  const res = await axiosSecure.post(
    '/create-checkout-session',
    paymentInfo
  )

  console.log(res.data)
  window.location.href=res.data.url
}



if(isLoading){
    return <p>Loading</p>
   }


  
    return (
        <div>
           <p>{parcel?.parcelName} is buy for {parcel.cost}</p> 
           <button onClick={handlePayment} className="btn btn-sm text-black btn-primary">Pay</button>
        </div>
    );
   
};

export default Payment;
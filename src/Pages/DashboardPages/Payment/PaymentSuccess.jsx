import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiossecure from '../../../Hooks/useAxiossecure';

const PaymentSuccess = () => {
    const[searchParams]=useSearchParams()
    const sessionId=searchParams.get('session_id')
    const axiosSecure=useAxiossecure()
    console.log(sessionId);
    useEffect(()=>{
        if(sessionId){
           axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
           .then((res)=>{
            console.log(res.data);
            
           })
        }
    },[sessionId,axiosSecure])
    
    return (
        <div>
         success   
        </div>
    );
};

export default PaymentSuccess;
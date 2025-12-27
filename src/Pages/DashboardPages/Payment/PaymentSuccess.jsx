import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiossecure from '../../../Hooks/useAxiossecure';
import { useState } from 'react';

const PaymentSuccess = () => {
    const[searchParams]=useSearchParams()
    const[paymentInfo,setPaymentinfo]=useState({})
    const sessionId=searchParams.get('session_id')
    const axiosSecure=useAxiossecure()
    console.log(sessionId);
    useEffect(()=>{
        if(sessionId){
           axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
           .then((res)=>{
            console.log(res.data);
            setPaymentinfo({
                transactionId:res.data.transactionId,
                trackingId:res.data.trackingId
            })
            
           })
        }
    },[sessionId,axiosSecure])
    
    return (
        <div>
        <p>Payment Successfull</p>
        <p>Tracking ID : {paymentInfo.trackingId}</p>
        <p>Transaction ID :{paymentInfo.transactionId}</p>
        </div>
    );
};

export default PaymentSuccess;
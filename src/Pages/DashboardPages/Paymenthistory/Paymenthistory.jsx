import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiossecure from '../../../Hooks/useAxiossecure';

const Paymenthistory = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiossecure()
    const{data:payments=[]}=useQuery({
        queryKey:['payments',user?.email],
        queryFn:async ()=>{
            const res= await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
         <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Parcel Name</th>
        <th>Amount</th>
        <th>Paid At</th>
        <th>Transaction ID</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {payments.map((payment,i)=><tr key={i}>
        <th>{i+1}</th>
        <td>{payment.parcelName}</td>
        <td>$ {payment.amount}</td>
        <th>{payment.paidAt}</th>
        <td>{payment.transactionId}</td>
      </tr>)}
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Paymenthistory;
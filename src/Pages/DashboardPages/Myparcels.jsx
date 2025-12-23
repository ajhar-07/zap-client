import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiossecure from '../../Hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteOutline } from "react-icons/md";
import { FaEye, FaPen } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import Payment from './Payment/Payment';
const Myparcels = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiossecure()
    const {data:parcels=[],refetch}=useQuery({
        queryKey:['myParcels',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data
        }
    })

    const handleparceldelete=(id)=>{
        console.log((id));
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   
    

     axiosSecure.delete(`/parcels/${id}`)
    .then(res=>{
        console.log(res.data);
       if(res.data.deletedCount)
       {
Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    refetch()
       }
    })
    .catch(error=>{
        console.log(error);
        
    })
  }
});
    }


    const handlePayment= async (parcel)=>{
         const paymentInfo={
          senderEmail:parcel.senderEmail,
          parcelName:parcel.parcelName,
          parcelId:parcel._id,
          cost:parcel.cost
         };
         const res= await axiosSecure.post('/payment-checkout-session',paymentInfo)
         console.log(res.data);
         window.location.assign(res.data.url)
         
    }
    return (
       <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Cost</th>
        <th>Payment</th>
        <th>Delevary Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        parcels.map((parcel,i)=> <tr key={parcel._id}>
        <th>{i+1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>{parcel.paymentStatus==="paid" ? <span className='text-green-500 font-semibold'><i>Paid</i></span>
        :<button onClick={()=>handlePayment(parcel)} className='btn btn-sm btn-primary text-black'>Pay</button>
      }</td>
        <td>Status</td>
        <td className=''>
            <button onClick={()=>handleparceldelete(parcel._id)} className='btn btn-square'>
                <MdDeleteOutline /></button>
            <button className='btn btn-square mx-3'><FaEye /></button>
            <button className='btn btn-square'><FaPen/></button>
           
           
        </td>
      </tr>)
     }
    
    </tbody>
  </table>
</div>
    );
};

export default Myparcels;
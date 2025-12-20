import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiossecure from '../../Hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';

const Myparcels = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiossecure()
    const {data:parcels=[]}=useQuery({
        queryKey:['myParcels',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels?email=${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
        <p>My Parcels-{parcels.length}</p>  
       {
        parcels.map(p=><p>{p.parcelName}</p>)
       }
        </div>
    );
};

export default Myparcels;
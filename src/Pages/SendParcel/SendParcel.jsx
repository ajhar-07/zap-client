import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
          const {register,handleSubmit,formState:{errors}}=useForm()
          const serviceCenters=useLoaderData()
          const regionDuplecates=serviceCenters.map(center=>center.region)
          const regions=[...new Set(regionDuplecates)]
          console.log(regions);
          
          const handleSendproduct=(data)=>{
            console.log(data);
            
          }
    return (
        <div className="max-w-6xl mx-auto p-6"> 
            <h3 className="text-3xl font-bold mb-1">Send A Parcel</h3> 
            <p className="text-lg font-semibold text-primary mb-6"> 
                Enter Your Product Details
            </p>

            {/* form start */}
            <form onSubmit={handleSubmit(handleSendproduct)} className="bg-white rounded-2xl shadow-lg p-6">

                {/* Top Section */}
                <div>
                    {/* doc type */}
                    <div className='mb-5'>
                        <label className='label mr-3 '>
                            <input type="radio" {...register('parcelType',{required:true})} value="document" className="radio" defaultChecked />
                            Document</label>
                        <label className='label'>
                            <input type="radio" {...register('parcelType',{required:true})} value="non-document" className="radio" defaultChecked />
                            Non-Document</label>
                             {errors.parcelType?.type==="required" && <p className='text-red-500'>Set Parcel Type</p>}
                    </div>
                    {/* parcel ingo */}
                    <div className='grid grid-cols-2 gap-8 mb-5'>
                         <input
                            type="text"
                            placeholder="Pracel Name"
                            {...register('parcelName',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                     
                           <input
                            type="text"
                            placeholder="Parcel Weight(kg)"
                            {...register('parcelwigth',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />  
                          {errors.parcelName?.type==="required" && <p className='text-red-500'>Give A Parcel Name</p>}
                        {errors.parcelwigth?.type==="required" && <p className='text-red-500'>Give A Parcel Weigth</p>}
                         
                    </div>
                </div>

                {/* Inner content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 

                    {/* part 1 sender */}
                    <div className="flex flex-col gap-3"> 
                        <p className="text-lg font-semibold mb-2">Sender Details</p> 

                        <input
                            type="text"
                            placeholder="Sender Name"
                            {...register('senderName',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.senderName?.type==="required" && <p className='text-red-500'>Give a Sender Name</p>}
                        <input
                            type="email"
                            placeholder="Sender email"
                            {...register('senderEmail',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.senderEmail?.type==="required" && <p className='text-red-500'>Give a Sender Email</p>}
                       
                            <select defaultValue="Pick a Region" className="select">
                              {
                                regions.map((region,i)=> <option key={i} value={region}>{region}</option>)
                              }
                              </select>
                       
                        <input
                            type="text"
                            placeholder="Sender Address"
                            {...register('senderAddress',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.senderAddress?.type==="required" && <p className='text-red-500'>Give Sender Address</p>}
                        <input
                            type="number"
                            placeholder="Sender Phone"
                            {...register('senderPhone',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.senderPhone?.type==="required" && <p className='text-red-500'>Give Sender Phone</p>}
                        <input
                            type="text"
                            placeholder="Sender District"
                            {...register('senderDistrict',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.senderDistrict?.type==="required" && <p className='text-red-500'>Give Sender District</p>}

                        <textarea
                            className="textarea textarea-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66] min-h-[100px]" 
                            placeholder="Description"
                            {...register('senderDescription',{required:true})}
                        ></textarea>
                          {errors.parcelName?.type==="required" && <p className='text-red-500'>Give Sender Description</p>}
                    </div>

                    {/* part 2 receiver */}
                    <div className="flex flex-col gap-3"> {/* 🔧 changed */}
                        <p className="text-lg font-semibold mb-2">Reciver Details</p> 

                        <input
                            type="text"
                            placeholder="Receiver Name"
                            {...register('reciverName',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.reciverName?.type==="required" && <p className='text-red-500'>Give Reciver Name</p>}
                        <input
                            type="text"
                            placeholder="Receiver Email"
                            {...register('reciverEmail',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.reciverEmail?.type==="required" && <p className='text-red-500'>Give Reciver Email</p>}
                        <input
                            type="text"
                            placeholder="Receiver Address"
                            {...register('reciverAddress',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                        {errors.reciverAddress?.type==="required" && <p className='text-red-500'>Give Reciver Name</p>}
                        <input
                            type="number"
                            placeholder="Receiver Phone"
                              {...register('reciverPhone',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.reciverPhone?.type==="required" && <p className='text-red-500'>Give Reciver Phone</p>}
                        <input
                            type="text"
                            placeholder="Receiver District"
                              {...register('reciverDistrict',{required:true})}
                            className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66]" 
                        />
                          {errors.reciverDistrict?.type==="required" && <p className='text-red-500'>Give Reciver District</p>}
                        <textarea
                            className="textarea textarea-bordered w-full rounded-xl focus:ring-2 focus:ring-[#CAEB66] min-h-[100px]" 
                            placeholder="Description"
                             {...register('reciverDescription',{required:true})}
                        ></textarea>
                       {errors.reciverDescription?.type==="required" && <p className='text-red-500'>Give Reciver Description</p>}
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
  <button
    type="submit"
    className="px-8 py-3 rounded-xl font-semibold text-black bg-[#CAEB66] hover:opacity-90 transition-all shadow-md"
  >
    Send Parcel
  </button>
</div>
            </form>
        </div>
    );
};

export default SendParcel;

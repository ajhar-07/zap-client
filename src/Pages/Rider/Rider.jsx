import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import useAxiossecure from '../../Hooks/useAxiossecure';

const Rider = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const {user}=useAuth()
    const axiosSecure=useAxiossecure()
    return (
        <div>
         <p>Be a Rider</p> 
         <form>
            
        </form>  
        </div>
    );
};

export default Rider;
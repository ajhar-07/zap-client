import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link, Navigate } from 'react-router';
import { useForm } from 'react-hook-form';

const Loginpage = () => {
    const {user,Login,googlelogin}=useAuth()
    const{register,handleSubmit,formState:{errors}}=useForm()

    const handlelogin=(data)=>{
        console.log(data);
        Login(data.email,data.password)
        .then(res=>{
            console.log(res.user);
            alert("Login Successfully")
        })
        .catch(error=>{
            console.log(error);
            alert(error.message)
            
        })


         }

         const handlegoogle=()=>{
            googlelogin()
      .then((res) =>{
         console.log(res.user);
         alert("Login Successfully")
         
      })
     .catch(error=>{
            console.log(error);
            alert(error.message)
            
        })

        }
    return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handlelogin)}>
          <input
            type="email"
            {...register('email',{required:true})}
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
          />
         {
            errors?.email?.type==="required" && <p className='text-red-500'>Email is Required</p>
         }
          <input
            type="password"
           {...register('password',{required:true})}
            placeholder="Password"
            required
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
          />
          {
            errors?.password?.type==="required" &&<p className='text-red-500'>Password is Required</p>
          }
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-[#CAEB66] text-black hover:opacity-90 transition-shadow shadow-md"
          >
            Login
          </button>
        </form>

        <button onClick={handlegoogle}
          className="w-full flex justify-center items-center gap-2 mt-4 py-3 border rounded-xl hover:bg-gray-50 transition-shadow shadow-md"
        >
          {/* You can add Google icon here */}
          Login with Google
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          New?{" "}
          <Link to="/register" className="font-semibold text-[#CAEB66] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Loginpage;
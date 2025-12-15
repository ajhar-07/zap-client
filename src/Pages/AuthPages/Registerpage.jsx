import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Registerpage = () => {
    const {user,Register}=useAuth()
    const{register,handleSubmit,formState:{errors}}=useForm()
    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>

       

        <form  className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
            />
          
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: "Photo is required" })}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
            />
          
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
            />
          
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required", minLength: 6 })}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
            />
           
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-[#CAEB66] text-black hover:opacity-90 transition-shadow shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-[#CAEB66] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Registerpage;
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';

const Registerpage = () => {
   const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {user,Register,googlelogin}=useAuth()
    const{register,handleSubmit,formState:{errors}}=useForm()
    const handleregister=(data)=>{

      console.log(data);
      register(data.email,data.password)
      .then(res=>{
        console.log(res.user);
        alert("Register Successfully")
          navigate(from, { replace: true });
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
           navigate(from, { replace: true });
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
          Register
        </h2>

       

        <form  className="space-y-4" onSubmit={handleSubmit(handleregister)}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required:true})}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
            />
          {errors.name?.type==="required" 
          && <p className='text-red-500'>User Name Required</p>
          }
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: true })}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
            />
          {errors.photo?.type==="required" &&
          <p className='text-red-500'>Photo is Required</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required:true })}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
            />
          {errors.email?.type==="required" &&
          <p className='text-red-500'>Email is Required</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] shadow-sm"
            />
           {errors.password?.type==="required" &&
           <p className='text-red-500'>Password is Required</p>}
           {errors.password?.type==="minLength" &&
           <p className='text-red-500'>Password must be 6 digit</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-[#CAEB66] text-black hover:opacity-90 transition-shadow shadow-md"
          >
            Register
          </button>
           <button onClick={handlegoogle}
          className="w-full flex justify-center items-center gap-2 mt-4 py-3 border rounded-xl hover:bg-gray-50 transition-shadow shadow-md"
        >
          {/* You can add Google icon here */}
          Login with Google
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
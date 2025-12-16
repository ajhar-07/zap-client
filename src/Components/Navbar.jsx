import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
  const {user,Logout}=useAuth()
    const links=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/services'}>Services</NavLink></li>
    <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
    <li><NavLink to={'/about-use'}>About Us</NavLink></li>
    <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
    <li><NavLink to={'/be-a-rider'}>Be a rider</NavLink></li>
    
    </>

    const handlelogout=()=>{
      Logout()
      .then(res=>{
        console.log(res);
        alert("Logout Successfully")
        
      })
      .catch(error=>{
        console.log(error);
        alert(error.message)
        
      })
    }
    return (
       <div className="navbar  text-secondary shadow-sm rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
   {user?.photoURL && (
  <img
    src={user.photoURL}
    alt="user"
    className="w-10 h-10 rounded-full mx-2"
  />
)}

  {
    user? <button onClick={handlelogout} className="inline-flex items-center justify-center px-6 py-2.5
             rounded-full bg-[#CAEB66]
             text-gray-900 font-semibold tracking-wide
             shadow-md hover:shadow-lg
             hover:bg-[#b7dd58]
             transition-all duration-300 ease-in-out
             active:scale-95">Logout</button>:  <NavLink
  to="/login"
   className="inline-flex items-center justify-center px-6 py-2.5
             rounded-full bg-[#CAEB66]
             text-gray-900 font-semibold tracking-wide
             shadow-md hover:shadow-lg
             hover:bg-[#b7dd58]
             transition-all duration-300 ease-in-out
             active:scale-95"
>
  Login
</NavLink>

  }
  </div>
</div>
    );
};

export default Navbar;
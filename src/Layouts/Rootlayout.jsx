import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Rootlayout = () => {
    return (
       
        <div className='mx-auto w-11/12'>
            <nav className='my-5 items-center'>
                <Navbar></Navbar>
            </nav>
       <main>
          <Outlet></Outlet>   
       </main>
         <footer>
        <Footer></Footer>
       </footer>
        </div>
      
      
    );
};

export default Rootlayout;
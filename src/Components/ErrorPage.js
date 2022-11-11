import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Header/Navbar';

const ErrorPage = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="flex flex-col items-center text-red-600 my-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6h-60 h-60"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
         
            <h1 className='text-5xl'>
              Opps! Error ErrorPage. <Link to='/' className='btn btn-md bg-red-500'>Back to Home</Link>
            </h1>
         
        </div>
        <Footer></Footer>
      </div>
    );
};

export default ErrorPage;
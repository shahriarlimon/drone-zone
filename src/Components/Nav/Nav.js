import React from 'react';
import { Link } from 'react-router-dom';
import {GiDeliveryDrone} from 'react-icons/gi';
import CustomLink from '../CustomLink/CustomLink';

const Nav = () => {
    return (
        <div>
            <header className="text-gray-600 body-font bg-white shadow-md">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to ="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <GiDeliveryDrone className='w-10 h-10 text-white p-2 bg-pink-500 rounded-full'/>
      <span className="ml-3 text-2xl">Drone Zone</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:text-xl">
      <CustomLink to="/" className="mr-5 hover:text-gray-900">Home</CustomLink>
      <CustomLink to="/reviews" className="mr-5 hover:text-gray-900">Reviews</CustomLink>
      <CustomLink to="/dashboard" className="mr-5 hover:text-gray-900">Dashboard</CustomLink>
      <CustomLink to="/blogs" className="mr-5 hover:text-gray-900">Blogs</CustomLink>
      <CustomLink to="/contact" className="mr-5 hover:text-gray-900">Contact</CustomLink>
    </nav>
  </div>
</header>
        </div>
    );
};

export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[rgba(70,29,85,0.6)] fixed w-full z-10'>
            <div className='container mx-auto py-3'>
                <div className='flex justify-between items-center '>
                    {/* logo */}
                    <div>
                        <img className='w-[80px] h-[80px]' src="src/assets/images/logo (2).png" alt="" />
                    </div>
                    {/* div menuu */}
                    <div className='space-x-4'>
                        <NavLink to="/" className="active"> Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/about">Service</NavLink >
                        <NavLink to="/about" >Gallery</NavLink>
                        <NavLink to="/about" > Others</NavLink>
                        <NavLink to="/about"> Others</NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
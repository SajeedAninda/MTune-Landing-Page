import React from 'react';
import logo from "../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMenu } from 'react-icons/hi';


const Navbar = () => {
    return (
        <div className='h-[15vh] md:h-[13vh] bg-gradient-to-r from-white to-[#d3132e] shadow-md flex items-center'>
            <div className='w-[90%] md:w-[85%] mx-auto flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div className='block md:hidden'>
                        <HiOutlineMenu className='text-[35px] text-[#252b46]'/>
                    </div>
                    <img className='w-[80px]' src={logo} alt="" />
                </div>

                <div>
                    <ul className='text-[18px] font-medium text-white flex gap-10 items-center'>
                        <div className='hidden md:flex gap-10 items-center'>
                            <li className='hover:opacity-70 cursor-pointer transition-opacity delay-75'>Features</li>
                            <li className='hover:opacity-70 cursor-pointer transition-opacity delay-75'>Pricing</li>
                            <li className='hover:opacity-70 cursor-pointer transition-opacity delay-75'>Contact</li>
                        </div>
                        <a href='https://www.facebook.com/mt.callertune' target='_blank' className='px-3 md:px-4 py-2 md:py-3 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d3132e] font-semibold transition-colors delay-75 flex gap-2 items-center '>
                            <FaFacebook className='text-[22px]' />
                            MTune
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
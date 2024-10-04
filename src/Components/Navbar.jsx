import React from 'react';
import logo from "../assets/logo.png"
import { FaFacebook } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='h-[13vh] bg-gradient-to-r from-white to-[#d3132e] shadow-md flex items-center'>
            <div className='w-[85%] mx-auto flex justify-between items-center'>
                <div>
                    <img className='w-[80px]' src={logo} alt="" />
                </div>

                <div>
                    <ul className='text-[18px] font-medium text-white flex gap-10 items-center'>
                        <li className='hover:opacity-70 cursor-pointer transition-opacity delay-75'>Features</li>
                        <li className='hover:opacity-70 cursor-pointer transition-opacity delay-75'>Pricing</li>
                        <li className='hover:opacity-70 cursor-pointer transition-opacity delay-75'>Contact</li>
                        <a href='https://www.facebook.com/mt.callertune' target='_blank' className='px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d3132e] font-semibold transition-colors delay-75 flex gap-2 items-center '>
                            <FaFacebook className='text-[22px]'/>
                             MTune
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
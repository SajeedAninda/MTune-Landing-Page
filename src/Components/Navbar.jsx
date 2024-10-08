import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='relative'>
            <div className='h-[15vh] lg:h-[13vh] bg-gradient-to-r from-white to-[#d3132e] dark:bg-gradient-to-l dark:from-black dark:to-[#d3132e]  shadow-md flex items-center'>
                <div className='w-[90%] md:w-[85%] mx-auto flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <div className='block md:hidden'>
                            <HiOutlineMenu className='text-[35px] text-[#252b46]' onClick={toggleSidebar} />
                        </div>
                        <img className='w-[80px]' src={logo} alt="MTune Logo" />
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

                            <div className='flex items-center gap-4'>
                                <button
                                    className='themeSwitcher w-[40px] h-[20px] rounded-2xl bg-[#979797] dark:bg-[#A445ed] flex items-center px-[0.15rem] cursor-pointer hover:bg-[#A445ed] transition-colors delay-50'
                                    onClick={handleToggle}
                                >
                                    <div
                                        className={`w-[14px] h-[14px] bg-[#f4f4f4] rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-[1.2rem]' : 'translate-x-0'}`}
                                    ></div>
                                </button>

                                <div>
                                    <BsFillMoonStarsFill />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`md:hidden fixed top-0 left-0 h-full w-[70%] sm:w-[40%] bg-white z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>
                <div className='flex justify-between items-center p-4'>
                    <img className='w-[60px]' src={logo} alt="MTune Logo" />
                    <IoClose className='text-[30px] text-[#252b46] cursor-pointer' onClick={toggleSidebar} />
                </div>
                <ul className='mt-10 flex flex-col gap-6 text-lg text-[#252b46] px-6'>
                    <li className='hover:text-[#d3132e] cursor-pointer transition-colors'>Features</li>
                    <li className='hover:text-[#d3132e] cursor-pointer transition-colors'>Pricing</li>
                    <li className='hover:text-[#d3132e] cursor-pointer transition-colors'>Contact</li>
                </ul>
            </div>

            {sidebarOpen && (
                <div className="md:hidden fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
            )}
        </div>
    );
};

export default Navbar;

import React from 'react';
import "./faq.css";
import { FaFacebook } from "react-icons/fa";
import { MdAddCall } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div class="divBg">
                <div class="w-[80%] mx-auto text-white py-10">
                    <div class="text-center">
                        <h3 class="text-3xl font-bold mb-3"> Thank you for visiting our site!</h3>
                        <p> Stay in Touch. </p>
                        <div class="flex justify-center items-center gap-6 my-10">
                            <a href='https://www.facebook.com/mt.callertune' target='_blank' className='px-3 md:px-4 py-2 md:py-3 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d3132e] font-semibold transition-colors delay-75 flex gap-2 items-center '>
                                <FaFacebook className='text-[18px] md:text-[24px]' />
                                MTune
                            </a>

                            <a
                                href='tel:+8801575782959'
                                className='px-3 md:px-4 py-2 md:py-3 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d3132e] font-semibold transition-colors delay-75 flex gap-2 items-center '
                            >
                                <MdAddCall className='text-[18px] md:text-[24px]' />
                                Call
                            </a>

                            <a
                                href='https://wa.me/+8801575782959'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-3 md:px-4 py-2 md:py-3 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d3132e] font-semibold transition-colors delay-75 flex gap-2 items-center '
                            >
                                <RiWhatsappFill className='text-[18px] md:text-[24px]' />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                    <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-white font-bold">
                        <p class="order-2 md:order-1 mt-8 md:mt-0">MTune {currentYear} &copy;All Right Reserved </p>
                        <div class="order-1 md:order-2">
                            <span class="px-2">About us</span>
                            <span class="px-2 border-l">Contact us</span>
                            <span class="px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
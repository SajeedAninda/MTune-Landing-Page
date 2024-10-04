import React from 'react';
import heroAnimation from "../assets/heroAnimation.json";
import Lottie from 'lottie-react';
import { MdAddCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";




const Hero = () => {
    return (
        <div className='h-[87vh] w-[80%] mx-auto flex justify-between items-center'>
            <div className='flex-1'>
                <h1 className='text-[#d3132e] text-[100px] font-bold'>
                    MTune
                </h1>
                <h3 className='text-[#252b46] text-[40px] font-semibold italic'>
                    Tune Up your Business
                </h3>
                <p className='text-[#252b46] mt-2 font-semibold text-[16px]'>
                    MTune offers custom caller tune services for your brand, along with campaign voiceovers, promotional ads, and creative content to elevate your business image.
                </p>

                <div className='flex gap-2 mt-5'>
                    {/* Call Button */}
                    <a
                        href='tel:+8801575782959'
                        className='px-4 py-3 rounded-lg bg-[#d3132e] border-2 border-[#d3132e] text-white hover:bg-white hover:text-[#d3132e] font-semibold transition-colors delay-75 flex gap-2 items-center'
                    >
                        <MdAddCall className='text-[24px]'/>
                        Call
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href='https://wa.me/+8801575782959'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-4 py-3 rounded-lg bg-[#d3132e] border-2 border-[#d3132e] text-white hover:bg-white hover:text-[#d3132e] font-semibold transition-colors delay-75 flex gap-2 items-center'
                    >
                        <RiWhatsappFill className='text-[24px]'/>
                        WhatsApp
                    </a>
                </div>
            </div>

            <div className='flex-1'>
                <Lottie animationData={heroAnimation} />
            </div>
        </div>
    );
};

export default Hero;

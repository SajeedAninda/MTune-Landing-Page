import React from 'react';
import logo from "../assets/logo.png"

const AboutUs = () => {
    return (
        <div className='h-fit lg:h-screen w-[80%] mx-auto'>
            <div className='mt-6'>
                <h1 className='text-[40px] text-[#d3132e] font-bold text-center'>
                    About Us
                </h1>
                <p className='text-[24px] text-[#252b46] font-semibold mt-2 text-center'>
                    Learn More About Us – Discover Our Services and Expertise
                </p>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center pt-8'>
                <div className="flex-1">
                    <p className='text-[32px] text-[#d3132e] font-semibold mt-2 text-center lg:text-left'>
                        What is MTune?
                    </p>

                    <p className='text-[22px] text-[#252b46] font-medium mt-2 text-center lg:text-left'>
                        MTune is a premier audio branding service dedicated to transforming the way businesses communicate with their customers. We specialize in customized caller tune services for businesses, along with professional voiceovers and jingles for campaigns, TV ads, and online promotions. We also offer IVR systems, logo animations, Facebook cover videos, and company profiles to enhance your brand's presence.
                    </p>
                </div>


                <div className="flex-1 flex justify-center">
                    <img className='w-[80%]' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
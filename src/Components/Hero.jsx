import React from 'react';

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
            </div>

            <div className='flex-1'>

            </div>
        </div>
    );
};

export default Hero;
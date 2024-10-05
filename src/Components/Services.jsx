import React from 'react';
import logo from "../assets/logo.png"

const Services = () => {
    return (
        <div className='h-[100vh] w-[80%] mx-auto'>
            <div className='mt-6'>
                <h1 className='text-[40px] text-[#d3132e] font-bold text-center'>
                    Our Services
                </h1>
                <p className='text-[24px] text-[#252b46] font-semibold mt-2 text-center'>
                    Explore Our Diverse Range of Services Tailored to Elevate Your Brand!
                </p>
            </div>
            <div className='mt-8 flex justify-center gap-6'>
                <button href='https://www.facebook.com/mt.callertune' target='_blank' className='px-4 py-3 rounded-lg bg-transparent border-2 border-[#d3132e] text-[#d3132e] hover:bg-[#d3132e]  hover:text-white font-semibold transition-colors delay-75 flex gap-2 items-center '>
                    Caller Tune
                </button>

                <button href='https://www.facebook.com/mt.callertune' target='_blank' className='px-4 py-3 rounded-lg bg-transparent border-2 border-[#d3132e] text-[#d3132e] hover:bg-[#d3132e]  hover:text-white font-semibold transition-colors delay-75 flex gap-2 items-center '>
                    Advertisements
                </button>

                <button href='https://www.facebook.com/mt.callertune' target='_blank' className='px-4 py-3 rounded-lg bg-transparent border-2 border-[#d3132e] text-[#d3132e] hover:bg-[#d3132e]  hover:text-white font-semibold transition-colors delay-75 flex gap-2 items-center '>
                    Creative Solutions
                </button>
            </div>

            <div>
                <div className='tab-1 flex justify-between items-center pt-8'>
                    <div className="flex-1">
                        <p className='text-[32px] text-[#d3132e] font-semibold mt-2 text-left'>
                            Caller Tune Services
                        </p>

                        <p className='text-[22px] text-[#252b46] font-medium mt-2 text-left'>
                            MTune specializes in creating customized caller tunes tailored to your business needs. Our professional voice artists deliver high-quality recordings that resonate with your brand identity. Enhance customer engagement by allowing your clients to hear your company's unique message each time they call. Enjoy lifelong benefits with our easy setup and exceptional service.
                        </p>
                    </div>


                    <div className="flex-1 flex justify-center">
                        <img className='w-[80%]' src={logo} alt="" />
                    </div>
                </div>



                <div className='tab-2 flex justify-between items-center pt-8'>
                    <div className="flex-1">
                        <p className='text-[32px] text-[#d3132e] font-semibold mt-2 text-left'>
                            Voiceovers & Advertisements
                        </p>

                        <p className='text-[22px] text-[#252b46] font-medium mt-2 text-left'>
                            We offer professional voiceovers for various media, including campaigns, TV commercials, and online ads. Our skilled voice artists bring your content to life, ensuring that your message captivates the audience. From jingles to promotional videos, MTune creates engaging audio that leaves a lasting impression and effectively communicates your brand's story.
                        </p>
                    </div>


                    <div className="flex-1 flex justify-center">
                        <img className='w-[80%]' src={logo} alt="" />
                    </div>
                </div>


                <div className='tab-3 flex justify-between items-center pt-8'>
                    <div className="flex-1">
                        <p className='text-[32px] text-[#d3132e] font-semibold mt-2 text-left'>
                            Creative Multimedia Solutions
                        </p>

                        <p className='text-[22px] text-[#252b46] font-medium mt-2 text-left'>
                            MTune provides a range of multimedia services, including IVR voiceovers, logo animations, and Facebook cover videos. We specialize in crafting visually appealing and informative company profiles that enhance your brand’s online presence. Our team works diligently to deliver innovative designs and animations that resonate with your target audience and elevate your marketing strategy.
                        </p>
                    </div>


                    <div className="flex-1 flex justify-center">
                        <img className='w-[80%]' src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
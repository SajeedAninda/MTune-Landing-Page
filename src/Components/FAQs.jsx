import React from 'react';
import "./faq.css";

const FAQs = () => {
    return (
        <div className="pt-12 dark:bg-slate-900">
            <section className="w-[80%] mx-auto  overflow-hidden mt-20" id="faq">
                <div className="">
                    <div className="relative py-16 bg-yelloww overflow-hidden rounded-3xl">
                        <div className="relative z-10 md:max-w-7xl mx-auto">
                            <div className="md:max-w-xl mb-10"><span className="inline-block mb-5 text-md text-[#252b46] dark:text-white font-bold uppercase tracking-widest">Frequently
                                asked questions</span>
                                <h2 className="font-heading text-[#252b46] dark:text-white text-4xl lg:text-5xl font-bold font-heading">
                                    Got questions? We’re here to help!</h2>
                            </div>
                            <div className="flex flex-wrap -m-3">
                                <div className="w-full p-3">
                                    <div className="p-10 divBg rounded-3xl">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="w-full md:w-1/2 p-2">
                                                <h3 className="font-heading text-[24px]  text-white font-bold">How does your Caller Tune service work?
                                                </h3>
                                            </div>
                                            <div className="w-full md:w-1/2 p-2">
                                                <p className="text-white font-medium">First, we create a custom script for your business. Once you approve the script, we proceed with recording it in a professional voice, and after final approval, we set it as your caller tune on your selected number(s).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <div className="p-10 divBg rounded-3xl">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="w-full md:w-1/2 p-2">
                                                <h3 className="font-heading text-[24px]  text-white font-bold">What is the cost of setting up a Caller Tune?
                                                </h3>
                                            </div>
                                            <div className="w-full md:w-1/2 p-2">
                                                <p className="text-white font-medium">For just 1500 BDT, you can get a lifetime caller tune that speaks for your business. One-time payment, no recurring fees – a smart and affordable investment to keep your business message ringing every time someone calls.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <div className="p-10 divBg rounded-3xl">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="w-full md:w-1/2 p-2">
                                                <h3 className="font-heading text-[24px]  text-white font-bold">Can I customize the voice and music for my caller tune?
                                                </h3>
                                            </div>
                                            <div className="w-full md:w-1/2 p-2">
                                                <p className="text-white font-medium">Yes, you can! Choose from male or female voices, and even add custom background music to fit your business vibe perfectly, making the caller tune truly yours.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full p-3">
                                    <div className="p-10 divBg rounded-3xl">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="w-full md:w-1/2 p-2">
                                                <h3 className="font-heading text-[24px]  text-white font-bold">What other services do you offer besides Caller Tune?
                                                </h3>
                                            </div>
                                            <div className="w-full md:w-1/2 p-2">
                                                <p className="text-white font-medium">Along with caller tune services, MTune provides campaign voiceovers, advertisements, jingles, and IVR services for phones. We also create professional videos, animations, and logo designs to promote your brand across different platforms.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <div className="p-10 divBg rounded-3xl">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="w-full md:w-1/2 p-2">
                                                <h3 className="font-heading text-[24px]  text-white font-bold lg:pr-10">What are the network provider charges for the Caller Tune?
                                                </h3>
                                            </div>
                                            <div className="w-full md:w-1/2 p-2">
                                                <p className="text-white font-medium">The cost varies slightly depending on the network provider, but typically, it's around 30 taka per month. This charge is deducted directly by the mobile operator, and you can manage it through your mobile operator customer care.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
};

export default FAQs;


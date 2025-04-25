import { useEffect, useState } from 'react';
import BackCv from "@/assets/images/backCv.png"
import { FigmaLogoIcon } from '@radix-ui/react-icons'
import userVector from "@/assets/icons/user.png"
import twitter from "@/assets/icons/twitter.png"
import { Image } from '@nextui-org/react';

const AnimatedHeroSection = () => {
    const [scene, setScene] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setScene((prevScene) => (prevScene % 3) + 1);
        }, 5000); // Change scene every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="relative">
                    {/* Decorative star */}
                    <div className="absolute -top-12 right-0 text-emerald-400">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0L20.485 11.515L32 16L20.485 20.485L16 32L11.515 20.485L0 16L11.515 11.515L16 0Z" fill="currentColor" />
                        </svg>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                        Make your First. Impression Count{" "}
                        <span className="text-[#30D0AD]">Create your Best CV</span>{" "}
                        <span className="text-[#1491B9]">and Get The Job Offer.</span>
                    </h1>

                    <p className="text-gray-600 mb-8 max-w-xl">
                        Use professional field-tested resume templates that follow the exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!
                    </p>

                    <button className="bg-emerald-400 text-white px-8 py-3 rounded-full hover:bg-emerald-500 transition-colors duration-300">
                        Try Now
                    </button>
                </div>

                {/* Right Column */}
                <div className="relative">
                    {/* Decorative star */}
                    <div className="absolute -bottom-12 right-0 text-emerald-400">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0L20.485 11.515L32 16L20.485 20.485L16 32L11.515 20.485L0 16L11.515 11.515L16 0Z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Job Cards */}
                    <div className="relative">
                        {scene === 1 && (
                            <div className="absolute top-14 left-10 border -rotate-6 z-20 bg-white rounded-lg shadow-lg p-4  animate-fadeIn">
                                <div className="hidden md:flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#BAB7F03D] rounded-lg flex items-center justify-center">
                                        <span className="text-[#1491B9] text-xl"><FigmaLogoIcon /></span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#101019]">UI Designer</p>
                                        <p className="text-xs text-[#5F5F65] inline-flex gap-1">
                                            <span><img src={userVector} alt="" /></span> 2/27 applied
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {scene === 2 && (
                            <div className="absolute top-14 right-14 border rotate-6 z-20 bg-white rounded-lg shadow-lg p-4 animate-fadeIn">
                                <div className="hidden md:flex items-center gap-3 ">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                        <span className="text-green-600 text-xl">💻</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#101019]">Frontend Dev</p>
                                        <p className="text-xs text-[#5F5F65] inline-flex gap-1">
                                            <span><img src={userVector} alt="" /></span> 4/15 applied
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {scene === 3 && (
                            <div className="absolute bottom-48 right-12 border -rotate-6 bg-white rounded-lg shadow-lg p-4 z-20 animate-fadeIn">
                                <div className="hidden md:flex items-center gap-3 ">
                                    <div className="w-10 h-10 bg-[#B7F0CE3D] rounded-lg flex items-center justify-center">
                                        <span className="text-cyan-600 w-[18px] h-[18px]">
                                            <img src={twitter} alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#101019]">Resumes</p>
                                        <p className="text-xs text-[#5F5F65] inline-flex gap-1">
                                            <span><img src={userVector} alt="" /></span> 8/12 applied
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Main Image */}
                        <div className="rounded-2xl flex justify-center items-center overflow-hidden border">
                            <Image src={BackCv} alt="Person using laptop" width={314} height={450} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnimatedHeroSection;
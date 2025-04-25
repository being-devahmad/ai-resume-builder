// 'use client'

// import { useState } from 'react'
// import { Check } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import bgGradient from "@/assets/illustrations/bg-gradient.png"
// import arrowImg from "@/assets/illustrations/arrow.png"
// import dashboardImg from "@/assets/images/dashboard-pic.png"
// import resume1Img from "@/assets/images/resume1-pic.png"
// import resume2Img from "@/assets/images/resume2-pic.png"
// import Testimonials from '@/components/Testimonials'
// import HeroSection from '@/components/HeroSection'
// import FAQSection from '@/components/FAQSection'
// // import templatePic3 from "@/assets/images/resume3-pic.png"
// // import templatePic4 from "@/assets/images/resume4-pic.png"



// import bgGradient from "@/assets/illustrations/bg-gradient.png"
// import arrowImg from "@/assets/illustrations/arrow.png"
import dashboardImg from "@/assets/images/dashboard-pic.png"
import resume1Img from "@/assets/images/resume1-pic.png"
import resume2Img from "@/assets/images/resume2-pic.png"
import Testimonials from '@/components/Testimonials'
import HeroSection from '@/components/HeroSection'
import FAQSection from '@/components/FAQSection'


import TemplatesBanner from "./TemplatesBanner"
import PricingSection from "@/components/PricingSection"


export default function PricingPage() {


    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
            <div >
                {/* Billing Toggle */}
                <PricingSection />
            </div>

            {/* Hero section */}
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
                    {/* Text Section */}
                    <div className="text-left animate-slide-in-left">
                        <h1 className="text-4xl font-bold leading-tight text-gray-800 mb-4">
                            A feature-packed <span className="text-teal-500">resume builder</span> that <span className="text-teal-500">makes resume creation a breeze</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Create a visually stunning resume with ease. Our resume builder will guide you through the process. We help with content suggestions and choosing the right design and layout, while you focus on presenting yourself.
                        </p>
                        <button className="bg-teal-500 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-teal-600 transition">
                            Build my Resume Now
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="mb:mt-0 my-20 animate-slide-in-right">
                        <div className='relative'>
                            <img
                                src={dashboardImg}
                                alt="Dashboard mockup"
                                className="rounded-lg shadow-lg w-full md:w-[521px] h-auto md:h-[267px]"
                            />
                            <div className="hidden md:block absolute top-[-80px] right-[40px] w-[200px] rotate-[-5deg]">
                                <img
                                    src={resume1Img}
                                    alt="Resume example 1"
                                    className="resume-animation rounded-md w-[193.86px] h-[274.13px]"
                                />
                            </div>
                            <div className="hidden md:block absolute bottom-[-90px] left-[-30px] w-[200px] rotate-[5deg]">
                                <img
                                    src={resume2Img}
                                    alt="Resume example 2"
                                    className="resume-animation rounded-md w-[152.88px] h-[216.18px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Temlates section */}

            <TemplatesBanner />

            {/* Testimonial Section */}

            <div>
                <Testimonials />
            </div>

            {/* Hero Section */}
            <div>
                <HeroSection />
            </div>


            {/* FAQ */}
            <div>
                <FAQSection />
            </div>
        </div>
    )
}


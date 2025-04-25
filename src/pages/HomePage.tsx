import MaxWidthContainer from '@/components/MaxWidthContainer'
import dashboardImg from "@/assets/images/dashboard-pic.png"
import LogoShowcase from '@/components/LogoShowcase'

import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import resumeBanner from "@/assets/images/resumeBanner.png"
import resume1Img from "@/assets/resumes/resume1.png"
import resume2Img from "@/assets/resumes/resume2.png"
import resume3Img from "@/assets/resumes/resume3.png"
import FeatureGrid from '@/components/FeatureGrid'

import { NavLink } from 'react-router-dom'
import ResumeSlider from '@/components/ResumeSlider'
import AnimatedHeroSection from '@/components/Home/AnimatedHero'


const Home = () => {
    return (
        <>
            <div className='bg-[#FAFAFA] py-14'>
                {/* Home Banner */}
                <div className='bg-gradient-to-r from-[#ffffff] to-[#30D0AD40]' />
                <MaxWidthContainer>
                    <div className="py-4 flex items-center justify-center ">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 ">
                            {/* Text Section */}
                            <div className="text-left">
                                <h1 className="text-4xl font-bold leading-tight text-black mb-4">
                                    Take your <span className="text-teal-500">Career Search</span> <br />
                                    to the next level 🚀
                                </h1>
                                <p className="text-lg text-gray-600 mb-6">
                                    Create a visually stunning resume with ease. Our resume builder will guide you through the process. We help with content suggestions and choosing the right design and layout, while you focus on presenting yourself.
                                </p>
                                <NavLink to={'/resumes'} className="bg-teal-500 text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-teal-600 transition">
                                    Build my Resume Now
                                </NavLink>
                            </div>

                            {/* Image Section */}
                            <div className=" mb:mt-0 my-20">
                                <div className='relative' >
                                    <img
                                        src={dashboardImg} // Replace with your actual image URLs
                                        alt="Dashboard mockup"
                                        className="rounded-lg shadow-lg w-[521px] h-[267px] "
                                    />
                                    <div className="absolute top-[-100px] right-[40px] rotate-[-15deg] ">
                                        <img
                                            src={resume1Img}
                                            alt="Resume example 1"
                                            className="rounded-lg w-24 md:w-[126px] md:h-[170px] h-auto"
                                        />
                                    </div>
                                    <div className="absolute -bottom-[90px] -left-[70px]  rotate-[10deg] ">
                                        <img
                                            src={resume2Img}
                                            alt="Resume example 2"
                                            className="rounded-lg w-24 md:w-[126px] h-auto md:h-[170px]  "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthContainer>

                {/* Logos */}
                <MaxWidthContainer>
                    <LogoShowcase />
                </MaxWidthContainer>

                {/* Resume SLider */}

                <MaxWidthContainer>
                    <ResumeSlider />
                </MaxWidthContainer>


                {/* Hero Section */}
                <MaxWidthContainer>
                    <AnimatedHeroSection />
                </MaxWidthContainer>

                {/* Resume Animation Section */}
                <MaxWidthContainer>
                    <div className="min-h-screen  flex flex-col items-center p-6 md:p-10">
                        {/* Main Container */}
                        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl w-full mx-auto">
                            {/* Left Section */}
                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-[#151B23] leading-snug">
                                    <span className="text-[#30D0AD]">Stand out</span> from the competition
                                    and secure your dream job with a professionally designed CV.
                                </h1>
                                <ul className="space-y-2 text-gray-600">
                                    <li>
                                        <strong className="font-semibold">AI Assistant:</strong> Let AI
                                        guide you in creating a perfect resume tailored to your career goals.
                                    </li>
                                    <li>
                                        <strong className="font-semibold">Industry-Specific Templates:</strong>{" "}
                                        Access templates designed for over 50 industries.
                                    </li>
                                </ul>
                                <button className="bg-[#30D0AD] text-white px-6 py-3 rounded-2xl shadow hover:bg-green-600">
                                    Start Building Your CV Now
                                </button>
                                <div className="flex items-start justify-center relative mt-10">

                                    <img
                                        src={resume3Img}
                                        alt="Resume 1"
                                        className=" -bottom-10 -right-28 w-24 md:w-[194px] h-auto shadow-lg transform -rotate-30"
                                    />
                                    <img
                                        src={resume2Img}
                                        alt="Resume 2"
                                        className="-top-20 rotate-20 -right-10  shadow-lg transform w-24 md:w-[194px] h-full"
                                    />
                                    <img
                                        src={resume1Img}
                                        alt="Resume 3"
                                        className=" w-24 md:w-[194px] h-full  shadow-lg -bottom-16 -left-8 transform -rotate-30"
                                    />
                                </div>

                            </div>

                            {/* Right Section Grid */}

                            <FeatureGrid />

                        </div>
                    </div>
                </MaxWidthContainer>


                {/* Testimonials */}
                <MaxWidthContainer>
                    <Testimonials />
                </MaxWidthContainer>

                {/* Hero Banner */}
                <MaxWidthContainer>
                    <div
                        className="relative mx-auto max-w-6xl min-h-[400px] flex items-center justify-center rounded-2xl"
                        style={{
                            backgroundImage: `url(${resumeBanner})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/60 rounded-2xl" />

                        {/* Content */}
                        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                                Join thousands of professionals who landed their{' '}
                                <span className="text-[#30D0AD]">dream jobs!</span>
                            </h1>

                            <p className="text-white/90 text-lg md:text-xl mb-8">
                                Experience the power of streamlined OptimCV solutions
                            </p>

                            <button className="bg-[#30D0AD] hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-md transition-colors">
                                Accelerate My Career
                            </button>
                        </div>
                    </div>
                </MaxWidthContainer>






                {/* FAQs */}
                <div className='bg-[#F1F1F1] my-4'>
                    <MaxWidthContainer>
                        <FAQ />
                    </MaxWidthContainer>
                </div>



            </div>
        </>
    )
}

export default Home

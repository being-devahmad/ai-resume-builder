import arraowImg from "@/assets/illustrations/arrow.png"
import FAQSection from "@/components/FAQSection"
import HeroSection from "@/components/HeroSection"
import Testimonials from "@/components/Testimonials"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Copy, History, Key, User } from 'lucide-react'

import Rublk from "@/assets/icons/brands/RUBLK.png"
import Slant from "@/assets/icons/brands/Slant.png"
import Marco from "@/assets/icons/brands/Marco..png"
import Cirrulean from "@/assets/icons/brands/Cirrulean.png"
import CareerSection from "./CoverSection"

const features = [
    {
        icon: User,
        title: "Avoids grammar & spelling mistakes",
        description:
            "Enhancv Resume Editor automatically detects grammar & spelling mistakes and prevents you from sending a resume with errors.",
    },
    {
        icon: Key,
        title: "Simultaneous editing",
        description:
            "Create and update multiple resumes at the same time with a single account that can be shared among your team members.",
    },
    {
        icon: Bot,
        title: "Content suggestions that work",
        description:
            "Speed up editing process with Enhancv's AI content suggestions that are tailored to your document. Resumes will never sound robotic.",
    },
    {
        icon: Copy,
        title: "One-click create multiple versions",
        description:
            "Creating a new version of the same template has never been easier. Just duplicate the document and get instant suggestions for rewriting.",
    },
    {
        icon: History,
        title: "Keep track of changes with edit history",
        description:
            "All changes are kept in the history, accessible to everyone. You can always revert to an older version and go to a newer.",
    },
]

const clients = [
    { name: "RUBLK", logo: Rublk },
    { name: "Slant", logo: Slant },
    { name: "Marco", logo: Marco },
    { name: "Cirrulean", logo: Cirrulean },
    { name: "Marco", logo: Marco },
]

const Company = () => {
    return (
        <>

            {/* Hero Banner */}
            <div className="min-h-screen relative overflow-hidden ">
                {/* Background gradients */}
                {/* Green gradient - top right */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px]">
                    <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(48,208,173,0.51)_0%,rgba(255,255,255,1)_70%)]" />
                </div>

                {/* Blue gradient - bottom left */}
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px]">
                    <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(20,145,185,0.49)_0%,rgba(255,255,255,1)_70%)]" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
                    <div className="text-center space-y-8 p-12 rounded-3xl bg-white/40 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">

                        <div className="flex gap-3 items-center justify-center ">
                            {/* Arrow */}
                            <div className="">
                                <img src={arraowImg} alt="" className="w-[150px] h-[151px] " />
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-4xl font-semibold  leading-tight ">
                                <span className="text-[#4CD4C0]">Empower</span>{" "}
                                Your Workforce with <br />
                                <span className="text-[#0098DA]">Expert-Driven</span>{" "}
                                Resume Solutions
                                <br />

                            </h1>
                        </div>


                        {/* Description */}
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Streamline your hiring process and help your employees succeed with tailored resume consultancy and professional career tools, designed specifically for your organization’s needs.
                        </p>

                        {/* CTA Button */}
                        <div>
                            <button className="bg-[#4CD4C0] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
                                Get in Touch – Book a Free Consultation
                            </button>
                        </div>
                    </div>
                </div>




            </div>

            {/* Resume Section */}


            <CareerSection />

            {/* Banner */}

            <div className="relative bg-white/40 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 p-4 md:p-6 lg:p-8 overflow-hidden">

                {/* Blue gradient - top right */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] ">
                    <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(20,145,185,0.49)_0%,rgba(255,255,255,1)_70%)]" />
                </div>

                {/* Green gradient - bottom left */}
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px]">
                    <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(48,208,173,0.51)_0%,rgba(255,255,255,1)_70%)]" />
                </div>

                {/* Content */}
                <div className="relative py-3 flex flex-col justify-center items-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-800 text-center px-4">
                        Get recruited faster. Accelerate your job search now with our fast online CV builder.
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl font-medium text-center px-4">
                        Experience the power of streamlined{" "}
                        <span className="text-emerald-400">OptimCV</span>{" "}
                        solutions
                    </p>

                    <button className="inline-flex items-center justify-center px-6 py-2 md:py-3 text-base md:text-lg font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                        Create Now
                    </button>

                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto text-center px-4">
                        Enhancv resumes and cover letters are vigorously tested against major ATS systems to ensure complete parsability.
                    </p>
                </div>
            </div>




            {/* Features */}

            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-[#DDDDDD] bg-transparent shadow-sm">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 flex justify-center">
                                    <feature.icon className="h-8 w-8 text-emerald-400" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Clients success */}
            <section className="mx-auto max-w-6xl px-4 py-16">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="mb-2">
                        <span className="block text-3xl font-bold text-emerald-400">
                            Proven Success
                        </span>
                        <span className="block text-3xl font-bold mt-2">
                            Where Our <span className="text-sky-500">Clients</span> Have Landed
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-6 mb-12 max-w-2xl mx-auto">
                        We are proud to have helped professionals secure roles at some of the world's most respected companies, including:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-12">
                        {clients.map((client, index) => (
                            <div key={index} className="w-32">
                                <img
                                    src={client.logo || "/placeholder.svg"}
                                    alt={`${client.name} logo`}
                                    className="w-full h-auto grayscale"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From startups to global enterprises, our clients success is proof of
                        what is possible when your career potential is unlocked.
                    </p>
                </div>
            </section>

            {/* Testimonials */}

            <div>
                <Testimonials />
            </div>

            {/* Hero Section */}
            <div>
                <HeroSection />
            </div>

            {/* FAQ Section */}
            <div>
                <FAQSection />
            </div>
        </>
    )
}

export default Company

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import resume1Img from "@/assets/resumes/resume1.png";
import resume2Img from "@/assets/resumes/resume2.png";
import resume3Img from "@/assets/resumes/resume3.png";

const FeatureGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                {
                    title: "Pre-written phrase generator",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Quick online CV builder",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Instant access to job-winning CV template",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    title: "Save and access from anywhere",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
            ].map((feature, index) => (
                <div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <h3 className="text-lg font-semibold text-[#151B23]">
                        {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

const CVSection = () => {
    const [currentTemplate, setCurrentTemplate] = useState(0);

    const templates = [
        {
            image: resume1Img,
            label: "Minimal Design",
            badge: "ATS-Friendly",
            rotation: -15,
        },
        {
            image: resume2Img,
            label: "Professional Look",
            badge: "Most Popular",
            rotation: 10,
        },
        {
            image: resume3Img,
            label: "Creative Style",
            badge: "Trending",
            rotation: -10,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTemplate((prev) => (prev + 1) % templates.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [templates.length]);

    return (
        <div className="min-h-screen flex flex-col items-center p-6 md:p-10 bg-gradient-to-r from-[#F0F4F8] to-[#E0E8F0]">
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
                            guide you in creating a perfect resume tailored to your career
                            goals.
                        </li>
                        <li>
                            <strong className="font-semibold">
                                Industry-Specific Templates:
                            </strong>{" "}
                            Access templates designed for over 50 industries.
                        </li>
                    </ul>
                    <button className="bg-[#30D0AD] text-white px-6 py-3 rounded-2xl shadow hover:bg-green-600 transition-colors duration-300">
                        Start Building Your CV Now
                    </button>

                    {/* Rotating Templates Animation */}
                    <div className="relative mt-10 h-[300px] md:h-[400px]">
                        <AnimatePresence>
                            {templates.map((template, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8, rotate: template.rotation }}
                                    animate={{
                                        opacity: currentTemplate === index ? 1 : 0,
                                        scale: currentTemplate === index ? 1 : 0.8,
                                        rotate: template.rotation,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: template.rotation }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute w-48 md:w-64 h-auto shadow-lg"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        transform: `translate(-50%, -50%) rotate(${template.rotation}deg)`,
                                        zIndex: currentTemplate === index ? 1 : 0,
                                    }}
                                >
                                    <img
                                        src={template.image}
                                        alt={`Resume ${index + 1}`}
                                        className="w-full h-full rounded-lg"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 rounded-b-lg">
                                        <span>{template.label}</span>
                                        {template.badge && (
                                            <span className="ml-2 bg-white text-black px-2 py-1 rounded-full text-xs">
                                                {template.badge}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Section Grid */}
                <FeatureGrid />
            </div>
        </div>
    );
};

export default CVSection;
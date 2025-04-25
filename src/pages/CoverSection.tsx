import { motion } from 'framer-motion';
import ResumeCver from "@/assets/images/resumeCover.png"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Stagger animations for child elements
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } },
};

const CareerSection = () => {
    return (
        <div className="p-4 md:p-6 lg:p-8">
            <motion.div
                className="flex flex-col lg:flex-row justify-between items-center gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% of the element is in view
            >
                {/* Text Section */}
                <motion.div
                    className="flex flex-col gap-4 px-6 md:px-10 lg:px-14 py-6 lg:py-10 w-full lg:w-1/2"
                    variants={textVariants}
                >
                    <motion.h1
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
                        variants={textVariants}
                    >
                        <span className="text-[#4CD4C0] inline-block me-2">
                            Empowering
                        </span>
                        Careers at Every Stage
                    </motion.h1>
                    <motion.p
                        className="text-sm md:text-base lg:text-lg text-gray-600"
                        variants={textVariants}
                    >
                        Unlock your team’s full potential with AI-powered tools and personalized coaching—designed to support every stage of career growth, from graduates to seasoned leaders.
                        <br />
                        Our mission is to enhance your career prospects through the perfect blend of{" "}
                        <span className="text-indigo-500 font-semibold">AI-powered tools</span>{" "}
                        and{" "}
                        <span className="text-indigo-500 font-semibold">personalized coaching</span>.
                    </motion.p>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center items-center"
                    variants={imageVariants}
                >
                    <motion.img
                        src={ResumeCver}
                        alt="Resume Cover"
                        className="max-w-full h-auto"
                        whileHover={{ scale: 1.05 }} // Add a subtle hover effect
                        transition={{ type: 'spring', stiffness: 300 }} // Springy hover animation
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CareerSection;
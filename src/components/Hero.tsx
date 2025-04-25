import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import ShinyButton from "./ShinyButton";

const transition = { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {
    filter: "blur(10px)",
    transform: "translateY(20%)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    transform: "translateY(0)",
    opacity: 1,
  },
};

const text = "Take your Career search to the next level";

const Hero = () => {
  const words = text.split(" ");

  return (
    <motion.div
      className="pt-14 pb-20 md:pt-24 md:pb-32  md:min-h-[86vh] flex flex-col items-center justify-center mx-auto text-center md:max-w-[70%]"
      initial="hidden"
      animate={"visible"}
      transition={{ staggerChildren: 0.04 }}
    >
      <h1 className="mb-6 text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
        {words.map((word: string, index: number) => {
          return (
            <Fragment key={index}>
              <motion.span
                className="inline-block "
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </Fragment>
          );
        })}
      </h1>
      <motion.p
        className="text-secondary-text font-bold md:text-lg mb-8"
        transition={transition}
        variants={variants}
      >
        Use professional field-tested resume templates that follow the exact
        'resume rules' employers look for. Easy to use and done within minutes -
        try now for free!
      </motion.p>
      <div className="flex gap-4 items-center">
        {/* <motion.div transition={transition} variants={variants}>
          <NavLink
            className={
              "inline-flex justify-center whitespace-nowrap rounded-lg bg-black text-white px-3 py-2.5 text-sm font-medium hover:text-zinc-800 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring focus-visible:ring-zinc-700 transition-colors"
            }
            to={"/"}
          >
            Start Free Trial
          </NavLink>
        </motion.div> */}

        <motion.div transition={transition} variants={variants}>
          <ShinyButton
            href={"/create"}
            className="relative z-10 h-14 w-full shadow-lg transition-shadow duration-300 hover:shadow-xl font-bold text-xl"
          >
            Start Creating
          </ShinyButton>
          {/* <NavLink
            className={
              "inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent px-3.5 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-zinc-700 transition-colors"
            }
            to={"/"}
          >
            <span className="font-bold text-center bg-gradient-to-r from-primary-text to-secondary-text text-transparent bg-clip-text ">
              Learn More
            </span>
          </NavLink> */}
        </motion.div>
      </div>
    </motion.div>
    // <div className="text-center pt-14 pb-20 md:pt-24 md:pb-32 bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] md:min-h-[86vh] flex items-center justify-center">
    //   <div className="flex flex-col items-center justify-center gap-5">
    //     <div className="itim-regular text-primary-text font-bold text-5xl sm:text-6xl md:text-8xl md:leading-[120px]">
    //       <h1>Take your Career</h1>
    //       <p>Search To The Next Level</p>
    //     </div>
    //     <div className="md:leading-[30px] leading-[22px] mt-3 md:mt-0 text-sm md:text-md text-secondary-text">
    //       <p>
    //         Use professional field-tested resume templates that follow the exact
    //         'resume rules'
    //       </p>
    //       <p>
    //         employers look for. Easy to use and done within minutes - try now
    //         for free!
    //       </p>
    //     </div>
    //     <div className="mt-7 w-full max-w-sm">
    // <ShinyButton
    //   href={"/create"}
    //   className="relative z-10 h-14 w-full shadow-lg transition-shadow duration-300 hover:shadow-xl font-semibold text-xl"
    // >
    //   Start Creating
    // </ShinyButton>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;

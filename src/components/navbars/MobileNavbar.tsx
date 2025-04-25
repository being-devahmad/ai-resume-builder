import { NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/icons/optimCvLogo.png";
import { useAuth } from "@/hooks/useAuth";
import {  useState } from "react";
import { Button } from "@nextui-org/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { LucideYoutube, SlackIcon } from "lucide-react";
import ShinyButton from "../ShinyButton";

const MobileNavbar = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);



  const containerVariants = {
    closed: {
      height: 48,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "90vh",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    closed: {
      opacity: 0,
      y: -6,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="md:hidden">
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className={`nav-container rounded-2xl flex flex-col shadow-sm min-h-[48px] md:max-w-[80%] max-w-[97%] mx-auto justify-start items-center transition-all duration-100 bg-gray-300 top-3 fixed w-full left-1/2 -translate-x-1/2 overflow-hidden z-50`}
      >
        <div className="w-full flex justify-between items-center">
          <NavLink to={"/"} className={"flex items-center justify-center px-4"}>
            <img src={logo} width={100} alt="Logo" />
          </NavLink>
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <ShinyButton href="/dashboard" hideIcon className="px-3 h-9">
                Dashboard
              </ShinyButton>
            ) : (
              <>
                <Button
                  className="relative z-10 flex items-center overflow-hidden text-white h-8 justify-center w-fit px-4 rounded-sm bg-button-gpt hover:bg-[#095c46] transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full 
             shadow-lg hover:shadow-xl
            "
                  to="/login"
                  as={NavLink}
                >
                  <span className="z-10 font-bold">Log In</span>
                </Button>
                <Button
                  as={NavLink}
                  to={"/create-account"}
                  className="relative z-10 flex items-center overflow-hidden text-white h-8 justify-center w-fit px-4 rounded-sm  hover:bg-[#095c46] transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shine_2s_infinite] before:z-0
            bg-gradient-to-r to-[#10a37f] from-[#095c46] hover:scale-105  shadow-lg hover:shadow-xl
           "
                >
                  <span className="z-10 font-bold">Get Started</span>
                </Button>
              </>
            )}
            <Hamburger
              direction="right"
              size={16}
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-content"
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
              className="w-full h-full  relative px-4 pt-8"
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-4">
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/resumes"}
                  >
                    Resumes
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/cover-letter"}
                  >
                    Cover Letter
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/career"}
                  >
                    Career Blogs
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/pricing"}
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/about"}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/contact"}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/company"}
                    onClick={() => setIsOpen(false)}
                  >
                    Business Solutions
                  </NavLink>
                </div>
              </div>
              <div className="absolute gap-5 bottom-2 flex items-end">
                <Button isIconOnly className="hover:bg-white" variant={"flat"}>
                  <GitHubLogoIcon />
                </Button>
                <Button className="hover:bg-white" isIconOnly variant={"flat"}>
                  <LucideYoutube />
                </Button>
                <Button className="hover:bg-white" isIconOnly variant={"flat"}>
                  <SlackIcon />
                </Button>
                <Button className="hover:bg-white" isIconOnly variant={"flat"}>
                  <TwitterLogoIcon />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;

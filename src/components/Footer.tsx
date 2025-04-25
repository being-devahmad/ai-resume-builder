import { NavLink } from "react-router-dom";
import logo from "@/assets/icons/optimCvLogo.png";
import { Facebook, Mail, Youtube } from "lucide-react";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-white pt-10  border-t dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">

          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <img src={logo} alt="" width={150} />
              </span>
            </NavLink>
            <div>
              <p>Advance your career with the BEST professional
                resume tool</p>
            </div>

            <div className="w-full max-w-xl p-4">
              <div className="relative flex items-center bg-white rounded-[14px] shadow-sm">
                <div className="absolute left-4 pointer-events-none">
                  <Mail className="h-6 w-6 text-gray-300" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email & join us"
                  className="flex-grow h-14 pl-12 pr-4 text-gray-600 placeholder-gray-300 bg-transparent focus:outline-none"
                />
                <button
                  className=" px-6 py-3 text-white text-md font-medium bg-[#30D0AD] hover:bg-[#35c4a2] rounded-[14px] transition-colors"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-[#50535F]  dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to={"/"} className="hover:underline">
                    Personal & Business
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to={"/"} className="hover:underline">
                    View Demo
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to={"/"} className="hover:underline">
                    Our Roadmap
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to={"/pricing"} className="hover:underline">
                    Pricing
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to={"/pricing"} className="hover:underline">
                    All Features
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Links
              </h2>
              <ul className=" dark:text-gray-400 font-medium text-[#50535F] ">
                <li className="mb-4">
                  <NavLink
                    to={"https://github.com"}
                    target="_blank"
                    className="hover:underline "
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to={"https://discord.com"}
                    target="_blank"
                    className="hover:underline"
                  >
                    Guide
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"https://discord.com"}
                    target="_blank"
                    className="hover:underline"
                  >
                    Press Kit
                  </NavLink>
                </li>

              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Policy
              </h2>
              <ul className="text-[#50535F] dark:text-gray-400 font-medium flex flex-col gap-4">
                <li >
                  <NavLink to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms-and-conditions"
                    className="hover:underline"
                  >
                    Terms of Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms-and-conditions"
                    className="hover:underline"
                  >
                    Cookies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms-and-conditions"
                    className="hover:underline"
                  >
                    All Legal
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="md:col-span-2">
            <div className="flex flex-col gap-4">
              <NavLink
                to="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#3EDAD8] hover:text-[#3EDAD8]"
              >
                <InstagramLogoIcon className="w-5 h-5" />
              </NavLink>
              <NavLink
                to="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#3EDAD8] hover:text-[#3EDAD8]"
              >
                <Facebook className="w-5 h-5" />
              </NavLink>
              <NavLink
                to="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#3EDAD8] hover:text-[#3EDAD8]"
              >
                <Youtube className="w-5 h-5" />
              </NavLink>
              <NavLink
                to="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#3EDAD8] hover:text-[#3EDAD8]"
              >
                <TwitterLogoIcon className="w-5 h-5" />
              </NavLink>
            </div>
          </div>

        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            All Rights Reserved.
            <a className="hover:underline">
              {" "}Optim <span className="text-button-gpt">CV {" "}</span>
            </a>
            2025{" "}
          </span>
          <div className="flex gap-4 mt-4 sm:justify-center sm:mt-0">
            <NavLink
              to="/privacy-policy"
              className="text-black hover:text-gray-900"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-and-condition"
              className="text-black hover:text-gray-900"
            >
              Terms & Condition
            </NavLink>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

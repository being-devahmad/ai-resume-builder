// import { quicksand } from "@/lib/fonts"
import logo from "@/assets/icons/optimCvLogoWhite.png";
import { Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";


export function WelcomeSection() {
    return (
        <div className="hidden lg:flex flex-col items-center justify-center h-screen bg-[#30D0AD] rounded-xl p-8
         text-white">
            <div className="max-w-md ">
                <NavLink to="/" className="flex items-center mb-5">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <Image src={logo} alt="" width={150} />
                    </span>
                </NavLink>
                <div>
                    <h1 className="text-4xl font-bold leading-tight">
                        Welcome to OptimCV 
                    </h1>
                    <p className="text-4xl mt-4">
                        Log in or create an account to start building your dream resume.
                    </p>
                </div>
            </div>
        </div>
    )
}


// import AuthCarousel from "@/components/AuthCarousel";
// import MaxWidthContainer from "@/components/MaxWidthContainer";
// import PaddingContainer from "@/components/PaddingContainer";
import { WelcomeSection } from "@/components/WelcomeSection";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (

    <div className="grid md:grid-cols-2 my-6">
      <div className="flex justify-center items-center  w-70">
        <div >
          <WelcomeSection />
        </div>
      </div>
      <div className="flex justify-center md:justify-start pt-10 items-center w-30">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

import dashBoardImage from "@/assets/images/cvGenDashboard.png";
import UsersReview from "@/components/UsersReview";
import Features from "@/components/Features";
import FAQs from "@/components/FAQs";
import BuildCvNow from "@/components/BuildCvNow";
import ExclusiveContent from "@/components/ExclusiveContent";
import Hero from "@/components/Hero";
import MaxWidthContainer from "@/components/MaxWidthContainer";

const HomePage = () => {
  return (
    <div className="">
      <MaxWidthContainer>
        <Hero />
      </MaxWidthContainer>
      <MaxWidthContainer>
        <div className="shadow-md w-fit rounded-md overflow-hidden">
          <img src={dashBoardImage} alt="" />
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer className="py-10">
        <Features />
      </MaxWidthContainer>
      <MaxWidthContainer className="py-10">
        <UsersReview />
      </MaxWidthContainer>
      <div className="w-full bg-bg-navigation">
        <MaxWidthContainer className="py-10">
          <FAQs />
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer className="py-10">
        <BuildCvNow />
      </MaxWidthContainer>
      <div className="w-full bg-bg-navigation">
        <MaxWidthContainer>
          <ExclusiveContent />
        </MaxWidthContainer>
      </div>
    </div>
  );
};

export default HomePage;

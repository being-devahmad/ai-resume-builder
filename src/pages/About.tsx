import PaddingContainer from "@/components/PaddingContainer";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import adidas from "@/assets/icons/brands/adidasLogo.svg";
import amazon from "@/assets/icons/brands/amazon.svg";
import deloitte from "@/assets/icons/brands/deloitte.svg";
import nike from "@/assets/icons/brands/nike.svg";
import philips from "@/assets/icons/brands/philips.svg";
import UsersReview from "@/components/UsersReview";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import aiImage from "@/assets/illustrations/aiPowered.png";
import artImage from "@/assets/illustrations/art.png";
import videoCv from "@/assets/illustrations/cvVideo.mp4";

import lettersIcon from "@/assets/illustrations/letters-created.svg";
import languagesIcon from "@/assets/illustrations/languages.svg";
import resumeCreated from "@/assets/illustrations/resume-created.svg";
import signUps from "@/assets/illustrations/sign-ups.svg";
import Heading from "./Heading";
import IconCard from "@/components/cards/IconCard";
import ExclusiveContent from "@/components/ExclusiveContent";

const About = () => {
  return (
    <>
      <MaxWidthContainer className="">
        <div className="my-10 ">
          <Heading className="mb-20">
            We aspire to be the advisor, advocate and keeper of peoples personal
            career journey
          </Heading>
          <video autoPlay loop muted className="w-full rounded-xl">
            <source src={videoCv} type="video/mp4" />
          </video>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 my-10 gap-3">
          <IconCard
            iconSrc={resumeCreated}
            heading="44,007,190 resumes created"
          />
          <IconCard
            iconSrc={lettersIcon}
            heading="4,415,823 cover letters created"
          />
          <IconCard iconSrc={signUps} heading="25 000+ sign-ups each day" />
          <IconCard iconSrc={languagesIcon} heading="20 languages supported" />
        </div>
        <PaddingContainer className="my-20">
          <h2 className="mb-6 text-4xl  text-center font-semibold md:text-5xl text-primary-text">
            Empowering Careers at Every Stage
          </h2>
          <p className="text-secondary-text  mx-auto text-center text-md mb-4 md:w-[80%]">
            We believe every professional deserves to showcase their full
            potential. Whether you are a recent graduate stepping into the
            workforce, a mid-career professional looking to pivot, or a seasoned
            leader striving for the next big challenge, we are here to support
            your journey.
          </p>
          <p className="text-secondary-text  mx-auto text-center text-md mb-4 md:w-[80%]">
            Our mission is to enhance your career prospects through the perfect
            blend of <span className="font-bold">AI-powered tools</span> and{" "}
            <span className="font-bold">personalized coaching.</span>
          </p>
        </PaddingContainer>
        <MaxWidthContainer className="p-0">
          <div className="grid my-24 md:grid-cols-2 gap-5">
            <Card shadow="none" className="bg-bg-card p-4 ">
              <CardHeader className="flex h-full items-center justify-center">
                <h2 className="mb-6 text-center md:text-left text-5xl font-semibold md:text-6xl text-primary-text">
                  Our Unique Approach
                </h2>
              </CardHeader>
            </Card>
            <Card shadow="none" className="bg-bg-card p-4">
              <CardHeader className="flex-col">
                <p className="text-secondary-text md:text-left text-center text-md mb-8">
                  Every career is a story, and no two stories are alike. That is
                  why we combine the cutting-edge precision of{" "}
                  <span className="font-bold">AI technology</span> with the deep
                  insight of experienced career coaches to create solutions
                  tailored just for you.
                </p>
                <p className="text-secondary-text md:text-left text-center text-md mb-8">
                  Together, we will help you highlight your unique skills,
                  achievements, and aspirations, ensuring you stand out in
                  today&apos;s competitive job market.
                </p>
              </CardHeader>
            </Card>
            <Card shadow="none" className="bg-bg-card p-4">
              <CardHeader>
                <h2 className="text-md md:text-left text-center text-secondary-text">
                  Our state-of-the-art AI technology analyzes your background,
                  skills, and aspirations, crafting pre-written phrases that
                  truly reflect your unique persona and expertise.
                </h2>
              </CardHeader>
              <CardBody>
                <Image src={aiImage} alt="Al Powered" />
              </CardBody>
            </Card>
            <Card shadow="none" className="bg-bg-card ">
              <CardHeader>
                <h2 className="text-md p-4 md:text-left text-center text-secondary-text">
                  Our state-of-the-art AI technology analyzes your background,
                  skills, and aspirations, crafting pre-written phrases that
                  truly reflect your unique persona and expertise.
                </h2>
              </CardHeader>
              <CardBody className="flex-col p-0 justify-center">
                <Image
                  src={artImage}
                  className="rounded-none"
                  alt="We Create Art"
                />
              </CardBody>
            </Card>
          </div>
        </MaxWidthContainer>

        <PaddingContainer className="bg-bg-card py-20 rounded-lg">
          <h2 className="mb-6 text-4xl  text-center font-semibold md:text-5xl text-primary-text">
            Proven Success <br /> Where Our Clients Have Landed
          </h2>
          <p className="text-secondary-text md:w-2/4 mx-auto text-center text-md mb-8">
            We are proud to have helped professionals secure roles at some of
            the world’s most respected companies, including:
          </p>
          <div className="grid md:grid-cols-5 grid-cols-3 gap-3 w-full">
            <Card className="border-2 border-secondary-text border-dashed">
              <CardBody className="items-center  justify-center">
                <Image src={adidas} alt="" className="h-8  rounded-none" />
              </CardBody>
            </Card>
            <Card className="border-2 border-secondary-text border-dashed">
              <CardBody className="items-center  justify-center">
                <Image src={amazon} alt="" className="h-9  rounded-none" />
              </CardBody>
            </Card>
            <Card className="border-2 border-secondary-text border-dashed">
              <CardBody className="items-center  justify-center">
                <Image src={philips} alt="" className="h-12  rounded-none" />
              </CardBody>
            </Card>
            <Card className="border-2 border-secondary-text border-dashed">
              <CardBody className="items-center  justify-center">
                <Image src={deloitte} alt="" className="h-8  rounded-none" />
              </CardBody>
            </Card>
            <Card className="border-2 border-secondary-text border-dashed">
              <CardBody className="items-center  justify-center">
                <Image src={nike} alt="" className="h-12  rounded-none" />
              </CardBody>
            </Card>
          </div>
          <p className="text-secondary-text md:w-2/4 mx-auto mt-8  text-center text-md mb-8">
            From startups to global enterprises, our clients success is proof of
            what is possible when your career potential is unlocked.
          </p>
        </PaddingContainer>

        <PaddingContainer className="py-32">
          <h2 className="mb-6 text-4xl  text-center font-semibold md:text-5xl text-primary-text">
            Unlock Your Career Potential
          </h2>
          <p className="text-secondary-text  mx-auto text-center text-md mb-4 md:w-[80%]">
            Join the growing community of professionals who have transformed
            their careers with our tools and support.
          </p>

          <p className="text-secondary-text  mx-auto text-center text-md mb-4 md:w-[80%]">
            Whether it is{" "}
            <span className="font-bold">
              crafting a standout resume, preparing for interviews,
            </span>{" "}
            or <span className="font-bold">charting a long-term strategy</span>,
            we are here to help you every step of the way.
          </p>
          <p className="text-secondary-text  mx-auto text-center text-md mb-4 md:w-[80%]">
            Wherever you are in your career journey, we are your partner for
            success.
          </p>
        </PaddingContainer>
      </MaxWidthContainer>

      <div className="w-full pb-10 pt-20 bg-bg-card">
        <MaxWidthContainer>
          <UsersReview />
        </MaxWidthContainer>
      </div>
      <PaddingContainer>
        <ExclusiveContent />
      </PaddingContainer>
    </>
  );
};

export default About;

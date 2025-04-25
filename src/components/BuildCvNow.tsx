import bgImage from "@/assets/images/bg.png";
import ShinyButton from "./ShinyButton";

const BuildCvNow = () => {
  return (
    <div
      className="md:min-h-screen py-10 md:py-0  shadow-md rounded-lg flex items-center justify-center my-20"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="text-center max-w-[900px]">
        <h2 className="md:text-6xl text-3xl itim-regular font-bold md:leading-[80px]">
          Get recruited faster.{" "}
          <span className="text-button-gpt">
            Accelerate your job search now
          </span>{" "}
          with our fast online CV builder.
        </h2>

        <div className="flex items-center justify-center mt-6">
          <ShinyButton
            href="create"
            className="px-6 shadow-lg font-bold hover:shadow-xl transition-shadow duration-300 border-border-color py-2"
          >
            Create Now
          </ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default BuildCvNow;

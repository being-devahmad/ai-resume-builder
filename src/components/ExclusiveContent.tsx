import ShinyButton from "./ShinyButton";
import { Input } from "./ui/input";

const ExclusiveContent = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h3 className="mb-7 font-bold text-button-gpt">Get Your Dream Job</h3>
      <div className="flex  max-w-[650px] items-center justify-center flex-col gap-5">
        <h2 className="itim-regular text-4xl md:text-7xl text-center">
          Join to get exclusive content
        </h2>
        <div className="flex flex-col gap-3 w-full md:w-[500px]">
          <Input placeholder="Enter your email" className="" />

          <ShinyButton className="w-full shadow-lg hover:shadow-xl transition-shadow border-border-color flex items-center justify-center  font-semibold py-2 px-2">
            Join Now
          </ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveContent;

import { Card, CardHeader, CardTitle } from "../ui/card";

const FeatureCard = ({
  heading,
  imageSrc,
}: {
  imageSrc: string;
  heading: string;
}) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-white ring-1 ring-gray-200 rounded-lg hover:-translate-y-1 transition-all duration-300 ease-out">
        <Card className="w-full select-none cursor-pointer hover:bg-slate-100 transition-all">
          {/* <Card className=" w-full select-none cursor-pointer hover:bg-slate-100 transition-all  "> */}
          <CardHeader className="flex items-center  gap-3 flex-row ">
            <img
              className="rounded-sm cursor-pointer"
              src={imageSrc}
              width={100}
            />
            <CardTitle className="leading-8 text-md md:text-lg  2xl:text-2xl">
              {heading}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;

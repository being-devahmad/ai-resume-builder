import { Button } from "@nextui-org/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const FeaturesContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        // staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="w-full p-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid h-[250px] md:h-[290px] lg:h-[250px] grid-cols-3 gap-3">
        <motion.div className="w-full  rounded-2xl" variants={itemVariants}>
          <NavLink to={"/"}>
            {/* <Card className="h-full group transition-all duration-300 overflow-hidden hover:bg-[#34343a] bg-[#232326] border-0"> */}
            <Card className="h-full  group transition-all duration-300 overflow-hidden hover:bg-white bg-bg-card border-0">
              <CardHeader className="">
                <CardTitle className="text-md font-bold transition-colors duration-300 text-[#8a8f98] group-hover:text-black">
                  Build
                </CardTitle>
                <CardDescription className="text-xs transition-colors duration-300 text-[#8a8f98] group-hover:text-black">
                  Make Progress with issues <br /> tracking and cycle planning
                </CardDescription>
              </CardHeader>
              <CardContent
                className="h-[88%] relative "
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23000' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                <Button
                  size="sm"
                  radius="full"
                  className="font-semibold group-hover:bg-button-gpt-hover text-white bg-button-gpt w-fit absolute  lg:top-1/2 top-[60%] right-2 -translate-y-1/2"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </NavLink>
        </motion.div>
        <motion.div className="w-full  rounded-2xl" variants={itemVariants}>
          <NavLink to={"/"}>
            <Card className="h-full  group transition-colors duration-300 overflow-hidden hover:bg-white bg-bg-card border-0">
              <CardHeader className="">
                <CardTitle className="text-md font-bold text-[#8a8f98] transition-colors duration-300 group-hover:text-black">
                  Plan
                </CardTitle>
                <CardDescription className="text-xs  transition-colors duration-300 text-[#8a8f98] group-hover:text-black">
                  Set the project direction <br /> with projects an initiatives
                </CardDescription>
              </CardHeader>
              <CardContent
                className="h-[88%] relative "
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23000' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                <Button
                  size="sm"
                  radius="full"
                  className="font-semibold bg-button-gpt text-white group-hover:bg-button-gpt-hover  w-fit absolute  lg:top-1/2 top-[60%] right-2 -translate-y-1/2"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </NavLink>
        </motion.div>
        <div className="grid grid-cols-1 gap-1">
          <motion.div className="w-full rounded-2xl" variants={itemVariants}>
            <HoverCard
              img="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Insights"
              content="Instant analytics for any stream of work"
            />
          </motion.div>
          <motion.div className="w-full rounded-2xl" variants={itemVariants}>
            <HoverCard
              img="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Asks"
              content="Turn requests in Slack into actionable issues"
            />
          </motion.div>
          <motion.div className="w-full  rounded-2xl" variants={itemVariants}>
            <SimpleCard title="Security" content="Secure your workspace" />
          </motion.div>
          <motion.div className="w-full   rounded-2xl" variants={itemVariants}>
            <SimpleCard title="Integrations" content="Enhance your workspace" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const HoverCard = ({
  title,
  content,
  img,
}: {
  title: string;
  content: string;
  img: string;
}) => {
  return (
    <Card className="relative overflow-hidden group  transition-all duration-300 cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:grayscale-0 grayscale"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-[#232326]/80 group-hover:bg-[#34343a]/40 transition-all duration-300" /> */}
        <div className="absolute inset-0 bg-white/80 group-hover:bg-white/20 transition-all duration-300" />
      </div>

      <CardHeader className="relative p-2 lg:p-4 z-10">
        <CardTitle className="text-md font-bold transition-all duration-300 text-[#8a8f98] group-hover:text-black">
          {title}
        </CardTitle>
        {/* <CardDescription className="text-xs text-[#d0d6e0] group-hover:text-[#d0d6e0]"> */}
        <CardDescription className="text-xs transition-all duration-300 text-[#8a8f98] group-hover:text-black">
          {content}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export const SimpleCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    // <Card className="cursor-pointer p-0 group transition-all duration-300 overflow-hidden hover:bg-[#34343a] bg-[#232326] border-0">
    <Card className="cursor-pointer p-0 group transition-all duration-300 overflow-hidden hover:bg-white bg-bg-navigation border-0">
      <div className="flex lg:items-center items-start lg:flex-row flex-col gap-1 lg:gap-2 p-2 lg:p-3 relative  z-10">
        <h2 className="text-md font-bold transition-colors duration-300 text-[#8a8f98] group-hover:text-black">
          {title}
        </h2>
        <p className="text-xs transition-colors duration-300 text-[#8a8f98] group-hover:text-black">
          {content}
        </p>
      </div>
    </Card>
  );
};

export default FeaturesContent;

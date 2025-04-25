import { motion } from "framer-motion";
import { SimpleCard } from "./FeaturesContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

const CompanyContent = () => {
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
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="w-full h-fit p-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid h-[150px] grid-cols-3 gap-3">
        <motion.div className="grid grid-cols-1 gap-1">
          <motion.div className="w-full  rounded-2xl" variants={itemVariants}>
            <SimpleCard title="Blog" content="Read Recent news" />
          </motion.div>
          <motion.div className="w-full  rounded-2xl" variants={itemVariants}>
            <SimpleCard title="Brand" content="Assets and guidelines" />
          </motion.div>
          <motion.div className="w-full  rounded-2xl" variants={itemVariants}>
            <SimpleCard title="Readme" content="A story about magic" />
          </motion.div>
        </motion.div>
        <motion.div className="w-full rounded-2xl" variants={itemVariants}>
          <HoverCard
            img="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Insights"
            content="Instant analytics for any stream of work"
          />
        </motion.div>
        <motion.div className="w-full  rounded-2xl" variants={itemVariants}>
          <HoverCard
            href="/about"
            img="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="About"
            content="About us"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const HoverCard = ({
  title,
  content,
  img,
  href,
}: {
  title: string;
  content: string;
  img: string;
  href?: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => (href ? navigate(href) : null)}
      className="relative h-full overflow-hidden group  transition-all duration-300 cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:grayscale-0 grayscale"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-white/80 group-hover:bg-white/20 transition-all duration-300" />
      </div>

      <CardHeader className="relative p-4 z-10">
        <CardTitle className="text-md font-bold transition-all duration-300 text-[#8a8f98] group-hover:text-black">
          {title}
        </CardTitle>
        <CardDescription className="text-xs transition-all duration-300 text-[#8a8f98] group-hover:text-black">
          {content}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 left-4 top-8 p-0">
        <Button
          size="sm"
          radius="full"
          className="font-semibold group-hover:bg-button-gpt-hover text-white bg-button-gpt  w-fit"
        >
          Visit
        </Button>
      </CardContent>
    </Card>
  );
};

export default CompanyContent;

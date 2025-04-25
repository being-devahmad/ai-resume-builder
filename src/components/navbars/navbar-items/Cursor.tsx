import { motion } from "framer-motion";
import { Position } from "../Navbar";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-button-gpt text-white md:h-12"
    />
  );
};

export default Cursor;

import { ReactNode, JSX, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface FlyoutLinkProps {
  href: string;
  setState: (value: boolean) => void;
  FlyoutContent?: () => JSX.Element;
  children: ReactNode;
}
const FlyoutLink = ({
  href,
  setState,
  children,
  FlyoutContent,
}: FlyoutLinkProps) => {
  const [open, setIsOpen] = useState<boolean>(false);
  const showFlyout = FlyoutContent && open;
  return (
    <div
      onMouseEnter={() => {
        setIsOpen(true);
        setState(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
        setState(false);
      }}
      className="w-full h-fit "
    >
      <NavLink to={href}>{children}</NavLink>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              backgroundColor: "#f0f0f0",
            }}
            animate={{
              opacity: 1,
              backgroundColor: "#f0f0f0",

              height: "fit-content",
            }}
            exit={{
              opacity: 0,
              height: 0,
              backgroundColor: "#f0f0f0",
            }}
            style={{ translateX: "-50%" }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="absolute left-1/2  w-full top-[48px] z-50  bg-green-400 rounded-b-3xl text-white "
          >
            <div className="absolute   -top-4 left-0 right-0 h-6 bg-transparent" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;

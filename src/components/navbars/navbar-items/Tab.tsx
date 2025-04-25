import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import { Position } from "../Navbar";
import { NavLink } from "react-router-dom";

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: ReactNode;
  href?: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLAnchorElement>(null);

  return (
    <li>
      <NavLink
        to={href ?? "#"}
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className={({ isActive }) =>
          `relative z-10 font-semibold block cursor-pointer px-3 py-1.5 text-xs uppercase 
           transition-colors duration-200
           text-black hover:text-white
           md:px-5 md:py-3 md:text-base
           rounded-full
           ${isActive ? "!text-white bg-button-gpt-hover" : ""}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Tab;

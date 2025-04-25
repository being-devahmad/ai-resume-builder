import { useState } from "react";
import Tab from "./Tab";
import Cursor from "./Cursor";

const Tabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-border-color  p-1"
    >
      <Tab setPosition={setPosition} href="pricing">
        Unlock Membership
      </Tab>
      <Tab setPosition={setPosition} href="about">
        About
      </Tab>
      <Tab setPosition={setPosition} href="contact">
        Contact
      </Tab>
      <Tab setPosition={setPosition} href="faqs">
        FAQ's
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

export default Tabs;

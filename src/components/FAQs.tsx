import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { faqs } from "@/data";
import ShinyButton from "./ShinyButton";

const FAQs = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <div className="flex-col lg:flex-row flex py-10 px-3 lg:py-20 lg:px-10  rounded-md lg:justify-between gap-10 lg:gap-0 lg:min-h-[70vh]">
      <div className="lg:min-w-[400px] w-full items-center lg:items-start flex  flex-col gap-5">
        {/* <h2 className="text-4xl text-center lg:text-left leading-[60px] font-bold">
          Frequently Asked Questions
        </h2> */}
        <h2 className="text-3xl mb-5 text-center md:text-left font-extrabold md:text-5xl text-primary-text">
          Frequently Asked Questions
        </h2>

        <ShinyButton className="w-fit font-semibold py-2 px-4" href={"/faqs"}>
          See All Questions
        </ShinyButton>
        <div className="flex items-center gap-2">
          <p className="text-secondary-text">Still need help?</p>
          <NavLink
            className={"text-button-gpt font-semibold hover:underline"}
            to={"/contact"}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={activeItem}
          onValueChange={setActiveItem}
        >
          {faqs.map(({ value, title, content }) => (
            <AccordionItem
              key={value}
              value={value}
              className={`
               rounded-lg shadow-sm mb-2 hover:outline outline-2 outline-border-color
              ${
                activeItem === value
                  ? "border bg-white border-border-color shadow-lg"
                  : "border-border-color"
              }
              transition-all duration-100
            `}
            >
              <AccordionTrigger
                className={`
                px-4 hover:no-underline
                ${
                  activeItem === value
                    ? "text-primary-text font-bold"
                    : "font-bold"
                }
              `}
              >
                {title}
              </AccordionTrigger>
              <AccordionContent className="px-4 font-semibold text-secondary-text">
                {content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;

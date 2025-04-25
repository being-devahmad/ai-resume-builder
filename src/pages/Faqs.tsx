import MaxWidthContainer from "@/components/MaxWidthContainer";
import PaddingContainer from "@/components/PaddingContainer";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import { AccordionItem } from "@radix-ui/react-accordion";
import { useState } from "react";
import Heading from "./Heading";
import QuickAnswerCard from "@/components/cards/QuickAnswerCard";
import {
  BadgeCheck,
  FlagIcon,
  HardDrive,
  Layers,
  MessageCircleHeartIcon,
  MessageCircleIcon,
  Rocket,
  SmileIcon,
} from "lucide-react";

const Faqs = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <div className="pb-32">
      <MaxWidthContainer className="">
        <PaddingContainer className="py-10 md:py-20">
          <div className="text-center">
            <Heading>Frequently asked questions</Heading>
            <p className="text-secondary-text">
              Get in touch and let us know how we can help
            </p>
          </div>
        </PaddingContainer>
        <div className="">
          <h2 className="text-3xl">Quick Answers</h2>
          <div className="grid gap-3 mt-6 grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
            <QuickAnswerCard
              icon={FlagIcon}
              question="What is Untitled?"
              answer="Here for the first time? Learn how Untitled Ul can help you grow."
            />
            <QuickAnswerCard
              icon={Layers}
              question="The Untitled Platform"
              answer="Tracking your customers in the Untitled platform for growth."
            />
            <QuickAnswerCard
              icon={Rocket}
              question="Installing Untitled"
              answer="Everything you need to know to install Untitled and set up your workspace."
            />
            <QuickAnswerCard
              icon={SmileIcon}
              question="Getting started 101"
              answer="Everything you need to know to get started with Untitled."
            />
            <QuickAnswerCard
              icon={MessageCircleIcon}
              question="Messaging Customers"
              answer="Setting up and customizing Untitled to start chatting with customers."
            />
            <QuickAnswerCard
              icon={HardDrive}
              question="Untitled Inbox"
              answer="Set up and learn the blazingly fast next gen Untitled Inbox."
            />
            <QuickAnswerCard
              icon={BadgeCheck}
              question="Product Tours"
              answer="Show your customers the way to success with interactive tours."
            />
            <QuickAnswerCard
              icon={MessageCircleHeartIcon}
              question="Untitled Bot"
              answer="Setting up the the autornated Untitled Bot to provide instant resolutions 24/7."
            />
          </div>
        </div>
        <PaddingContainer className="px-0  py-10">
          <h2 className="text-3xl mb-6">General Faqs</h2>
          <div className="w-full ">
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
               rounded-lg mb-2 hover:outline outline-1
              ${
                activeItem === value
                  ? "border bg-white border-black shadow-lg"
                  : "border-border"
              }
              transition-all duration-200
            `}
                >
                  <AccordionTrigger
                    className={`
                px-4 hover:no-underline
                ${activeItem === value ? "text-primary font-medium" : ""}
              `}
                  >
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </PaddingContainer>
      </MaxWidthContainer>
    </div>
  );
};

export default Faqs;

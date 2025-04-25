import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import { PreviewResume } from "./PreviewResume";
import { ContactInfo } from "./ContactInfo"

const steps = [
  { id: "contact", title: "Contact Info" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "finish", title: "Finish" },
];

export const ResumeForm2 = ({ allData, setAllData, categoryData }) => {
  const [activeTab, setActiveTab] = useState("contact");

  const handleActivetab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900
    dark:to-gray-800 p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Build Your Resume
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Create a professional resume in minutes
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step) => (
              <span
                key={step.id}
                className={`text-xs lg:text-sm font-medium
                   ${activeTab === step.id
                    ? "active text-blue-600 font-bold"
                    : "text-gray-600"
                  }`}
                style={{ cursor: "pointer" }}
                onClick={() => handleActivetab(step.id)}
              >
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 lg:p-6 mb-6 border">
          <ScrollArea className="h-[calc(100vh-300px)] lg:h-[450px] pr-4">
            {activeTab === "contact" ? (
              <ContactInfo
                allData={allData}
                setAllData={setAllData}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                categoryData={categoryData}
              />
            ) : activeTab === "experience" ? (
              <Experience
                allData={allData}
                setAllData={setAllData}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                categoryData={categoryData}
              />
            ) : activeTab === "education" ? (
              <Education
                allData={allData}
                setAllData={setAllData}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                categoryData={categoryData}
              />
            ) : activeTab === "skills" ? (
              <Skills
                allData={allData}
                setAllData={setAllData}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                categoryData={categoryData}
              />
            ) : activeTab === "finish" ? (
              <PreviewResume
                allData={allData}
                setAllData={setAllData}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                categoryData={categoryData}
              />
            ) : (
              ""
            )}
          </ScrollArea>
        </div>

        {/* Navigation */}
        {/* <div className="flex justify-between">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </div>
  );
};

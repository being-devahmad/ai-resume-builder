import React, { useState, useRef, useEffect } from "react";
import { ResumeProvider } from "@/hooks/useResume";
import { Azurill } from "@/templates/azurill";
import { Chikorita } from "@/templates/chikorita";
import { Nosepass } from "@/templates/nosepass";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { toast } from '@/hooks/use-toast';
import { Onyx } from "@/templates/onyx";
import Bronzor from "@/templates/bronzor";
// import Pikachu from "@/templates/pikachu";
import TemplateArtboard from "@/components/resumeDashboard/TemplateArtboard";
import { Button } from "@/components/ui/button";
import { ResumeForm } from "@/components/forms/ResumeForm/ResumeForm";
import Field from "@/templates/field";
// import generatePDF, { Resolution, Margin } from 'react-to-pdf';

const ResumeStart: React.FC = () => {
  const { id } = useParams();
  // console.log("TemplateId--------->", id);

  const [resumeID, setResumeID] = useState("");

  const location = useLocation();
  const { categoryData, resume } = location.state || {};
  console.log("Received Data:", categoryData, resume);

  const resumeRef = useRef<HTMLDivElement>(null);

  const [allData, setAllData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    postalCode: "",
    summary: "",
    experiences: [],
    education: [],
    skills: [],
  });
  useEffect(() => {
    if (resume) {
      setAllData({
        ...allData,
        firstName: resume?.firstName,
        lastName: resume?.lastName,
        jobTitle: resume?.jobTitle,
        phone: resume?.phone,
        email: resume?.email,
        country: resume?.country,
        city: resume?.city,
        postalCode: resume?.postalCode,
        summary: resume?.summary,
        experiences: resume?.experiences ?? [],
        education: resume?.education ?? [],
        skills: resume?.skills ?? [],
      });
      setResumeID(resume?.id);
    }
  }, []);

  const navigate = useNavigate()

  const handleDownload = () => {
    navigate('/pricing')
  }

  const renderTemplate = () => {
    switch (id) {
      case "1":
        return <Azurill allData={allData} />;
      case "2":
        return <Chikorita allData={allData} />;
      case "3":
        return <Nosepass allData={allData} />;
      case "4":
        return <Onyx allData={allData} />;
      case "5":
        return <Bronzor allData={allData} />;
      case "6":
        return <Field allData={allData} />;
      // case "6":
      //   return <Pikachu allData={allData} />;
      default:
        return <Azurill allData={allData} />;
    }
  };

  return (
    <>
      <ResumeProvider>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className="w-full lg:w-1/2 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200">
            <ResumeForm
              allData={allData}
              setAllData={setAllData}
              categoryData={categoryData}
              resumeID={resumeID}
            />
          </div>
          <div className="w-full lg:w-1/2 overflow-y-auto flex flex-col">
            <div className="sticky top-0 z-10 bg-white p-4 shadow-md">
              <Button
                className="w-full bg-gray-400 text-white px-4 py-2 rounded-md font-semibold
                            hover:bg-gray-500 transition-colors"
                onClick={handleDownload}
              >
                Download as PDF
              </Button>
            </div>
            <div className="flex-grow overflow-hidden flex justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <TemplateArtboard>
                  <div ref={resumeRef}>{renderTemplate()}</div>
                </TemplateArtboard>
              </div>
            </div>
          </div>
        </div>
      </ResumeProvider>
    </>
  );
};

export default ResumeStart;

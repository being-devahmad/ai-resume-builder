import { useState, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TemplatePreview } from "./TemplatePreview";
import { useNavigate } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";

// Worker source ko public folder se set karein
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

interface FileDetails {
  name: string;
  uploadDate: string;
  content: string | ArrayBuffer | null;
}

export default function ResumeUpload() {
  const [file, setFile] = useState<FileDetails | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const navigate = useNavigate();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      console.log("selectedFile>>",selectedFile)
      if (selectedFile) {
        handleFile(selectedFile);
      }
    },
    []
  );

//   const handleFile = (uploadedFile: File) => {
//     const supportedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "text/plain",
//       "text/html",
//       "text/rtf",
//     ];

//     if (supportedTypes.includes(uploadedFile.type)) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setFile({
//           name: uploadedFile.name,
//           uploadDate: new Date().toLocaleDateString(),
//           content: e.target?.result || null,
//         });
//       };
//       reader.readAsText(uploadedFile);
//     } else {
//       alert(
//         "Please upload a supported file format (doc, docx, pdf, txt, html, rtf)"
//       );
//     }
//   };


const handleFile = (uploadedFile: File) => {
    const supportedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
      "text/html",
      "text/rtf",
    ];
  
    if (supportedTypes.includes(uploadedFile.type)) {
      if (uploadedFile.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const arrayBuffer = e.target?.result as ArrayBuffer;
            console.log("Array Buffer:", arrayBuffer);
  
            // Load PDF document
            const pdfData = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            console.log("PDF Metadata:", pdfData);
  
            let extractedText = "";
  
            // Extract text from each page
            for (let i = 1; i <= pdfData.numPages; i++) {
              try {
                const page = await pdfData.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items
                  .map((item: any) => item.str)
                  .join(" ");
                extractedText += pageText + "\n";
              } catch (pageError) {
                console.error(`Error processing page ${i}:`, pageError);
              }
            }
            console.log("Data-->",extractedText)
            setFile({
              name: uploadedFile.name,
              uploadDate: new Date().toLocaleDateString(),
              content: extractedText,
            });
  
            console.log("Extracted Text:", extractedText);
          } catch (error) {
            console.error("Error while processing PDF:", error);
            alert("An error occurred while processing the PDF file. Please try again.");
          }
        };
  
        reader.readAsArrayBuffer(uploadedFile);
      } else {
        // For non-PDF files
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            setFile({
              name: uploadedFile.name,
              uploadDate: new Date().toLocaleDateString(),
              content: e.target?.result || null,
            });
          } catch (error) {
            console.error("Error while processing non-PDF file:", error);
            alert("An error occurred while processing the file. Please try again.");
          }
        };
  
        reader.readAsText(uploadedFile);
      }
    } else {
      alert("Please upload a supported file format (doc, docx, pdf, txt, html, rtf)");
    }
  };
  
  
  const removeFile = useCallback(() => {
    setFile(null);
  }, []);

  const handleNext = useCallback(() => {
    setShowPreview(true);
  }, []);

  const handleBack = () => {
    navigate("/select");
  };

  if (showPreview && file) {
    return <TemplatePreview fileName={file.name} fileContent={file.content} />;
  }
console.log("stateData>",file)
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Upload <span className="text-blue-500">your resume</span>
        </h1>

        {!file ? (
          <Card
            className={`p-8 border-2 border-dashed
                            ${
                              isDragging
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300"
                            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 text-blue-500">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18Z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">
                  Drag & drop your file here or{" "}
                  <label className="text-blue-500 cursor-pointer hover:text-blue-600">
                    Browse file
                    <input
                      type="file"
                      className="hidden"
                      accept=".doc,.docx,.pdf,.txt,.html,.rtf"
                      onChange={handleFileInput}
                    />
                  </label>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Support (doc, docx, pdf, txt, html, rtf)
                </p>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    Upload on {file.uploadDate}
                  </p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="p-2 text-gray-500 hover:text-gray-700"
                aria-label="Remove file"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </Card>
        )}

        <div className="flex justify-between">
          <Button variant="ghost" onClick={handleBack}>
            Back
          </Button>
          {file && <Button onClick={handleNext}>Next</Button>}
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect } from 'react';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GoogleAIFileManager } from "@google/generative-ai/server";

// interface AIFileParserProps {
//     fileContent: string | ArrayBuffer | null;
//     onParseComplete: (data: any) => void;
//     onParseError: (error: string) => void;
//     onParsingProgress: (progress: number) => void;
// }

// export const AIFileParser: React.FC<AIFileParserProps> = ({
//     fileContent,
//     onParseComplete,
//     onParseError,
//     onParsingProgress,
// }) => {
//     useEffect(() => {
//         const parseFile = async () => {
//             if (!fileContent) return;

//             try {
//                 onParsingProgress(10);
//                 const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
//                 const fileManager = new GoogleAIFileManager(import.meta.env.VITE_GEMINI_KEY);

//                 const model = genAI.getGenerativeModel({
//                     model: "gemini-1.5-flash",
//                 });

//                 onParsingProgress(30);

//                 let fileBuffer: ArrayBuffer;
//                 if (typeof fileContent === 'string') {
//                     fileBuffer = new TextEncoder().encode(fileContent).buffer;
//                 } else {
//                     fileBuffer = fileContent;
//                 }

//                 const uploadResponse = await fileManager.uploadFile(new Uint8Array(fileBuffer), {
//                     mimeType: "application/pdf", // Assuming PDF, adjust if needed
//                     displayName: "Resume",
//                 });

//                 onParsingProgress(60);

//                 const result = await model.generateContent([
//                     {
//                         fileData: {
//                             mimeType: uploadResponse.file.mimeType,
//                             fileUri: uploadResponse.file.uri,
//                         },
//                     },
//                     { text: "Extract the following information from this resume and format it as JSON: name, email, phone, skills, work experience (including company names, job titles, and dates), and education (including school names, degrees, and dates)." },
//                 ]);

//                 onParsingProgress(90);

//                 const parsedData = JSON.parse(result.response.text());
//                 onParseComplete(parsedData);
//                 onParsingProgress(100);
//             } catch (error) {
//                 console.error('Error parsing file:', error);
//                 onParseError('Failed to parse the resume. Please try again.');
//             }
//         };

//         parseFile();
//     }, [fileContent, onParseComplete, onParseError, onParsingProgress]);

//     return null;
// };


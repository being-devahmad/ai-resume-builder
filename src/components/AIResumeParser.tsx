import React, { useState, useEffect } from 'react';
import { AIChatSession } from '@/services/AIModal';

interface AIResumeParserProps {
    fileContent: string | ArrayBuffer | null;
    onParseComplete: (data: any) => void;
    onParseError: (error: string) => void;
}

export const AIResumeParser: React.FC<AIResumeParserProps> = ({ fileContent, onParseComplete, onParseError }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const parseResume = async () => {
            if (!fileContent) {
                onParseError('No file content provided');
                return;
            }

            setIsProcessing(true);

            try {
                const content = fileContent instanceof ArrayBuffer
                    ? new TextDecoder().decode(fileContent)
                    : fileContent;

                const prompt = `
          Parse the following resume content and extract relevant information into a JSON format:

          ${content}

          Please structure the JSON as follows:
          {
            "personalInformation": {
              "name": "",
              "email": "",
              "phone": "",
              "location": "",
              "summary": ""
            },
            "experience": [
              {
                "title": "",
                "company": "",
                "location": "",
                "startDate": "",
                "endDate": "",
                "description": "",
              }
            ],
            "education": [
              {
                "degree": "",
                "institution": "",
                "location": "",
                "startDate": "",
                "endDate": "",
              }
            ],
            "skills": []
          }
        `;

                const result = await AIChatSession.sendMessage(prompt);
                const parsedData = JSON.parse(result.response.text());
                onParseComplete(parsedData);
            } catch (error) {
                console.error('Error parsing resume:', error);
                onParseError('Failed to parse resume. Please try again.');
            } finally {
                setIsProcessing(false);
            }
        };

        parseResume();
    }, [fileContent, onParseComplete, onParseError]);

    return (
        <div>
            {isProcessing && <p>Processing your resume...</p>}
        </div>
    );
};


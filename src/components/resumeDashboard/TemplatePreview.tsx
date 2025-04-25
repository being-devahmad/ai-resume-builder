import React, { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, AlertTriangle, AlertCircle } from 'lucide-react'
import { AIChatSession } from "@/services/AIModal"
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { templates, Template } from '@/data/templates'
import { Image } from '@nextui-org/react'

interface TemplatePreviewProps {
    fileName: string
    fileContent: string | ArrayBuffer | null
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({ fileName, fileContent }) => {
    const { id } = useParams<{ id: string }>()
    const [parsedResumeData, setParsedResumeData] = useState<any>(null)
    const [parsingError, setParsingError] = useState<string | null>(null)
    const [parsingProgress, setParsingProgress] = useState(0)
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
    // const [categoryData, setCategoryData] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const template = templates.find(t => t.id === id)
        setSelectedTemplate(template || null)
    }, [id])

    const parseResume = useCallback(async () => {
        if (!fileContent || typeof fileContent !== 'string') {
            setParsingError('Invalid file content');
            return;
        }

        try {
            setParsingProgress(10);

            const prompt = `Parse the following resume content into a structured JSON format. Include fields such as firstName , lastName , jobTitle, city , country , phone , email,  postalCode , summary ,  education, experience, skills, languages and any other relevant sections. Here's the resume content:
    
            ${fileContent}
    
            Respond only with the JSON object, no additional text.`;

            const result = await AIChatSession.sendMessage(prompt);
            setParsingProgress(50);

            const jsonResponse = JSON.parse(await result.response.text());
            setParsedResumeData(jsonResponse);
            setParsingProgress(100);

            // const finalResult = JSON.stringify(jsonResponse, null, 2);
            console.log("FinalResult---->", jsonResponse);


            // Navigate to ResumeStart with parsed data
            navigate(`/select/${id}/start`, { state: { categoryData: jsonResponse } });
        } catch (error) {
            console.error('Error parsing resume:', error);
            setParsingError('An error occurred while parsing the resume. Please try again.');
            setParsingProgress(0);
        }
    }, [fileContent, navigate, id]);

    useEffect(() => {
        if (fileContent) {
            parseResume()
        }
    }, [fileContent, parseResume])

    if (parsingError) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-4 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
                >
                    <div className="flex items-center justify-center mb-4">
                        <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>
                    <h2 className="text-xl font-semibold text-center text-red-600 mb-2">Error Processing Document</h2>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                        <div className="flex items-center">
                            <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
                        </div>
                        <p className="mt-2 text-sm text-red-700">
                            {parsingError || "We're experiencing high demand. Please try again in a few minutes or contact support if the issue persists."}
                        </p>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
            <Card className="w-full max-w-md p-6 space-y-6">
                <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                        <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">{fileName}</h2>
                        <p className="text-sm text-gray-500">Processing your resume...</p>
                    </div>
                </div>

                <Progress value={parsingProgress} className="w-full" />

                <p className="text-center text-sm font-medium text-gray-600">
                    {parsingProgress < 100 ? "Analyzing your resume..." : "Resume analysis complete!"}
                </p>

                {selectedTemplate && (
                    <div className="mt-6">
                        {/* <h3 className="text-lg font-semibold text-gray-800">Selected Template: {selectedTemplate.name}</h3> */}
                        <div className="relative aspect-[8.5/11] w-64 mx-auto border border-gray-200 rounded-lg overflow-hidden">
                            <Image
                                src={selectedTemplate.image}
                                alt={selectedTemplate.name}
                                className="w-full h-full object-contain"
                            />
                            <div
                                className="absolute inset-0 bg-blue-500 opacity-20"
                                style={{ clipPath: `inset(0 ${100 - parsingProgress}% 0 0)` }}
                            />
                        </div>
                    </div>
                )}

                {parsedResumeData && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Parsed Resume Data:</h3>
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-60 text-sm">
                            {JSON.stringify(parsedResumeData, null, 2)}
                        </pre>
                    </div>
                )}
            </Card>
        </div>
    )
}


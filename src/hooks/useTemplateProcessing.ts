import { AIChatSession } from '@/services/AIModal'
import { useState, useCallback } from 'react'

interface ProcessingResult {
    isComplete: boolean
    isProcessing: boolean
    categoryData: any | null
    processingError: string | null
}

export function useTemplateProcessing() {
    const [result, setResult] = useState<ProcessingResult>({
        isComplete: false,
        isProcessing: false,
        categoryData: null,
        processingError: null,
    })

    const processDocument = useCallback(async (fileContent: string | ArrayBuffer | null) => {
        if (!fileContent) {
            setResult(prev => ({ ...prev, processingError: "No file content provided" }))
            return
        }

        setResult(prev => ({ ...prev, isProcessing: true, processingError: null, categoryData: null }))

        try {
            const content = typeof fileContent === 'string' ? fileContent : new TextDecoder().decode(fileContent)

            const prompt = `Analyze the following resume content and extract its information into a structured JSON format. Include all content, even text with background colors (e.g., headers or highlighted sections). The JSON should follow this structure:
            {
                "personalInformation": {
                    "name": "",
                    "contact": "",
                    "email": ""
                    "city":"",
                    "country:"",
                    "jobTitle":"",
                },
                "education": [
                    {
                        "institution": "",
                        "degree": "",
                        "location": "",
                        "year": ""
                    }
                ],
                "experience": [
                    {
                        "jobTitle": "",
                        "company": "",
                        "location": "",
                        "duration": "",
                        "responsibilities": []
                    }
                ],
                "projects": [
                    {
                        "name": "",
                        "technologies": [],
                        "description": ""
                    }
                ],
                "skills": {
                    "languages": [],
                    "frameworks": [],
                    "tools": [],
                    "libraries": []
                }
            }

            Ensure the extraction process preserves the hierarchy and logical groupings of the information, capturing details across various text styles, layouts, and formats. 
            Return only the JSON object without any additional text or explanation.

            Resume content:
            ${content}`

            const result = await AIChatSession.sendMessage(prompt)
            const response = await result.response
            const jsonString = response.text()

            try {
                const categorizedContent = JSON.parse(jsonString)

                const allEmpty = Object.values(categorizedContent).every(value =>
                    value === "" || value === null ||
                    (Array.isArray(value) && value.length === 0) ||
                    (typeof value === 'object' && Object.keys(value).length === 0)
                )

                if (allEmpty) {
                    throw new Error('No relevant information found in the document')
                }

                setResult(prev => ({ ...prev, categoryData: categorizedContent, isComplete: true }))
            } catch (jsonError) {
                console.error('JSON parsing error:', jsonError)
                throw new Error('Unable to parse the AI response as valid JSON')
            }
        } catch (error) {
            console.error('Processing error:', error)
            setResult(prev => ({
                ...prev,
                processingError: error instanceof Error ? error.message : 'An unknown error occurred'
            }))
        } finally {
            setResult(prev => ({ ...prev, isProcessing: false }))
        }
    }, [])

    return { ...result, processDocument }
}


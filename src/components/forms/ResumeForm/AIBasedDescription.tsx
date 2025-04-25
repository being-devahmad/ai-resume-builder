import { useState } from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GEMINI_API_KEY } from '@/lib/config'
import { Textarea } from '@nextui-org/input'

interface AITextareaProps {
    value: string
    onChange: (value: string) => void
    label?: string
    error?: string
    customPrompt?: string
}

export function AITextarea({ value, onChange, error, customPrompt }: AITextareaProps) {
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const analyzeSuggestions = async () => {
        if (!value) return
        setIsAnalyzing(true)
        setShowSuggestions(true)

        const prompt = customPrompt || `Just analyze these points and enhance the description replace with ATS friendly points based on the description of the job which I've done and just provide me with the best bullet points lines and do not provide with explanation just 2 to 3 straight lines and add some numeric values to improve ATS score :\n\n"${value}"`

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }]
                    })
                }
            )

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            const suggestion = data.candidates[0].content.parts[0].text
            console.log("Suggestions--->", suggestion)
            // Split the suggestion into individual bullet points
            const bulletPoints = suggestion
                .split('\n')
                .filter((point: any) => point.trim().length > 0)

            console.log("Bullets-->", bulletPoints)
            setSuggestions(bulletPoints)
        } catch (error) {
            console.error('Error fetching AI suggestion:', error)
            alert('Failed to fetch AI suggestions. Please try again.')
            setShowSuggestions(false)
        } finally {
            setIsAnalyzing(false)
        }
    }

    const handleSuggestionClick = (suggestion: string) => {
        onChange(`• ${suggestion}`);
        setShowSuggestions(false);
    }

    const handleAcceptAll = () => {
        const formattedSuggestions = suggestions.map(suggestion => `• ${suggestion}`).join('\n');
        onChange(formattedSuggestions);
        setShowSuggestions(false);
    };

    return (
        <div className="relative">
            <Textarea
                variant="bordered"
                className="mt-4"
                label="Description"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={30}
            />
            <button
                className="absolute right-4 bottom-4 text-sm px-2 py-1 bg-[#10a37f] rounded-lg text-white hover:bg-[#095C46] transition-colors"
                onClick={analyzeSuggestions}
                disabled={!value || isAnalyzing}
            >
                {isAnalyzing ? 'Analyzing...' : 'Analyze with AI'}
            </button>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

            {/* Loading Dialog */}
            <Dialog open={isAnalyzing} onOpenChange={setIsAnalyzing}>
                <DialogContent className="sm:max-w-md flex flex-col items-center justify-center p-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4" />
                    <p className="text-center text-gray-600">
                        Generating rephrase and idea suggestions... This may take a few seconds
                    </p>
                </DialogContent>
            </Dialog>

            {/* Suggestions Dialog */}
            <Dialog open={showSuggestions && !isAnalyzing} onOpenChange={setShowSuggestions}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex justify-between items-center">
                            Ideas Suggestion
                            <Button
                                variant="ghost"
                                className="h-6 w-6 p-0 rounded-full"
                                onClick={() => setShowSuggestions(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-4">
                            Click the left-facing arrow icon to add bullet points to the description
                        </p>
                        <div className="space-y-4">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer group"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        ←
                                    </span>
                                    <span>{suggestion}</span>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-end mt-4'>
                            <Button className='text-sm' onClick={handleAcceptAll}>
                                Accept All
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}


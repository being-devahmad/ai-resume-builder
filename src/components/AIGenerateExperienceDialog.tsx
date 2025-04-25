import React from 'react';
import { Button } from "@nextui-org/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, CheckCircle, ArrowLeft } from 'lucide-react';

interface AIGenerateExperienceDialogProps {
    isAnalyzing: boolean;
    showSuggestions: boolean;
    suggestions: string[];
    onClose: () => void;
    onSuggestionClick: (suggestion: string) => void;
    onAcceptAll: () => void;
}

export const AIGenerateExperienceDialog: React.FC<AIGenerateExperienceDialogProps> = ({
    isAnalyzing,
    showSuggestions,
    suggestions,
    onClose,
    onSuggestionClick,
    onAcceptAll,
}) => {
    return (
        <>
            {/* Loading Dialog */}
            <Dialog open={isAnalyzing} onOpenChange={() => { }}>
                <DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
                    <div className="flex flex-col items-center justify-center p-8">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="mb-6"
                        >
                            <Lightbulb size={48} className="text-blue-500" />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Generating Experience</h3>
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            Crafting concise experience descriptions just for you...
                        </p>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Suggestions Dialog */}
            <Dialog open={showSuggestions && !isAnalyzing} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[500px] max-h-[80vh] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
                    <DialogHeader className="flex justify-between items-center">
                        <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            AI-Generated Experience
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 space-y-6 overflow-y-auto max-h-[50vh] pr-2">
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
                            Click on a suggestion to add it to your experience description
                        </p>
                        <AnimatePresence>
                            {suggestions && suggestions.map((suggestion, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <div
                                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                                        onClick={() => onSuggestionClick(suggestion)}
                                    >
                                        <ArrowLeft size={20} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <p className="text-gray-700 dark:text-gray-300">{suggestion}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <Button
                            className='bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300'
                            onClick={onAcceptAll}
                            startContent={<CheckCircle size={18} />}
                        >
                            Accept All Ideas
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};


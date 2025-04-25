import { useState, useEffect } from 'react';
import { Button } from "@nextui-org/button";
import { motion, AnimatePresence } from 'framer-motion';
import { InfoCircledIcon } from '@radix-ui/react-icons';

interface ConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onContinue: () => void;
    onAddMore: () => void;
}

export function ConfirmationDialog({
    isOpen,
    onClose,
    onContinue,
    onAddMore,
}: ConfirmationDialogProps) {
    const [, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg p-6 w-[400px] shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            More Information Needed <InfoCircledIcon />
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Looks like you haven't entered any education information. We recommend that you at least enter your past school and degree
                        </p>
                        <div className="flex justify-end space-x-3">
                            <Button
                                variant="bordered"
                                onClick={onContinue}
                                className="px-4 py-2 text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors"
                            >
                                I don't have any education
                            </Button>
                            <Button
                                color="primary"
                                onClick={onAddMore}
                                className="px-4 py-2 bg-black text-white transition-colors"
                            >
                                Add
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

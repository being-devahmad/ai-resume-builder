import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Check, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@radix-ui/react-dialog"

interface AIProcessingDialogProps {
    isOpen: boolean
    onClose: () => void
    isComplete: boolean
    isProcessing: boolean
    processingError: string | null
    onRetry: () => void
}

export function AIProcessingDialog({
    isOpen,
    onClose,
    isComplete,
    isProcessing,
    processingError,
    onRetry
}: AIProcessingDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <div className="space-y-4">
                    <DialogTitle>
                        <h2 className="text-xl font-semibold text-center text-green-500">
                            Title
                        </h2>
                    </DialogTitle>
                    {/* {isComplete ? (
                        <div className="flex flex-col items-center space-y-2">
                            <div className="rounded-full bg-green-500 p-2">
                                <Check className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-center text-green-500">
                                Template Applied
                            </h2>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-xl font-semibold text-center text-blue-500">
                                Applying Template...
                            </h2>
                            <Progress value={isProcessing ? 50 : 100} className="w-full" />
                        </>
                    )} */}

                    {(isComplete && isProcessing) ? (
                        <div className="flex flex-col items-center space-y-2">
                            <div className="rounded-full bg-green-500 p-2">
                                <Check className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-center text-green-500">
                                Template Applied
                            </h2>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-xl font-semibold text-center text-blue-500">
                                Applying Template...
                            </h2>
                            <Progress value={isProcessing ? 50 : 100} className="w-full" />
                        </div>
                    )}

                    {processingError && (
                        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                                <AlertTriangle className="w-5 h-5" />
                                <h3 className="text-lg font-semibold">Error Processing Document:</h3>
                            </div>
                            <p>{processingError}</p>
                            <p className="mt-2">Please ensure your document contains relevant resume information and is in a supported format.</p>
                            <Button onClick={onRetry} className="mt-4 bg-red-600 text-white hover:bg-red-700">
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Retry Processing
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
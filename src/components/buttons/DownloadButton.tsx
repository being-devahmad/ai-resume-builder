import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Loader2, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function DownloadButton() {
    const [status, setStatus] = useState<'idle' | 'downloading' | 'complete'>('idle')
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (status === 'downloading') {
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval)
                        setStatus('complete')
                        return 100
                    }
                    return prevProgress + 10
                })
            }, 300)

            return () => clearInterval(interval)
        }
    }, [status])

    const handleDownload = () => {
        setStatus('downloading')
        setProgress(0)
    }

    const handleReset = () => {
        setStatus('idle')
        setProgress(0)
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <Button
                onClick={status === 'idle' ? handleDownload : handleReset}
                className="relative w-48 h-12 overflow-hidden group"
                variant={status === 'complete' ? "outline" : "default"}
            >
                <AnimatePresence mode="wait">
                    {status === 'idle' && (
                        <motion.div
                            key="idle"
                            className="flex items-center justify-center w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download File
                        </motion.div>
                    )}
                    {status === 'downloading' && (
                        <motion.div
                            key="downloading"
                            className="flex items-center justify-center w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Downloading...
                        </motion.div>
                    )}
                    {status === 'complete' && (
                        <motion.div
                            key="complete"
                            className="flex items-center justify-center w-full h-full text-green-500"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Check className="w-5 h-5 mr-2" />
                            Download Complete
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
            {status === 'downloading' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-48"
                >
                    <Progress value={progress} className="h-2" />
                </motion.div>
            )}
        </div>
    )
}


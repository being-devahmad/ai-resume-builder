export default function ResumeLoadingSkeleton() {
    return (
        <>
            <div className="flex h-screen bg-gray-100 p-4 gap-4">
                <div className="flex-1 space-y-4">
                    <div className="h-6 w-2/3 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"></div>

                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                    </div>

                    <div className="h-32 bg-gray-300 rounded animate-pulse"></div>

                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                    </div>

                    <div className="h-32 bg-gray-300 rounded animate-pulse"></div>
                </div>

                <div className="flex-1 bg-gray-200 rounded p-4 animate-pulse">
                    <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


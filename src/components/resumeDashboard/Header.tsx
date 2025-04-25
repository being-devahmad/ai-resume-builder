import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
                <div className="mt-4 border-b border-blue-500">
                    <h2 className="text-blue-500 font-medium pb-2">Resume</h2>
                </div>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600">CREATE NEW</Button>
        </div>
    )
}


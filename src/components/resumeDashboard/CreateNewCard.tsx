import { Card } from "@/components/ui/card"
import { Plus } from 'lucide-react'
import { useNavigate } from "react-router-dom"



export function CreateNewCard() {
    const navigate = useNavigate()

    const handleCreateNewResume = () => {
        navigate('/create')
    }

    return (
        <Card className="p-4 flex flex-col items-center justify-center h-full min-h-[400px] border-dashed cursor-pointer
         hover:bg-gray-50"
            onClick={handleCreateNewResume}
        >
            <Plus className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">CREATE NEW</span>
        </Card>
    )
}


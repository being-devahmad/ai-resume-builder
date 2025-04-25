import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Pencil, Copy, FileSignature, Trash2 } from 'lucide-react'
import { Image } from "@nextui-org/react"


interface Resume {
    id: string
    name: string
    templateId: string
    updatedAt: string
}

interface ResumeCardProps {
    resume: Resume
    onEdit: () => void
    onDuplicate: () => void
    onRename: () => void
    onDelete: () => void
}

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

function getTemplateImage(templateId: string) {
    // This is a placeholder function. Replace with your actual implementation.
    return `/templates/${templateId}.png`
}

export function ResumeCard({ resume, onEdit, onDuplicate, onRename, onDelete }: ResumeCardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const templateImage = getTemplateImage(resume.templateId)

    return (
        <Card className="overflow-hidden relative">
            <CardHeader className="p-0 flex justify-center items-center">
                <Image
                    src={templateImage}
                    alt={resume.name}
                    width={300}
                    height={192}
                    className="h-48 object-cover"
                />
                <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={onEdit}>
                            <Pencil className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={onDuplicate}>
                            <Copy className="mr-2 h-4 w-4" />
                            <span>Duplicate</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={onRename}>
                            <FileSignature className="mr-2 h-4 w-4" />
                            <span>Rename</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={onDelete} className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="p-4">
                <h2 className="font-semibold text-lg truncate">{resume.name || "Untitled"}</h2>
                <p className="text-sm text-muted-foreground">
                    Last Updated: {formatDate(resume.updatedAt)}
                </p>
            </CardContent>
            <CardFooter>
                <Button onClick={onEdit} className="w-full">
                    Edit
                </Button>
            </CardFooter>
        </Card>
    )
}


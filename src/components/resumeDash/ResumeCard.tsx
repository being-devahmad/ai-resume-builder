import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image } from "@nextui-org/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Copy, Edit, MoreVertical, Trash } from 'lucide-react';
import { templates } from "@/data/templates";
import { formatDate } from "./formDate";
import { DuplicateDialog } from "./DuplicateDialog";
import { DeleteDialog } from "./DeleteDialog";
import { EditDialog } from "./EditDialog";
import { useNavigate } from "react-router-dom";

interface Resume {
    id: string;
    name: string;
    templateId?: string;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    userId: string;
}

interface Props {
    resume: Resume;
}



export function ResumeCard({ resume }: Props) {
    const navigate = useNavigate();
    console.log("resume>>", resume)
    const [actionType, setActionType] = useState<"edit" | "duplicate" | "delete" | null>(null);

    const getTemplateImage = (templateId?: string) => {
        const template = templates.find((temp) => temp.id === templateId);
        return template?.image || "/placeholder.svg?height=240&width=320";
    };

    const moveToEditPage = () => {
        navigate(`/select/${resume?.templateId}/start`, { state: { resume } });
    }
    return (
        <Card className="overflow-hidden relative border-5" style={{ cursor: "pointer" }} >
            <CardHeader className="p-0 flex justify-center items-center">
                <Image src={getTemplateImage(resume.templateId)} alt={resume.name} className="h-48 object-cover" onClick={moveToEditPage} />
                <div className="absolute top-2 right-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => setActionType("edit")}>
                                <Edit className="mr-2 h-4 w-4 cursor-pointer" />
                                Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setActionType("duplicate")}>
                                <Copy className="mr-2 h-4 w-4 cursor-pointer" />
                                Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setActionType("delete")}>
                                <Trash className="mr-2 h-4 w-4 cursor-pointer" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <h2 className="font-semibold text-lg truncate">{resume.name || "Untitled"}</h2>
                <p className="text-sm text-muted-foreground">Last Updated: {formatDate(resume.updatedAt)}</p>
            </CardContent>

            {actionType === "edit" && (
                <EditDialog
                    resume={resume}
                    onClose={() => setActionType(null)}
                />
            )}

            {actionType === "duplicate" && (
                <DuplicateDialog
                    resume={resume}
                    onClose={() => setActionType(null)}
                />
            )}

            {actionType === "delete" && (
                <DeleteDialog
                    resume={resume}
                    onClose={() => setActionType(null)}
                />
            )}
        </Card>
    );
}


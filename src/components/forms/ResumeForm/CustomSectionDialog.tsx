import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface CustomSection {
    title: string;
    subtitle: string;
    year: string;
    description: string;
}

interface CustomSectionDialogProps {
    onSave: (section: CustomSection) => void;
}

export function CustomSectionDialog({ onSave }: CustomSectionDialogProps) {
    const [section, setSection] = useState<CustomSection>({
        title: '',
        subtitle: '',
        year: '',
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSection(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(section);
        setSection({
            title: '',
            subtitle: '',
            year: '',
            description: ''
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Custom Section</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Custom Section</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            value={section.title}
                            onChange={handleChange}
                            className="col-span-3"
                            placeholder="e.g., References, Projects"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subtitle" className="text-right">
                            Subtitle
                        </Label>
                        <Input
                            id="subtitle"
                            name="subtitle"
                            value={section.subtitle}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="year" className="text-right">
                            Year
                        </Label>
                        <Input
                            id="year"
                            name="year"
                            value={section.year}
                            onChange={handleChange}
                            className="col-span-3"
                            placeholder="e.g., 2023"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={section.description}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <Button onClick={handleSave}>Save Custom Section</Button>
            </DialogContent>
        </Dialog>
    )
}

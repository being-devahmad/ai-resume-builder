import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface Activity {
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

interface ActivityDialogProps {
    onSave: (activity: Activity) => void;
}

export function ActivityDialog({ onSave }: ActivityDialogProps) {
    const [activity, setActivity] = useState<Activity>({
        title: '',
        employer: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setActivity(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setActivity(prev => ({ ...prev, current: checked }));
    };

    const handleSave = () => {
        onSave(activity);
        setActivity({
            title: '',
            employer: '',
            startDate: '',
            endDate: '',
            current: false,
            description: ''
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Co-Curricular Activity</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Co-Curricular Activity</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            value={activity.title}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="employer" className="text-right">
                            Employer
                        </Label>
                        <Input
                            id="employer"
                            name="employer"
                            value={activity.employer}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="startDate" className="text-right">
                            Start Date
                        </Label>
                        <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            value={activity.startDate}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="endDate" className="text-right">
                            End Date
                        </Label>
                        <Input
                            id="endDate"
                            name="endDate"
                            type="date"
                            value={activity.endDate}
                            onChange={handleChange}
                            disabled={activity.current}
                            className="col-span-3"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="current"
                            checked={activity.current}
                            onCheckedChange={handleCheckboxChange}
                        />
                        <label
                            htmlFor="current"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            I'm currently working
                        </label>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={activity.description}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <Button onClick={handleSave}>Save Activity</Button>
            </DialogContent>
        </Dialog>
    )
}


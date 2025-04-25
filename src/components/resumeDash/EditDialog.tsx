import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

interface Props {
    resume: { id: string; name: string };
    onClose: () => void;
}

export function EditDialog({ resume, onClose }: Props) {
    const [name, setName] = useState(resume.name);

    useEffect(() => {
        setName(resume.name);
    }, [resume]);

    const handleSave = async () => {
        if (!name.trim()) return;

        try {
            const resumeRef = doc(db, "resumes", resume.id);
            await updateDoc(resumeRef, { name });
            onClose();
        } catch (error) {
            console.error("Error updating resume:", error);
        }
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Resume</DialogTitle>
                </DialogHeader>
                <Input
                    placeholder="Enter resume name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <DialogFooter>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}


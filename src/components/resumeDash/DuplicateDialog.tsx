import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

interface Props {
    resume: { id: string; name: string; userId: string };
    onClose: () => void;
}

export function DuplicateDialog({ resume, onClose }: Props) {
    const handleDuplicate = async () => {
        try {
            const resumesCollection = collection(db, "resumes");
            const newResume = {
                ...resume,
                name: `${resume.name} (Copy)`,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const { id, ...newResumeWithoutId } = newResume;
            await addDoc(resumesCollection, newResumeWithoutId);
            onClose();
        } catch (error) {
            console.error("Error duplicating resume:", error);
        }
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Duplicate Resume</DialogTitle>
                </DialogHeader>
                <p>
                    Are you sure you want to create a duplicate of the resume{" "}
                    <strong>{resume.name}</strong>?
                </p>
                <DialogFooter>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleDuplicate}>Duplicate</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}


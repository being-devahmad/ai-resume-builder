import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

interface Props {
    resume: { id: string; name: string };
    onClose: () => void;
}

export function DeleteDialog({ resume, onClose }: Props) {
    const handleDelete = async () => {
        try {
            const resumeRef = doc(db, "resumes", resume.id);
            await deleteDoc(resumeRef);
            onClose();
        } catch (error) {
            console.error("Error deleting resume:", error);
        }
    };

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Resume</DialogTitle>
                </DialogHeader>
                <p>
                    Are you sure you want to delete the resume{" "}
                    <strong>{resume.name}</strong>? This action cannot be undone.
                </p>
                <DialogFooter>
                    <Button variant="ghost" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete}>
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}


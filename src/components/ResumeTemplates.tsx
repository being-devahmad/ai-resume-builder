import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  // updateDoc,
  deleteDoc,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useAuth } from "@/hooks/useAuth";
import { templates } from "@/data/templates";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, MoreVertical } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Image } from "@nextui-org/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Resume {
  id: string;
  name: string;
  url: string;
  updatedAt: {
    seconds: number;
    nanoseconds: number;
  };
  userId: string;
  templateId?: string;
}

export function ResumeTemplates() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [updatedName, setUpdatedName] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchResumes = async () => {
      if (!user?.id) {
        setLoading(false);
        setError("User not authenticated");
        return;
      }

      try {
        const resumesCollection = collection(db, "resumes");
        const resumeQuery = query(resumesCollection, where("userId", "==", user.id));
        const resumeSnapshot = await getDocs(resumeQuery);

        if (resumeSnapshot.empty) {
          setResumes([]);
        } else {
          const resumeList = resumeSnapshot.docs.map(
            (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Resume)
          );
          setResumes(resumeList);
        }
        setError(null);
      } catch (error) {
        setError(
          `Failed to fetch resumes: ${error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, [user]);



  // const handleSave = async () => {
  //   if (!selectedResume || !updatedName.trim()) return;

  //   try {
  //     const resumeDoc = doc(db, "resumes", selectedResume.id);
  //     await updateDoc(resumeDoc, { name: updatedName });

  //     setResumes((prev) =>
  //       prev.map((resume) =>
  //         resume.id === selectedResume.id ? { ...resume, name: updatedName } : resume
  //       )
  //     );

  //     setSelectedResume(null);
  //     setUpdatedName("");
  //   } catch (error) {
  //     console.error("Error updating resume:", error);
  //   }
  // };

  const handleDuplicate = async () => {
    if (!selectedResume) return;

    try {
      const newResumeName = updatedName.trim() || `${selectedResume.name} Copy`;
      const resumesCollection = collection(db, "resumes");

      const newResumeData: any = {
        name: newResumeName,
        url: selectedResume.url,
        updatedAt: serverTimestamp(),
        userId: selectedResume.userId,
        templateId: selectedResume.templateId,
      };

      const newResumeRef = await addDoc(resumesCollection, newResumeData);

      const newResume: Resume = {
        ...newResumeData,
        id: newResumeRef.id,
        updatedAt: {
          seconds: Math.floor(Date.now() / 1000),
          nanoseconds: 0,
        },
      };

      setResumes((prev) => [...prev, newResume]);

      setSelectedResume(null);
      setUpdatedName("");
    } catch (error) {
      console.error("Error duplicating resume:", error);
    }
  };

  const handleDeleteConfirmation = (resume: Resume) => {
    setSelectedResume(resume);
    setError("Are you sure you want to delete this resume?");
  };

  const confirmDelete = async () => {
    if (!selectedResume) return;

    try {
      const resumeDoc = doc(db, "resumes", selectedResume.id);
      await deleteDoc(resumeDoc);

      setResumes((prev) =>
        prev.filter((resume) => resume.id !== selectedResume.id)
      );
      setSelectedResume(null);
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  if (loading) {
    return <ResumesSkeleton />;
  }

  if (error && !selectedResume) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Resumes</h1>
      {resumes.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              No resumes found. Create your first resume to get started!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              onEdit={() => {
                setSelectedResume(resume);
                setUpdatedName(resume.name);
              }}
              onDelete={() => handleDeleteConfirmation(resume)}
              onDuplicate={() => {
                setSelectedResume(resume);
                setUpdatedName(`${resume.name} Copy`);
              }}
            />
          ))}
        </div>
      )}

      {/* Duplicate Dialog */}
      <Dialog open={!!selectedResume && updatedName !== ""} onOpenChange={() => setSelectedResume(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Duplicate Resume</DialogTitle>
            <DialogDescription>Enter a name for the duplicated resume.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              id="name"
              placeholder="Untitled Copy"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              className="col-span-4"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedResume(null)}>
              Cancel
            </Button>
            <Button onClick={handleDuplicate}>Duplicate</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


      {/* Delete Confirmation Dialog */}
      <Dialog open={!!error} onOpenChange={() => setError(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogDescription>{error}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setError(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ResumeCard({ resume, onEdit, onDelete, onDuplicate }: { resume: Resume; onEdit: () => void; onDelete: () => void; onDuplicate: () => void }) {
  const templateImage = getTemplateImage(resume.templateId);

  return (
    <Card className="overflow-hidden relative">
      <CardHeader className="p-0 flex justify-center items-center">
        <Image src={templateImage} alt={resume.name} className="h-48 object-cover" />
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={onDuplicate}>Duplicate</DropdownMenuItem>
              <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
  );
}

function ResumesSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-[200px]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <Skeleton className="h-48 w-full" />
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-24" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

function getTemplateImage(templateId?: string) {
  const template = templates.find((temp) => temp.id === templateId);
  return template?.image || "/placeholder.svg?height=240&width=320";
}

function formatDate(timestamp
  : { seconds: number; nanoseconds: number }) {
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

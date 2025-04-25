import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { ResumesSkeleton } from "./ResumeSkeleton";
import { ResumeCard } from "./ResumeCard";
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
    const { user } = useAuth();

    useEffect(() => {
        if (!user?.id) {
            setLoading(false);
            setError("User not authenticated");
            return;
        }

        const resumesCollection = collection(db, "resumes");
        const resumeQuery = query(resumesCollection, where("userId", "==", user.id));

        const unsubscribe = onSnapshot(resumeQuery,
            (snapshot) => {
                const resumeList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Resume[];

                resumeList.sort((a, b) => b.updatedAt.seconds - a.updatedAt.seconds);
                setResumes(resumeList);
                setLoading(false);
                setError(null);
            },
            (err) => {
                setError(`Failed to fetch resumes: ${err.message}`);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [user]);

    if (loading) return <ResumesSkeleton />;

    if (error) {
        return (
            <Alert variant="destructive">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {resumes.map((resume) => (
                        <ResumeCard
                            key={resume.id}
                            resume={resume}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}


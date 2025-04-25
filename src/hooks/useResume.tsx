// import { FormStep, ResumeData } from '@/types';
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface ResumeContextType {
//     currentStep: FormStep;
//     setCurrentStep: (step: FormStep) => void;
//     resumeData: ResumeData;
//     updateResumeData: (data: Partial<ResumeData>) => void;
// }

// const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [currentStep, setCurrentStep] = useState<FormStep>('contact');
//     const [resumeData, setResumeData] = useState<ResumeData>({
//         contact: { firstName: '', lastName: '', city: '', postalCode: '', phone: '', email: '' },
//         experience: [],
//         education: [],
//         skills: [],
//         about: '',
//     });

//     const updateResumeData = (data: Partial<ResumeData>) => {
//         setResumeData(prev => ({ ...prev, ...data }));
//     };

//     return (
//         <ResumeContext.Provider value={{ currentStep, setCurrentStep, resumeData, updateResumeData }}>
//             {children}
//         </ResumeContext.Provider>
//     );
// };

// export const useResume = () => {
//     const context = useContext(ResumeContext);
//     if (context === undefined) {
//         throw new Error('useResume must be used within a ResumeProvider');
//     }
//     return context;
// };



import React, { createContext, useContext, useState, ReactNode } from 'react';
import { z } from 'zod';

// Define the schema for contact information
const ContactInfoSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    postalCode: z.string().min(1, "Postal code is required"),
    summary: z.string().optional(),
});

// Define the schema for the entire resume data
const ResumeDataSchema = z.object({
    contact: ContactInfoSchema,
    experience: z.array(z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        description: z.string(),
    })),
    education: z.array(z.object({
        institution: z.string(),
        degree: z.string(),
        fieldOfStudy: z.string(),
        graduationDate: z.string(),
    })),
    skills: z.array(z.object({
        category: z.string(),
        items: z.array(z.string()),
    })),
});

type ResumeData = z.infer<typeof ResumeDataSchema>;

interface ResumeContextType {
    resumeData: ResumeData;
    updateResumeData: (section: keyof ResumeData, data: any) => void;
    currentStep: string;
    setCurrentStep: (step: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [resumeData, setResumeData] = useState<ResumeData>({
        contact: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            country: "",
            city: "",
            postalCode: "",
            summary: "",
        },
        experience: [],
        education: [],
        skills: [
            { category: "Technical Skills", items: [] },
            { category: "Soft Skills", items: [] },
            { category: "Languages", items: [] },
        ],
    });
    const [currentStep, setCurrentStep] = useState("contact");

    const updateResumeData = (section: keyof ResumeData, data: any) => {
        setResumeData(prev => ({ ...prev, [section]: data }));
    };

    return (
        <ResumeContext.Provider value={{ resumeData, updateResumeData, currentStep, setCurrentStep }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    const context = useContext(ResumeContext);
    if (context === undefined) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
};

export { ContactInfoSchema, ResumeDataSchema };


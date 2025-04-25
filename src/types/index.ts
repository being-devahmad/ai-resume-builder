export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: string;
  currentTierId: string,
  currentPlanStatus: string
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}


export interface Resume {
  id: string;
  title: string;
  lastUpdated: string;
}

export interface Template {
  id: string;
  name: string;
  image: string;
  badge?: 'new' | 'most-selected' | 'recommended';
}

export type FormStep = 'contact' | 'experience' | 'education' | 'skills' | 'about' | 'finish';

export interface ContactInfo {
  firstName: string;
  lastName: string;
  country: "";
  city: string;
  postalCode: string;
  phone: string;
  email: string;
  summary: "";
}

export interface ResumeData {
  contact: ContactInfo;
  experience: any[]; // To be expanded later
  education: any[]; // To be expanded later
  skills: string[];
  about: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: DescriptionPoint[];
}

export interface DescriptionPoint {
  id: string;
  text: string;
}


export interface CustomSection {
  title: string;
  subtitle: string;
  year: string;
  description: string;
}
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const RegisterUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3, "Username is required"),
  rememberMe: z.boolean(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email(),
});

export const ContactUsSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters.", }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms & conditions.",
  }),
})


// Resume Forms

export const ContactInfoSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  jobTitle: z.string().min(2, "Job Title is required"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(2, "Postal Code is required"),
  country: z.string().min(3, "Countryis required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  summary: z.string().optional(),
});

export const ExperienceSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company name is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  current: z.boolean(),
  description: z.string().min(1, "Description is required"),
});

export const EducationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  school: z.string().min(1, "School name is required"),
  location: z.string().min(1, "Location is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().optional(),
});
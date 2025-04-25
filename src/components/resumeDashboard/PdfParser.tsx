import { GoogleGenerativeAI } from "@google/generative-ai";
import * as pdfjsLib from "pdfjs-dist";

// Initialize PDF.js worker
const pdfjsVersion = '3.4.120'; // Use the version that matches your installed pdfjs-dist version
const pdfjsWorkerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerUrl;

export class PDFParser {
    private static genAI: GoogleGenerativeAI;

    private static initializeAI() {
        if (!this.genAI) {
            const apiKey = import.meta.env.VITE_GEMINI_KEY;
            this.genAI = new GoogleGenerativeAI(apiKey);
        }
    }

    static async extractText(pdfData: ArrayBuffer): Promise<string> {
        try {
            const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
            let text = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const content = await page.getTextContent();
                const pageText = content.items.map((item: any) => item.str).join(' ');
                text += pageText + '\n';
            }

            return text;
        } catch (error) {
            console.error('Error extracting text from PDF:', error);
            throw new Error('Failed to extract text from PDF');
        }
    }

    static async convertToJSON(text: string): Promise<any> {
        this.initializeAI();

        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `
        Parse the following resume text and convert it into a structured JSON format. Include the following sections if present:
        - Personal Information (name, email, phone, location)
        - Summary or Objective
        - Work Experience (company, position, dates, responsibilities)
        - Education (institution, degree, dates)
        - Skills
        - Projects (if any)
        - Certifications (if any)
        - Languages (if any)

        Here's the resume text:

        ${text}

        Please provide the output in valid JSON format.
        `;

        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const jsonString = response.text();

            return JSON.parse(jsonString);
        } catch (error) {
            console.error("Error parsing JSON:", error);
            throw new Error("Failed to parse the resume into JSON format");
        }
    }
}


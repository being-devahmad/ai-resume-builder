import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import { Input, Checkbox, Textarea } from "@nextui-org/react";
import { Brain, Plus, Trash2 } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { AIChatSession } from "@/services/AIModal";
import { AIGenerateExperienceDialog } from "@/components/AIGenerateExperienceDialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ExperienceProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categoryData: Record<string, any>;
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({
  allData,
  setAllData,
  setActiveTab,
  categoryData
}) => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>(() => {
    if (categoryData && categoryData.experience.length > 0) {
      return categoryData.experience.map((exp: any) => ({
        title: exp.jobTitle ?? exp.title ?? "",
        company: exp.company ?? "",
        location: exp.location ?? "",
        startDate: (exp.duration || exp.years)?.split(' - ')[0] ?? "",
        endDate: (exp.duration || exp.years)?.split(' - ')[1] ?? "",
        currentlyWorking: (exp.duration || "").toLowerCase().includes('present'),
        description:
          exp.responsibilities
            ? exp.responsibilities.join('\n')
            : exp.description ?? "",

      }));
    }
    return allData.experiences || [
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
    ];
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState<number | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{ isOpen: boolean; index: number | null }>({ isOpen: false, index: null });

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    setDeleteConfirmation({ isOpen: true, index });
  };

  const confirmDelete = () => {
    if (deleteConfirmation.index !== null) {
      const updatedExperiences = experiences.filter((_, i) => i !== deleteConfirmation.index);
      setExperiences(updatedExperiences);
      setAllData({ ...allData, experiences: updatedExperiences });
    }
    setDeleteConfirmation({ isOpen: false, index: null });
  };


  const handleChange = (index: number, field: string, value: string | boolean) => {
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        const updatedField = field.includes('Date') && typeof value === 'string'
          ? { [field]: value } // Only format valid ISO strings
          : { [field]: value };

        return { ...exp, ...updatedField };
      }
      return exp;
    });

    if (field === 'currentlyWorking' && value === true) {
      updatedExperiences[index].endDate = 'Present';
    }

    setExperiences(updatedExperiences);
    setAllData({ ...allData, experiences: updatedExperiences });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAllData({ ...allData, experiences: experiences });
    setActiveTab("education");
  };

  const handleBack = () => {
    setActiveTab('contact');
  };

  const generateExperienceFromAI = async (index: number) => {
    setIsAnalyzing(true);
    setCurrentExperienceIndex(index);
    const experience = experiences[index];
    const prompt = `Generate a concise professional description for the following work experience:
    Job Title: ${experience.title}
    Company: ${experience.company}
    Location: ${experience.location}
    Start Date: ${experience.startDate}
    End Date: ${experience.endDate}
    Currently Working: ${experience.currentlyWorking ? 'Yes' : 'No'}
    
    Please provide 2-3 brief, impactful ATS friendly statements describing key responsibilities and achievements including some number that could add value to resume for this role. 
    Format the response as a JSON array with each statement as an object containing 'id' and 'text' fields. For example:
    [
      { "id": 1, "text": "Led a team of 5 developers to successfully launch a new product feature, increasing user engagement by 25%." },
      { "id": 2, "text": "Optimized database queries, resulting in a 40% improvement in application performance." }
    ]`;

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const jsonResponse = JSON.parse(result.response.text());
      console.log("AI-generated description:", jsonResponse);
      setSuggestions(jsonResponse.map((item: { text: string }) => item.text));
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error generating AI experience description:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (currentExperienceIndex !== null) {
      const updatedExperiences = [...experiences];
      const currentDescription = updatedExperiences[currentExperienceIndex].description;
      updatedExperiences[currentExperienceIndex].description = currentDescription
        ? `${currentDescription}\n• ${suggestion}`
        : `• ${suggestion}`;
      setExperiences(updatedExperiences);
      setAllData({ ...allData, experiences: updatedExperiences });
    }
  };

  const handleAcceptAll = () => {
    if (currentExperienceIndex !== null) {
      const updatedExperiences = [...experiences];
      updatedExperiences[currentExperienceIndex].description = suggestions.map(s => `• ${s}`).join('\n');
      setExperiences(updatedExperiences);
      setAllData({ ...allData, experiences: updatedExperiences });
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    if (experiences.length > 0) {
      setAllData({ ...allData, experiences: experiences });
    }
  }, []);

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <Button onClick={handleAddExperience} variant="bordered" size="sm">
          <Plus className="h-4 w-4 mr-2" /> Add Experience
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {index > 0 && <Separator className="my-6" />}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Experience {index + 1}</h3>
                <Button
                  variant="light"
                  size="sm"
                  color="danger"
                  isIconOnly
                  onClick={() => handleRemoveExperience(index)}
                  className="absolute top-0 right-0 hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <Input
                  variant="bordered"
                  label="Job Title"
                  value={experience.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
                <Input
                  variant="bordered"
                  label="Company"
                  value={experience.company}
                  onChange={(e) => handleChange(index, "company", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <Input
                  variant="bordered"
                  label="Location"
                  value={experience.location}
                  onChange={(e) => handleChange(index, "location", e.target.value)}
                />
                <Input
                  variant="bordered"
                  label="Start Date"
                  type="month"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                />
                <Input
                  variant="bordered"
                  label="End Date"
                  type="month"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, "endDate", e.target.value)}
                  disabled={experience.currentlyWorking}
                  placeholder={experience.currentlyWorking ? "Present" : ""}
                />
              </div>

              <div className="mb-2">
                <Checkbox
                  isSelected={experience.currentlyWorking}
                  onValueChange={(checked) => handleChange(index, "currentlyWorking", checked)}
                  className="mt-2"
                >
                  I'm currently working there
                </Checkbox>
              </div>

              <div>
                <div className="flex justify-end" >
                  <Button
                    size="sm"
                    radius="sm"
                    className="font-bold bg-black text-white mb-1"
                    variant="faded"
                    onClick={() => generateExperienceFromAI(index)}
                  >
                    <Brain /> Generate with AI
                  </Button>
                </div>
                <div>
                  <Textarea
                    variant="bordered"
                    value={experience.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    label="Description"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between mt-10">
          <Button variant="light" onClick={handleBack}>
            Back
          </Button>
          <Button
            color="primary"
            variant="solid"
            type="submit"
            className="font-bold"
          >
            Next to Education <span className="pl-2">&#x2192;</span>
          </Button>
        </div>
      </form>

      <AIGenerateExperienceDialog
        isAnalyzing={isAnalyzing}
        showSuggestions={showSuggestions}
        suggestions={suggestions}
        onClose={() => setShowSuggestions(false)}
        onSuggestionClick={handleSuggestionClick}
        onAcceptAll={handleAcceptAll}
      />

      {/* Delete Confirmation DIalog */}
      <Dialog open={deleteConfirmation.isOpen} onOpenChange={(isOpen) => setDeleteConfirmation({ isOpen, index: null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this experience? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="light" onClick={() => setDeleteConfirmation({ isOpen: false, index: null })}>
              Cancel
            </Button>
            <Button color="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </Card>
  );
};

export default Experience;


import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Plus, Trash2 } from 'lucide-react';
import { ConfirmationDialog } from "./ConfirmationDialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface EducationItem {
  degree: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categoryData: Record<string, any>;
}


export default function Education({
  allData,
  setAllData,
  setActiveTab,
  categoryData,
}: EducationProps) {

  const [education, setEducation] = useState<EducationItem[]>(() => {



    if (categoryData && categoryData.education.length > 0) {
      return categoryData.education.map((edu: any) => ({
        degree: edu.degree ?? "",
        organization: edu.institution ?? edu.university ?? "",
        location: edu.location ?? "",
        startDate: edu.years ? edu.years.split(' - ')[0] : edu.year || "",
        endDate: edu.years ? edu.years.split(' - ')[1] : edu.year || "",

      }));
    }
    return allData.education || [
      {
        degree: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ];
  });

  const [deleteConfirmation, setDeleteConfirmation] = useState<{ isOpen: boolean; index: number | null }>({ isOpen: false, index: null });

  useEffect(() => {
    if (education.length > 0) {
      setAllData({ ...allData, education: education });
    }
  }, []);

  const addEducation = () => {
    const newEducation = [
      ...education,
      {
        degree: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
      },
    ];
    setEducation(newEducation);
  };

  // const removeEducation = (index: number) => {
  //   const updatedEducation = education.filter((_, i) => i !== index);
  //   setEducation(updatedEducation);
  //   setAllData({ ...allData, education: updatedEducation });
  // };


  const removeEducation = (index: number) => {
    setDeleteConfirmation({ isOpen: true, index });
  };

  const confirmDelete = () => {
    if (deleteConfirmation.index !== null) {
      const updatedEducation = education.filter((_, i) => i !== deleteConfirmation.index);
      setEducation(updatedEducation);
      setAllData({ ...allData, education: updatedEducation });
    }
    setDeleteConfirmation({ isOpen: false, index: null });
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updatedEducation);
    setAllData({ ...allData, education: updatedEducation });
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNext = () => {
    if (education.length === 0) {
      setShowConfirmation(true);
    } else {
      setActiveTab("skills");
    }
  };

  const handleBack = () => {
    setActiveTab('experience');
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="text-sm text-gray-500">Enter your last diploma first</p>
        </div>
        <Button onClick={addEducation} variant="bordered" size="sm">
          <Plus className="h-4 w-4 mr-2" /> Add Education
        </Button>
      </div>

      {education.map((edu, index) => (
        <div key={index} className=" mb-6 ">
          {index > 0 && <hr className="my-4" />}
          <div className="flex justify-end">
            <Button
              variant="light"
              size="sm"
              onClick={() => removeEducation(index)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              variant="bordered"
              label="Organization"
              value={edu.organization}
              onChange={(e) => handleChange(index, "organization", e.target.value)}
            />
            <Input
              variant="bordered"
              label="Degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Input
              variant="bordered"
              label="Location"
              value={edu.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
            />
            <Input
              variant="bordered"
              type="month"
              label="Start Date"
              value={edu.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            />
            <Input
              variant="bordered"
              type="month"
              label="End Date"
              value={edu.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            />

          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <Button variant="light" onClick={handleBack}>
          Back
        </Button>
        <Button
          color="primary"
          variant="solid"
          type="submit"
          className="font-bold"
          onClick={handleNext}
        >
          Next to Skills <span className="pl-2">&#x2192;</span>
        </Button>
      </div>

      <ConfirmationDialog
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onContinue={() => {
          setShowConfirmation(false);
          setActiveTab("skills");
        }}
        onAddMore={() => {
          setShowConfirmation(false);
          addEducation();
        }}
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
}


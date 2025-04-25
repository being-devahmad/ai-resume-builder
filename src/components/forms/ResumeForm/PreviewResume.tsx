import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { doc, updateDoc } from "firebase/firestore"; // Import updateDoc and doc
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, X } from 'lucide-react'
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@nextui-org/button"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebaseConfig";
import { useAuth } from "@/hooks/useAuth"
import { useParams } from "react-router-dom"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActivityDialog } from "./ActivityDialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CustomSectionDialog } from "./CustomSectionDialog";
import { CustomSection } from "@/types";

interface PreviewResumeProps {
  allData: Record<string, any>;
  setAllData: (data: Record<string, any>) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  resumeID: any
}

export const PreviewResume: React.FC<PreviewResumeProps> = ({
  allData,
  setAllData,
  setActiveTab,
  resumeID
}) => {


  console.log("ALL___DATA___>", allData, resumeID)

  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth()
  console.log("currentUserId-->", user?.id || null)

  const { id } = useParams()
  console.log("id-->", id)


  const handleBack = () => {
    setActiveTab('skills');
  };

  const [websitesData, setWebsitesData] = useState({
    linkedin: allData.linkedin || '',
    github: allData.github || '',
    portfolio: allData.portfolio || ''
  });

  interface Language {
    name: string;
    level: string;
  }

  interface Activity {
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }

  const [languages, setLanguages] = useState<Language[]>(allData.languages || []);
  const [newLanguage, setNewLanguage] = useState<Language>({ name: '', level: '' });
  const [activities, setActivities] = useState<Activity[]>(allData.activities || []);
  const [customSections, setCustomSections] = useState<CustomSection[]>([]);

  const addCustomSection = (section: CustomSection) => {
    const updatedSections = [...customSections, section];
    setCustomSections(updatedSections);
    setAllData((prevAllData: Record<string, any>) => ({
      ...prevAllData,
      customSections: updatedSections
    }));
  };

  const removeCustomSection = (index: number) => {
    const updatedSections = customSections.filter((_, i) => i !== index);
    setCustomSections(updatedSections);
    setAllData((prevAllData: Record<string, any>) => ({
      ...prevAllData,
      customSections: updatedSections
    }));
  };

  const handleWebsiteChange = (field: string, value: string) => {
    setWebsitesData(prev => {
      const newData = { ...prev, [field]: value };
      setAllData((prevAllData: Record<string, any>) => ({
        ...prevAllData,
        [field]: value
      }));
      return newData;
    });
  };

  const handleLanguageChange = (field: 'name' | 'level', value: string) => {
    setNewLanguage((prev: Language) => ({ ...prev, [field]: value }));
  };

  const addLanguage = () => {
    if (newLanguage.name && newLanguage.level) {
      const updatedLanguages = [...languages, newLanguage];
      setLanguages(updatedLanguages);
      setAllData((prevAllData: Record<string, any>) => ({
        ...prevAllData,
        languages: updatedLanguages
      }));
      setNewLanguage({ name: '', level: '' });
    }
  };

  const removeLanguage = (index: number) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
    setAllData((prevAllData: Record<string, any>) => ({
      ...prevAllData,
      languages: updatedLanguages
    }));
  };

  const addActivity = (activity: Activity) => {
    const updatedActivities = [...activities, activity];
    setActivities(updatedActivities);
    setAllData((prevAllData: Record<string, any>) => ({
      ...prevAllData,
      activities: updatedActivities
    }));
  };

  const removeActivity = (index: number) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    setAllData((prevAllData: Record<string, any>) => ({
      ...prevAllData,
      activities: updatedActivities
    }));
  };

  const removeUndefined = (obj: any): any => {
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') {
        removeUndefined(obj[key]);
      } else if (obj[key] === undefined) {
        delete obj[key];
      }
    });
    return obj;
  };

  // const handleSave = async () => {
  //   setIsSaving(true);
  //   try {
  //     const cleanedData = removeUndefined({ ...allData });
  //     const dataToSave = {
  //       ...cleanedData,
  //       userId: user?.id || null,
  //       createdAt: serverTimestamp(),
  //       updatedAt: serverTimestamp(),
  //       templateId: id // templateId
  //     };
  //     console.log("Final Data to Save -->", dataToSave);

  //     const docRef = await addDoc(collection(db, "resumes"), dataToSave);
  //     console.log("Document written with ID: ", docRef.id);

  //     toast({
  //       title: "Success",
  //       description: "Your resume data has been saved.",
  //     });
  //   } catch (error) {
  //     console.error("Error saving resume data:", error);
  //     toast({
  //       title: "Error",
  //       description: "Failed to save resume data. Please try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSaving(false);
  //   }
  // };


  // const handleSave = async () => {
  //   setIsSaving(true);
  //   try {
  //     const cleanedData = removeUndefined({ ...allData });
  //     const dataToSave = {
  //       ...cleanedData,
  //       userId: user?.id || null,
  //       updatedAt: serverTimestamp(), // Always update the timestamp
  //       templateId: id, // templateId
  //     };

  //     // Check if there's a resumeId for updating
  //     if (resumeID) {
  //       console.log("Updating existing resume with ID:", resumeID);

  //       const resumeRef = doc(db, "resumes", resumeID); // Get reference to the existing document
  //       await updateDoc(resumeRef, dataToSave); // Update the document

  //       toast({
  //         title: "Success",
  //         description: "Your resume data has been updated.",
  //       });
  //     } else {
  //       console.log("Creating a new resume.");

  //       const newResume = {
  //         ...dataToSave,
  //         createdAt: serverTimestamp(), // Add createdAt only for new documents
  //       };

  //       const docRef = await addDoc(collection(db, "resumes"), newResume); // Create a new document
  //       console.log("Document written with ID: ", docRef.id);

  //       toast({
  //         title: "Success",
  //         description: "Your resume data has been saved.",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error saving resume data:", error);
  //     toast({
  //       title: "Error",
  //       description: "Failed to save resume data. Please try again.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSaving(false);
  //   }
  // };


  const handleSave = async () => {
    setIsSaving(true);
    try {
      const cleanedData = removeUndefined({ ...allData });
      const dataToSave = {
        ...cleanedData,
        userId: user?.id || null,
        updatedAt: serverTimestamp(),
        templateId: id,
      };

      if (resumeID) {
        console.log("Updating existing resume with ID:", resumeID);
        const resumeRef = doc(db, "resumes", resumeID);
        await updateDoc(resumeRef, dataToSave);
        toast({
          title: "Success",
          description: "Your resume has been updated.",
        });
      } else {
        console.log("Creating a new resume.");
        const newResume = {
          ...dataToSave,
          createdAt: serverTimestamp(),
        };
        const docRef = await addDoc(collection(db, "resumes"), newResume);
        console.log("New resume created with ID: ", docRef.id);
        toast({
          title: "Success",
          description: "Your new resume has been saved.",
        });
      }
    } catch (error) {
      console.error("Error saving resume data:", error);
      toast({
        title: "Error",
        description: "Failed to save resume data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (

    <>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto">
          <div className="w-full max-w-xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900">
              {`${allData?.firstName ? `${allData?.firstName}${allData?.lastName}_CV` : 'Untitled'}`}
            </h1>

            <Accordion type="single" collapsible defaultValue="personal-info" className="w-full">
              {/* Personal Information */}
              <AccordionItem value="personal-info">
                <AccordionTrigger className="text-lg font-semibold">Personal Information</AccordionTrigger>
                <AccordionContent className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-title">Job Title</Label>
                    <Input id="job-title" value={allData?.jobTitle} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" value={allData?.firstName} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" value={allData?.lastName} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" value={allData.email} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={allData.phone} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value={`${allData?.city}, ${allData?.country}`} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value={`${allData?.city}`} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input id="postal-code" value={`${allData?.postalCode}`} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" value={`${allData?.city}, ${allData?.country}`} />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Professional Summary */}
              <AccordionItem value="professional-summary">
                <AccordionTrigger className="text-lg font-semibold">Professional Summary</AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-2">
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                      id="summary"
                      placeholder="Write a professional summary..."
                      className="min-h-[150px]"
                      value={allData?.summary}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Languages */}
              <AccordionItem value="languages">
                <AccordionTrigger className="text-lg font-semibold">Languages</AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-grow">{lang.name} - {lang.level}</span>
                        <Button size="sm" variant="light" onClick={() => removeLanguage(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <Select
                          value={newLanguage.name}
                          onValueChange={(value) => handleLanguageChange('name', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                            <SelectItem value="german">German</SelectItem>
                            <SelectItem value="chinese">Chinese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1">
                        <Select
                          value={newLanguage.level}
                          onValueChange={(value) => handleLanguageChange('level', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Proficiency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="native">Native</SelectItem>
                            <SelectItem value="fluent">Fluent</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="basic">Basic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full" onClick={addLanguage}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Language
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Skills */}
              {/* <AccordionItem value="skills">
                <AccordionTrigger className="text-lg font-semibold">Skills</AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Input placeholder="Enter a skill" />
                      <Select>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expert">Expert</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="beginner">Beginner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Skill
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem> */}

              {/* Websites & Social Links */}
              <AccordionItem value="websites">
                <AccordionTrigger className="text-lg font-semibold">Websites & Social Links</AccordionTrigger>
                <AccordionContent className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      placeholder="LinkedIn profile URL"
                      value={websitesData.linkedin}
                      onChange={(e) => handleWebsiteChange('linkedin', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      placeholder="GitHub profile URL"
                      value={allData.github}
                      onChange={(e) => handleWebsiteChange('github', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio</Label>
                    <Input
                      id="portfolio"
                      placeholder="Portfolio website URL"
                      value={websitesData.portfolio}
                      onChange={(e) => handleWebsiteChange('portfolio', e.target.value)}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>


              {/* Co-Curricular Activities */}
              <AccordionItem value="activities">
                <AccordionTrigger className="text-lg font-semibold">Co-Curricular Activities</AccordionTrigger>
                <AccordionContent className="space-y-4 p-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <h4 className="font-semibold">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.employer}</p>
                        <p className="text-sm text-gray-600">
                          {activity.startDate} - {activity.current ? 'Present' : activity.endDate}
                        </p>
                      </div>
                      <Button size="sm" variant="bordered" onClick={() => removeActivity(index)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <ActivityDialog onSave={addActivity} />
                </AccordionContent>
              </AccordionItem>

              {/* Custom Section */}
              <AccordionItem value="custom-sections">
                <AccordionTrigger className="text-lg font-semibold">Custom Sections</AccordionTrigger>
                <AccordionContent className="space-y-4 p-4">
                  {customSections.map((section, index) => (
                    <div key={index} className="border-b pb-4 mb-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{section.title}</h4>
                        <Button size="sm" variant="bordered" onClick={() => removeCustomSection(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm font-medium text-gray-600">{section.subtitle}</p>
                      <p className="text-sm text-gray-500">{section.year}</p>
                      <p className="mt-2 text-sm">{section.description}</p>
                    </div>
                  ))}
                  <CustomSectionDialog onSave={addCustomSection} />
                </AccordionContent>
              </AccordionItem>



            </Accordion>





            {/* Add Blocks Section */}
            {/* <div className="space-y-4 pt-6">
              <h3 className="text-lg font-semibold">Add Additional Sections</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Courses",
                  "Custom section",
                  "References",
                  "Extra-Curricular Activities",
                ].map((block) => (
                  <Button key={block} variant="bordered" className="justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    {block}
                  </Button>
                ))}
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6">
              <Button variant="bordered" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              {
                resumeID ?
                  <Button
                    variant="bordered"
                    className="bg-black text-white"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? "Updating..." : "Update Resume"}
                  </Button>
                  :
                  <Button
                    variant="bordered"
                    className="bg-black text-white"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving..." : "Save Resume"}
                  </Button>
              }
            </div>
          </div>
        </div>
      </div >
    </>

  )
}
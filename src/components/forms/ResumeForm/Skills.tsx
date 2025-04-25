import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface SkillsProps {
  allData: any
  setAllData: (data: any) => void
  activeTab: string
  setActiveTab: (tab: string) => void
  categoryData: Record<string, any>
}

const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"]

export default function Skills({
  allData,
  setAllData,
  setActiveTab,
  categoryData
}: SkillsProps) {
  const [skills, setSkills] = useState<Array<{ name: string; level: string }>>([])
  const [currentSkill, setCurrentSkill] = useState("")
  const [currentLevel, setCurrentLevel] = useState("Expert")
  // const [hideLevel, setHideLevel] = useState(false)

  useEffect(() => {
    if (categoryData?.skills && categoryData.skills.length > 0) {
      const formattedSkills = categoryData.skills.map((skill: string) => ({
        name: skill,
        level: "Intermediate" // Default level, adjust as needed
      }));
      setSkills(formattedSkills);
      setAllData({ ...allData, skills: formattedSkills });
    } else if (allData?.skills && allData.skills.length > 0) {
      setSkills(allData.skills);
    }
  }, [categoryData, allData?.skills]);

  const addSkill = () => {
    if (!currentSkill.trim()) return
    const newSkill = {
      name: currentSkill.trim(),
      level: currentLevel,
    }
    setSkills([...skills, newSkill])
    setCurrentSkill("")
    setAllData({ ...allData, skills: [...skills, newSkill] })
  }

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    setAllData({ ...allData, skills: updatedSkills });
  };

  const handleNext = () => {
    setActiveTab("finish")
  }

  const handleBack = () => {
    setActiveTab("education")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-blue-500">Tell us</span> about your skills
        </h1>
        <p className="text-gray-600">
          Start with the one you are most experienced at
        </p>
      </div>

      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="level">Experience Level</Label>
            <Select value={currentLevel} onValueChange={setCurrentLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {/* <Label htmlFor="skill">SKILL</Label> */}
            <div className="flex gap-2">
              <Input
                id="skill"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                placeholder="Type your skill here"
                onKeyPress={(e) => e.key === "Enter" && addSkill()}
              />
            </div>
          </div>

          {currentSkill && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Level - {currentLevel}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{
                    width: `${((experienceLevels.indexOf(currentLevel) + 1) /
                      experienceLevels.length) *
                      100
                      }%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <Button
          variant="outline"
          className="w-full text-blue-500 border-blue-500"
          onClick={addSkill}
        >
          Add Skill
        </Button>

        {skills.length > 0 && (
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span>{skill.name}</span>
                {/* {!hideLevel && <span className="text-gray-500">{skill.level}</span>} */}
                <button
                  onClick={() => removeSkill(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="space-y-4">
            {/* <div className="flex items-center space-x-2">
              <Switch
                id="show-tags"
                checked={showAsTags}
                onCheckedChange={setShowAsTags}
              />
              <Label htmlFor="show-tags">View skills as tags</Label>
            </div> */}
            {/* <div className="flex items-center space-x-2">
              <Switch
                id="hide-level"
                checked={hideLevel}
                onCheckedChange={setHideLevel}
              />
              <Label htmlFor="hide-level">Hide experience level</Label>
            </div> */}
          </div>
        </div>
      </Card>

      <div className="flex justify-between">
        <Button variant="ghost" onClick={handleBack}>
          ← Back
        </Button>
        <Button onClick={handleNext} className="bg-blue-500 text-white">
          Next to Finish →
        </Button>
      </div>
    </div>
  )
}


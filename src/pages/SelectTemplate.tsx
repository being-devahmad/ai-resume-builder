import { ProgressDots } from "@/components/resumeDashboard/ProgressDots"
import ResumeSlider from "@/components/ResumeSlider"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'



const SelectTemplate = () => {
  const navigate = useNavigate()

  const handleSkip = () => {
    navigate('/select/2')
  }


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Choose Your Perfect Template
        </h1>
        <ProgressDots />
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Browse through our collection of professionally designed templates.
            Select the one that best showcases your skills and experience.
          </p>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors" onClick={handleSkip}>
            Skip this step
          </Button>
        </div>
        {/* <TemplateSlider /> */}
        <ResumeSlider />
      </main>
    </div>
  )
}

export default SelectTemplate


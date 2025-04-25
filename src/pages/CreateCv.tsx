import { ProgressDots } from "@/components/resumeDashboard/ProgressDots"
import { TemplateSlider } from "@/components/resumeDashboard/TemplateSlider"
import { Button } from "@/components/ui/button"



export default function CreateCv() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Select Your Template
        </h1>
        <ProgressDots />
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-4">
            To get started, select a resume template below.
          </p>
          <Button variant="outline">Skip this step</Button>
        </div>
        <TemplateSlider />
      </main>
      {/* <Footer /> */}
    </div>
  )
}


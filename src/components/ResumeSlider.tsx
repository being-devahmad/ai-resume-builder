import { useState, useRef } from "react"
import london from "@/assets/resumes/london.jpg"
import paris from "@/assets/resumes/paris.jpg"
import copenhagan from "@/assets/resumes/copenhagen.jpg"
import stockholm from "@/assets/resumes/stockholm.png"
import chicago from "@/assets/resumes/chicago.jpg"
import rotterdam from "@/assets/resumes/rotterdam.jpg"
import zurich from "@/assets/resumes/zurich.png"
import oslo from "@/assets/resumes/960.png"
import berlin from "@/assets/resumes/2560.png"
import madrid from "@/assets/resumes/image.jpg"
import { Image } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { Template } from "@/types"


export default function ResumeSlider() {
    const [activeTemplate, setActiveTemplate] = useState<number>(3)
    const scrollRef = useRef<HTMLDivElement>(null)

    const templates = [
        { id: 1, name: "London", image: london },
        { id: 2, name: "Paris", image: paris },
        { id: 3, name: "Oslo", image: oslo },
        { id: 4, name: "Copenhagen", image: copenhagan },
        { id: 5, name: "Berlin", image: berlin },
        { id: 6, name: "Madrid", image: madrid },
        { id: 7, name: "Stockholm", image: stockholm },
        { id: 8, name: "Chicago", image: chicago },
        { id: 9, name: "Rotterdam", image: rotterdam },
        { id: 10, name: "Zurich", image: zurich },
    ]

    const scrollToTemplate = (index: number) => {
        if (scrollRef.current) {
            const template = scrollRef.current.children[index]
            template.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            })
        }
        setActiveTemplate(index + 1)
    }

    const navigate = useNavigate()

    const handleSelectTemplate = (template: Template) => {
        console.log(`Selected template: ${template.name}`)
        navigate(`/select/${template.id}`)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-center text-4xl font-bold mb-12">
                Pick a resume template and <span className="text-emerald-400">build your resume</span> in minutes!
            </h1>

            <div className="relative">
                <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar">
                    {templates.map((template, index) => (
                        <div
                            key={template.id}
                            className="relative flex-shrink-0 w-[300px] h-[400px] snap-center cursor-pointer rounded-xl"
                            onClick={() => scrollToTemplate(index)}
                        >
                            <div
                                className={`relative w-full h-full transition-transform duration-300 
                                ${activeTemplate === template.id ? "scale-105" : "scale-95"}`}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={template.image || "/placeholder.svg"}
                                        alt={`${template.name} resume template`}
                                        className="object-cover rounded-xl"
                                    // priority={index < 3}
                                    />
                                    {activeTemplate === template.id && (
                                        <>
                                            <div className="absolute inset-0 bg-emerald-400/30  flex  justify-center items-end z-10 rounded-xl">
                                                <button className="bg-white text-emerald-500 px-6 py-3 mb-4 rounded-2xl 
                                                    w-full mx-5 font-medium hover:bg-emerald-50 transition-colors text-md"
                                                    onClick={() => handleSelectTemplate({ id: template.id.toString(), name: template.name, image: template.image })}>
                                                    Start with this template {template.name}
                                                </button>
                                            </div>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {templates.map((template, index) => (
                        <button
                            key={template.id}
                            onClick={() => scrollToTemplate(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${activeTemplate === template.id ? "bg-emerald-400 w-4" : "bg-gray-300"}`}
                            aria-label={`Go to ${template.name} template`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


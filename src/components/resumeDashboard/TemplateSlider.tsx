import { useEffect, useState } from 'react'
import { Card, CardFooter, Image } from "@nextui-org/react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { useNavigate } from 'react-router-dom'
import { templates } from '@/data/templates'
import { Button } from '../ui/button'
import { CardContent } from '../ui/card'
// import BuilderLandingPage from '@/pages/resume/ResumeOptions'


interface Template {
    id: string
    name: string
    image: string
    popularity: 'most' | 'recommended' | 'modern' | null
}

export function TemplateSlider() {
    const [activeIndex, setActiveIndex] = useState(0)
    const navigate = useNavigate()
    const [slidesPerView, setSlidesPerView] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setSlidesPerView(3)
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(1)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % templates.length)
    }

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + templates.length) % templates.length)
    }

    const getAdjustedIndex = (index: number) => {
        return (index + templates.length) % templates.length
    }

    const handleSelectTemplate = (template: Template) => {
        console.log(`Selected template: ${template.name}`)
        navigate(`/select/${template.id}`)
    }

    return (
        <>

            <div className="w-full max-w-7xl mx-auto">
                <div className="relative">
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${(activeIndex * (100 / slidesPerView))}%)` }}
                        >
                            {templates.map((template, index) => (
                                <div
                                    key={`${template.id}-${index}`}
                                    className={`flex-shrink-0 px-2 transition-all duration-300 ${slidesPerView === 3 ? 'w-1/3' :
                                        slidesPerView === 2 ? 'w-1/2' :
                                            'w-full'
                                        }`}
                                >
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card
                                                className={`w-full h-full transition-all duration-300 ${getAdjustedIndex(index - activeIndex) === 0
                                                    ? 'scale-105 shadow-lg'
                                                    : 'scale-95 opacity-70'
                                                    }`}
                                            >
                                                <CardContent className="p-0 flex items-center justify-center">
                                                    <div className="w-full h-[400px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
                                                        <Image
                                                            src={template.image}
                                                            alt={template.name}
                                                            width={300}
                                                            height={400}
                                                            className="max-w-full max-h-full object-contain"
                                                        />
                                                    </div>
                                                    {template.popularity && (
                                                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold z-20 ${template.popularity === 'most' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                                                            }`}>
                                                            {template.popularity === 'most' ? 'Most Selected' : 'Recommended'}
                                                        </div>
                                                    )}
                                                </CardContent>
                                                <CardFooter className="justify-between items-center">
                                                    <span className="text-sm sm:text-base">{template.name}</span>
                                                    {getAdjustedIndex(index - activeIndex) === 0 && (
                                                        <Button
                                                            size="sm"
                                                            onClick={() => handleSelectTemplate(template)}
                                                        >
                                                            Select
                                                        </Button>
                                                    )}
                                                    <span className="text-gray-500 text-xs sm:text-sm">WORD | PDF</span>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

        </>
    )
}


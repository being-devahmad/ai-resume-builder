import { Image } from "@nextui-org/react"
import Adobe from "@/assets/logos/adobe.png"
import Braze from "@/assets/logos/braze.png"
import Hellosign from "@/assets/logos/hellosign.png"
import Maze from "@/assets/logos/maze.png"
import Ghost from "@/assets/logos/ghost.png"



export default function LogoShowcase() {
    const logos = [
        {
            src: Adobe ,
            alt: "Adobe logo",
            width: 100
        },
        {
            src: Braze,
            alt: "Braze logo",
            width: 100
        },
        {
            src: Hellosign,
            alt: "Hellosign logo",
            width: 100
        },
        {
            src: Maze,
            alt: "Maze logo",
            width: 100
        },
        {
            src: Ghost,
            alt: "Ghost logo",
            width: 100
        }
    ]

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="w-[120px] h-[60px] relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                        >
                            <Image
                                src={logo.src || "/placeholder.svg"}
                                alt={logo.alt}
                                width={logo.width}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
                    More than 25+ companies HR around the world trusted optimCV with the employee management.
                </p>
            </div>
        </section>
    )
}


import { Button } from '@/components/ui/button';
import UnionAbove from '@/assets/shapes/UnionAbove.png';
import UnionBelow from '@/assets/shapes/UnionBelow.png';
import decorativeResume1 from "@/assets/shapes/decres1.png"
import decorativeResume2 from "@/assets/shapes/decres2.png"
import cornerStar from "@/assets/shapes/Vector.png"

export default function HeroSection() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="relative rounded-3xl min-h-[422px] w-full overflow-hidden bg-[#4AE9C5] px-6 py-16">
                {/* Background Decorative Elements */}
                <img
                    src={UnionBelow}
                    alt=""
                    className="absolute bottom-0 right-56 "
                    aria-hidden="true"
                />
                <img
                    src={UnionAbove}
                    alt=""
                    className="absolute top-0 left-56  "
                    aria-hidden="true"
                />

                {/* Floating Resume Images */}
                <img
                    src={decorativeResume1}
                    alt="Resume preview"
                    width={93}
                    height={133}
                    className="absolute -left-22 top-1/2 rotate-[-2deg] transform"
                />
                <img
                    src={decorativeResume2}
                    alt="Resume preview"
                    width={93}
                    height={133}
                    className="absolute right-12 bottom-5 rotate-[2deg] transform"
                />

                {/* Corner Decorative Elements */}
                {/* left corner */}
                <img
                    src={cornerStar}
                    alt=""
                    width={18}
                    height={18}
                    className="absolute left-24 top-6"
                    aria-hidden="true"
                />
                {/* right corner */}
                <img
                    src={cornerStar}
                    alt=""
                    width={30}
                    height={30}
                    className="absolute right-6 top-6"
                    aria-hidden="true"
                />

                {/* Main Content */}
                <div className="relative mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        Join thousands of professionals who landed their{' '}
                        <span className="text-[#1796B8]">dream jobs!</span>
                    </h1>

                    <p className="mb-8 text-lg text-white/90 md:text-xl">
                        Experience the power of streamlined OptimCV solutions
                    </p>

                    <Button
                        className="bg-white px-8 py-4 text-lg font-semibold text-[#40E0AC] hover:bg-white/90 shadow-md rounded-lg"
                    >
                        Accelerate My Career
                    </Button>
                </div>
            </div>
        </div>
    );
}

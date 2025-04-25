// import { Button } from '@/components/ui/button';
// import { Image } from '@nextui-org/react';
// import template2 from "@/assets/resumes/resume2.png"
// import template3 from "@/assets/resumes/resume3.png"
// import template4 from "@/assets/resumes/rotterdam.jpg"
// import template1 from "@/assets/resumes/resume1.png"
// import { useEffect, useRef, useState } from 'react';

// const TemplatesBanner = () => {
//     const [activeTemplate, setActiveTemplate] = useState<number | null>(null);
//     const intervalRef = useRef<NodeJS.Timeout | null>(null);

//     const templates = [
//         {
//             id: 1,
//             src: template1,
//             alt: "Minimalist Resume Template",
//             width: 250,
//             height: 354,
//             className: "rounded-lg shadow-lg",
//             style: {
//                 position: "absolute",
//                 left: "-60px",
//                 top: "40px",
//                 zIndex: 2,
//             },
//         },
//         {
//             id: 2,
//             src: template2,
//             alt: "Creative Resume Template",
//             width: 280,
//             height: 396,
//             className: "rounded-lg shadow-xl",
//             style: {
//                 position: "absolute",
//                 left: "10px",
//                 bottom: "20px",
//                 zIndex: 3,
//             },
//         },
//         {
//             id: 3,
//             src: template3,
//             alt: "Corporate Resume Template",
//             width: 250,
//             height: 354,
//             className: "rounded-lg shadow-lg",
//             style: {
//                 position: "absolute",
//                 right: "10px",
//                 bottom: "20px",
//                 zIndex: 4,
//             },
//         },
//         {
//             id: 4,
//             src: template4,
//             alt: "Modern Resume Template",
//             width: 250,
//             height: 354,
//             className: "rounded-lg shadow-lg",
//             style: {
//                 position: "absolute",
//                 right: "150px",
//                 top: "10px",
//                 zIndex: 2,
//             },
//         },
//     ];

//     useEffect(() => {
//         intervalRef.current = setInterval(() => {
//             setActiveTemplate((prev) => (prev === null || prev >= templates.length - 1 ? 0 : prev + 1));
//         }, 3000);

//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current);
//         };
//     }, []);

//     return (
//         <>
//             <div className="min-h-screen w-full bg-gradient-to-br from-[#e6f7f4] to-[#f5f7f9] flex items-center justify-center p-4 md:p-8">
//                 <div className="container grid lg:grid-cols-2 gap-8 items-center">
//                     {/* Left side - Resume previews */}
//                     <div className="relative w-[650px] h-[600px] hidden lg:block">
//                         {templates.map((template, index) => (
//                             <div
//                                 key={template.id}
//                                 style={{...template.style, position: template.style.position as React.CSSProperties['position']}}
//                                 className={`transition-all duration-500 ease-in-out ${activeTemplate === index ? 'scale-105 opacity-100 fade-in' : 'scale-95 opacity-0 fade-out'
//                                     }`}
//                                 onMouseEnter={() => {
//                                     if (intervalRef.current) clearInterval(intervalRef.current);
//                                     setActiveTemplate(index);
//                                 }}
//                                 onMouseLeave={() => {
//                                     intervalRef.current = setInterval(() => {
//                                         setActiveTemplate((prev) => (prev === null || prev >= templates.length - 1 ? 0 : prev + 1));
//                                     }, 3000);
//                                 }}
//                             >
//                                 <Image
//                                     src={template.src}
//                                     alt={template.alt}
//                                     width={template.width}
//                                     height={template.height}
//                                     className={template.className}
//                                 />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right side - Content */}
//                     <div className="lg:ml-auto max-w-xl">
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//                             <span>One </span>
//                             <span className="text-emerald-400">resume builder</span>
//                             <span>, hundreds of templates</span>
//                         </h1>
//                         <p className="text-gray-600 text-lg mb-8">
//                             Choose from hundreds of professionally designed and ATS-friendly resume templates, tens of resume sections,
//                             and thousands of combinations made to make you stand out.
//                         </p>
//                         <Button variant="outline" className="text-emerald-500 border-emerald-500 hover:bg-emerald-50" size="lg">
//                             View All Templates
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TemplatesBanner;







import { Button } from "@/components/ui/button";
import { Image } from "@nextui-org/react";
import template2 from "@/assets/resumes/resume2.png";
import template3 from "@/assets/resumes/resume3.png";
import template4 from "@/assets/resumes/rotterdam.jpg";
import template1 from "@/assets/resumes/resume1.png";
import { useEffect, useRef, useState } from "react";

const TemplatesBanner = () => {
  const [activeTemplate, setActiveTemplate] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const templates = [
    {
      id: 1,
      src: template1,
      alt: "Minimalist Resume Template",
    },
    {
      id: 2,
      src: template2,
      alt: "Creative Resume Template",
    },
    {
      id: 3,
      src: template3,
      alt: "Corporate Resume Template",
    },
    {
      id: 4,
      src: template4,
      alt: "Modern Resume Template",
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTemplate((prev) =>
        prev === null || prev >= templates.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#e6f7f4] to-[#f5f7f9] flex items-center justify-center p-4">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Resume previews */}
        <div className="relative lg:w-[650px] lg:h-[600px] w-full h-auto flex justify-center lg:block">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className={`transition-all duration-500 ease-in-out ${
                activeTemplate === index
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-95"
              }`}
              onMouseEnter={() => {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setActiveTemplate(index);
              }}
              onMouseLeave={() => {
                intervalRef.current = setInterval(() => {
                  setActiveTemplate((prev) =>
                    prev === null || prev >= templates.length - 1 ? 0 : prev + 1
                  );
                }, 3000);
              }}
            >
              <Image
                src={template.src}
                alt={template.alt}
                width={250}
                height={350}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="lg:ml-auto max-w-xl text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span>One </span>
            <span className="text-emerald-400">resume builder</span>
            <span>, hundreds of templates</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Choose from hundreds of professionally designed and ATS-friendly
            resume templates, tens of resume sections, and thousands of
            combinations made to make you stand out.
          </p>
          <Button
            variant="outline"
            className="text-emerald-500 border-emerald-500 hover:bg-emerald-50"
            size="lg"
          >
            View All Templates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplatesBanner;

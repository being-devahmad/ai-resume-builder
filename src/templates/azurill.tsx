const Header = ({ allData }: { allData: { firstName: string; lastName: string; jobTite: string; city: string; country: string; email: string; phone: string; postalCode: string, summary: string } }) => {
    
    const { firstName, lastName, phone, email, city, postalCode, country, summary, jobTite } = allData;

    return (
        <>
            <div>
                <h1 className="text-4xl font-bold mb-2">{firstName} {lastName} </h1>
                <p className="font-bold mb-2">{jobTite} </p>
                <div className="text-sm space-x-2">
                    <span>{phone}</span>
                    <span>·</span>
                    <span>{email}</span>
                    <span>·</span>
                    {/* {links.map((link) => <a className="pl-1" href={link}>{link}</a>)} */}
                </div>
                <div className="text-sm mt-1">
                    <span>{city}</span>,
                    <span>{postalCode}</span>
                    <span>{country}</span>
                </div>
            </div>
            <h2 className="text-lg font-bold uppercase mb-2">Summary</h2 >
            <div className="flex flex-col gap-4 mb-2">
                <p className="text-sm mt-2">
                    {summary}
                </p>
            </div>

        </>
    );
};

const Education = ({ allData }: { allData: { education: Array<{ degree: string; startDate: string; endDate: string; organization: string; location: string }> } }) => {
    const { education } = allData;

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-2">Education</h2>
            <div className="flex flex-col gap-4 mb-2">
                {
                    education.map((educationVal, index) => {
                        const { degree, startDate, endDate, organization, location } = educationVal
                        return (
                            <div key={index}>
                                <div className="flex justify-between">
                                    <h3 className="font-bold">{degree}</h3>
                                    <div className="flex gap-0.5 items-center">
                                        <p className="text-sm">{startDate}</p>
                                        <span>-</span>
                                        <p className="text-sm">{endDate}</p>
                                    </div>

                                </div>
                                <div className="flex justify-between">
                                    <p>{organization}</p>
                                    <p>{location}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
};

const Experience = ({ allData }: { allData: { experiences: Array<{ company: string; startDate: string; endDate: string; title: string; location: string; description: string }> } }) => {
    const { experiences } = allData;
    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Professional Experience</h2>
            <div className="space-y-6">
                {experiences.map((experienceVal) => {
                    const { company, startDate, endDate, title, location, description } = experienceVal
                    return (
                        <div>
                            <div className="flex justify-between">
                                <h3 className="font-bold">{company}</h3>
                                <div className="flex gap-0.5 items-center">
                                    <p className="text-sm">{startDate}</p>
                                    <span>-</span>
                                    <p className="text-sm">{endDate ? endDate : "present"}</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold">{title}</p>
                                <p>{location}</p>
                            </div>
                            <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap text-sm mt-2">
                                {description}
                            </pre>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};


const CustomSection = ({ allData }: { allData: { customSections: Array<{ title: string, description: string, year: string, subtitle: string }> } }) => {
    const { customSections } = allData;
    return (
        <section className="mb-8">
            <h1 className="text-lg font-bold uppercase mb-4">Additional</h1>
            <div className="space-y-6">
                {customSections.map((customSec, i) => {
                    const { description, year, subtitle, title } = customSec
                    return (
                        <div key={i}>
                            <h1 className="font-bold mb-2">{title}</h1>
                            <div className="flex justify-between">
                                <h3 className="font-bold">{subtitle}</h3>
                                <div className="flex gap-0.5 items-center">
                                    <p className="text-sm">{year}</p>
                                </div>
                            </div>
                            <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap text-sm mt-2">
                                {description}
                            </pre>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};


const Activities = ({ allData }: { allData: { activities: any[] } }) => {
    const { activities } = allData;
    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Professional Experience</h2>
            <div className="space-y-6">
                {activities.map((activity, i) => {
                    const { title, employer, startDate, endDate, description, current } = activity
                    return (
                        <div key={i}>
                            <div className="flex justify-between">
                                <h3 className="font-bold">{title}</h3>

                                <div className="flex gap-0.5 items-center">
                                    <p className="text-sm">{startDate}</p>
                                    <span>-</span>
                                    <p className="text-sm"> {startDate} - {endDate ? endDate : (!endDate && current && "present")}</p>
                                </div>
                            </div>
                            <h5 className="font-bold">{employer}</h5>
                            <p className="text-sm mt-2">
                                {description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

// const Projects = () => {


//     const projects = [
//         {
//             title: "StoreIt - Google Drive Clone",
//             date: "Aug 2024 - Oct 2024",
//             technologies: ["React.js, ", "Firebase, ", "Node.js, ", "Tailwind CSS"],
//             description: "Built a cloud storage application with features for file upload, sharing, and user authentication using Firebase and React."
//         },
//         {
//             title: "Course Management System",
//             date: "Jan 2024 - Jun 2024",
//             technologies: ["React.js, ", "Tailwind CSS, ", "Node.js, ", "MongoDB"],
//             description: "Created a course management platform for educational institutions with user-friendly interfaces, CRUD operations, and role-based access."
//         },
//         {
//             title: "E-Commerce Store",
//             date: "May 2023 - Dec 2023",
//             technologies: ["Next.js, ", "Shopify, ", "GraphQL, ", "TypeScript"],
//             description: "Developed a fully functional e-commerce platform integrated with Shopify, implementing features such as product filtering, payment gateways, and SEO optimization."
//         }
//     ];


//     return (
//         <section className="mb-8">
//             <h2 className="text-lg font-bold uppercase mb-4">Projects</h2>

//             <div className="space-y-6">
//                 <div className="flex justify-between items-start flex-col gap-4">
//                     {
//                         projects.map((projectValues) => {
//                             const {title, technologies, date, description} = projectValues
//                             return (
//                                 <div>
//                                     <div className="flex justify-between">
//                                         <div>
//                                             <p className="flex gap-4">
//                                                 <span className="font-bold">{title}</span>
//                                                 <span>
//                                                     <Divider orientation="vertical" className="bg-gray-500 h-full" />
//                                                 </span>
//                                                 <span className="italic">{technologies}</span>
//                                             </p>
//                                         </div>
//                                         <p className="text-sm">{date}</p>
//                                     </div>
//                                     <div className="font-bold">Business Analyst Intern</div>
//                                     <p className="text-sm mt-2">
//                                         {description}
//                                     </p>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </section >
//     )
// }

// const Projects = ({allData}) => {
//     const {projects} = allData;

//     return (
//         <section className="mb-8">
//             <h2 className="text-lg font-bold uppercase mb-4">Projects</h2>
//             <div className="space-y-6">
//                 {projects.map(({ title, date, technologies, description }, index) => (
//                     <div key={index}>
//                         <div className="flex justify-between">
//                             <div>
//                                 <p className="flex gap-4">
//                                     <span className="font-bold">{title}</span>
//                                     <span>
//                                         <Divider orientation="vertical" className="bg-gray-500 h-full" />
//                                     </span>
//                                     <span className="italic">{technologies.join(", ")}</span>
//                                 </p>
//                             </div>
//                             <p className="text-sm">{date}</p>
//                         </div>
//                         <p className="text-sm mt-2">{description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };


const Skills = ({ allData }: { allData: { skills: Array<{ name: string; level: string }> } }) => {
    const { skills } = allData;

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Skills</h2>
            <div className="space-y-6">
                {skills.map((skill, i) => {
                    const { name, level } = skill
                    return (
                        <div key={i}>
                            <div className="flex items-center gap-3">
                                <h3 className="font-bold">{name}</h3>
                                <p className="text-sm">{level}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

const Languages = ({ allData }: { allData: { languages: { name: string; level: string }[] } }) => {
    const { languages } = allData;

    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold uppercase mb-4">Languages</h2>
            <div className="space-y-6">
                {languages && languages.map((lang, i) => {
                    const { name, level } = lang
                    return (
                        <div key={i}>
                            <div className="flex items-center gap-3">
                                <h3 className="font-bold">{name}</h3>
                                <p className="text-sm">{level}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};


export const Azurill = ({ allData }: { allData: any }) => {
    return (
        <div className="max-w-[800px] mx-auto p-8 font-sans">
            <Header allData={allData} />
            {allData.education.length > 0 && <Education allData={allData} />}
            {allData.experiences.length > 0 && <Experience allData={allData} />}
            {allData.activities && allData.activities.length > 0 && <Activities allData={allData} />}
            {allData.customSections && allData.customSections.length > 0 && <CustomSection allData={allData} />}
            {/* <Projects allData={allData} /> */}
            {allData.skills && allData.skills.length > 0 && <Skills allData={allData} />}
            {allData.languages && <Languages allData={allData} />}
        </div>
    );
};
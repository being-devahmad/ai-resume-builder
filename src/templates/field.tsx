const Header = ({ allData }: { allData: { firstName: string; lastName: string; jobTite: string; city: string; country: string; email: string; phone: string; postalCode: string, summary: string } }) => {

    const { firstName, lastName, phone, email, city, postalCode, country, jobTite } = allData;

    return (

        <div className="flex justify-between items-center mb-10 relative after:content-[''] after:absolute after:bottom-[-20px] after:left-[-40px] after:right-[-40px] after:h-[2px] after:bg-gradient-to-r after:from-indigo-700 after:via-indigo-400 after:to-indigo-700">
            <div className="flex-1">
                <h1 className="text-3xl font-semibold text-indigo-900 mb-1">{`${firstName} ${lastName}`}</h1>
                <div className="text-lg font-medium text-indigo-600 mb-5">{jobTite}</div>
                <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex gap-2">
                        <span>📍</span>
                        <span>{`${city}, ${postalCode}, ${country}`}</span>
                    </div>
                    <div className="flex gap-2">
                        <span>✉️</span>
                        <span>{`${email}`}</span>
                    </div>
                    <div className="flex gap-2">
                        <span>📞</span>
                        <span>{`${phone}`}</span>
                    </div>
                </div>
            </div>
            <img src="/profile-picture.jpg" alt="Profile" className="w-28 h-28 rounded-full border-4 border-indigo-600 shadow-lg transition-transform hover:scale-105" />
        </div>
    )
}

const Summary = ({ allData }: { allData: { summary: string } }) => (
    <div className="bg-gradient-to-br from-white to-indigo-50 p-6 mb-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 before:content-[''] before:w-7 before:h-[3px] before:bg-indigo-600 before:rounded-full">
            Summary
        </h2>
        {allData.summary}
    </div>
);

const Experience = ({ allData }: { allData: { experiences: Array<{ company: string; startDate: string; endDate: string; title: string; location: string; description: string }> } }) => {
    const { experiences } = allData
    return (
        <>
            <div className="bg-gradient-to-br from-white to-indigo-50 p-6 mb-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 before:content-[''] before:w-7 before:h-[3px] before:bg-indigo-600 before:rounded-full">
                    Experience
                </h2>
                {
                    experiences.map((exp, i) => {
                        const { company, startDate, endDate, title, location, description } = exp
                        return (
                            <>
                                <div className="mb-6 pl-5 border-l-2 border-indigo-600" key={i}>
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                                        <span className="text-sm text-gray-600">{`${startDate} - ${endDate}`}</span>
                                    </div>
                                    <div className="text-indigo-600 font-medium text-base mb-1">{company}</div>
                                    <div className="text-gray-600 text-sm mb-2">{location}</div>
                                    <ul className="list-disc">
                                        <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap mb-2 relative pl-6 text-gray-700 before:content-['▹'] before:absolute before:left-0 before:text-indigo-600 before:font-bold">
                                            {description}
                                        </pre>

                                    </ul>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

const Education = ({ allData }: { allData: { education: Array<{ degree: string; startDate: string; endDate: string; organization: string; location: string }> } }) => {
    const { education } = allData;
    return (
        <>
            <div className="bg-gradient-to-br from-white to-indigo-50 p-6 mb-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 before:content-[''] before:w-7 before:h-[3px] before:bg-indigo-600 before:rounded-full">
                    Education
                </h2>
                {
                    education.map((edu, i) => {
                        const { degree, startDate, endDate, organization, location } = edu
                        return (
                            <>
                                <div className="mb-6 pl-5 border-l-2 border-indigo-600" key={i}>
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-lg font-medium text-gray-800">{degree}</h3>
                                        <span className="text-sm text-gray-600">{`${startDate} - ${endDate}`}</span>
                                    </div>
                                    <div className="text-indigo-600 font-medium text-base mb-1">{organization}</div>
                                    <div className="text-indigo-600">{location}</div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

const Activities = ({ allData }: { allData: { activities: any[] } }) => {
    const { activities } = allData;
    return (
        <div className="bg-gradient-to-br from-white to-indigo-50 p-6 mb-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 before:content-[''] before:w-7 before:h-[3px] before:bg-indigo-600 before:rounded-full">
                Achievements
            </h2>
            {
                activities && activities.map((activity, i) => {
                    const { title, employer, startDate, endDate, description, current } = activity
                    return (

                        <div className="mb-6 pl-5 border-l-2 border-indigo-600" key={i}>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                                <span className="text-sm text-gray-600"> {startDate} - {endDate ? endDate : (!endDate && current && "present")}</span>
                            </div>
                            <div className="text-indigo-600 font-medium text-base mb-1">{employer}</div>
                            <div className="text-indigo-600">{description}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}


const CustomSection = ({ allData }: { allData: { customSections: any[] } }) => {
    const { customSections } = allData;

    return (
        <>
            {customSections &&
                customSections.map((customSec, i) => {
                    const { description, year, subtitle, title } = customSec;
                    return (
                        <div
                            className="bg-gradient-to-br from-white to-indigo-50 p-6 mb-6 rounded-xl shadow-md transition-transform hover:-translate-y-1"
                            key={i}
                        >
                            <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 before:content-[''] before:w-7 before:h-[3px] before:bg-indigo-600 before:rounded-full">
                                {title}
                            </h2>
                            <p className="text-gray-600">{subtitle}</p>
                            <div className="text-right">
                                <p>{year}</p>
                                <p className="text-gray-600">{description}</p>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};


const Skills = ({ allData }: { allData: { skills: Array<{ name: string; level: string }> } }) => {
    const { skills } = allData
    const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

    return (
        <>
            {/* <div>
                <h2>Skills</h2>
            </div> */}
            <div className="bg-gradient-to-br from-white to-indigo-50 p-6 mb-6 rounded-xl shadow-md transition-transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center gap-2 before:content-[''] before:w-7 before:h-[3px] before:bg-indigo-600 before:rounded-full">
                    Skills
                </h2>
                <ul className="grid grid-cols-2 gap-5">
                    {skills.map((skill, index) => (
                        <li key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{skill.name}</span>
                                {/* <span className="text-sm text-gray-600">{skill.level}</span> */}
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 transition-all duration-300"
                                    style={{
                                        width: `${((experienceLevels.indexOf(skill.level) + 1) / experienceLevels.length) * 100}%`,
                                    }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


const Languages = ({ allData }: { allData: { languages: { name: string; level: string }[] } }) => {
    const { languages } = allData

    return (
        <div className="flex flex-col items-center gap-2">
            <ul className="space-y-2">
                {languages.map((lang, index) => (
                    <li key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">{lang.name}</span>
                            <span className="text-sm text-gray-600">{lang.level}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Field = ({ allData }: { allData: any }) => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-xl font-sans">
            <Header allData={allData} />

            {allData.summary && <Summary allData={allData} />}

            {allData.experiences && allData.experiences.length > 0 && <Experience allData={allData} />}

            {allData.education && allData.education.length > 0 && <Education allData={allData} />}

            {allData.activities && allData.activities.length > 0 && <Activities allData={allData} />}

            {allData.customSections && allData.customSections.length > 0 && <CustomSection allData={allData} />}
            {allData.skills && allData.skills.length > 0 && <Skills allData={allData} />}
            {allData.languages && allData.languages.length > 0 && <Languages allData={allData} />}

        </div>
    );
};

export default Field;


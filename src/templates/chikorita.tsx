import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { useRef } from "react";
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Header = ({ allData }: { allData: { firstName: string, lastName: string, jobTitle: string } }) => {
  const { firstName, lastName, jobTitle } = allData;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-8 rounded-t-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">{`${firstName} ${lastName}`}</h1>
        <p className="text-xl text-blue-100">{jobTitle}</p>
      </div>
    </div>
  );
};

const Contact = ({ allData }: { allData: { phone: string, email: string, city: string, postalCode: string, country: string } }) => {
  const { phone, email, city, postalCode, country } = allData;
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">CONTACT</h2>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <PhoneIcon className="h-5 w-5 text-blue-600" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <EnvelopeOpenIcon className="h-5 w-5 text-blue-600" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPinIcon className="h-5 w-5 text-blue-600" />
          <span>{`${city}, ${postalCode}, ${country}`}</span>
        </div>
      </div>
    </div>
  );
};

const Profile = ({ allData }: { allData: { summary: string } }) => {
  const { summary } = allData;
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">PROFILE</h2>
      <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
    </div>
  );
};

const Experience = ({ allData }: { allData: { experiences: any[] } }) => {
  const { experiences } = allData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-8">WORK EXPERIENCE</h2>
      <div className="relative border-l-2 border-blue-300 pl-7 space-y-12">
        {experiences.map((exp, index) => {
          const { company, startDate, endDate, title, description, location , current } = exp;
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{title}</h3>
                  <p className="text-gray-600 italic">{company} , {location} </p>
                </div>
                <div className="text-sm text-gray-500">
                  {startDate} - {(endDate && current) ? endDate : "present"}
                </div>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-gray-700">
                <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap">
                  {description}
                </pre>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Education = ({ allData }: { allData: { education: any[] } }) => {
  const { education } = allData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-8">EDUCATION</h2>
      <div className="relative border-l-2 border-blue-300 pl-7 space-y-12">
        {education.map((edu, index) => {
          const { degree, startDate, endDate, organization, location } = edu;
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{degree}  </h3>
                  <p className="text-gray-600 italic">{organization} , {location} </p>
                </div>
                <div className="text-sm text-gray-500">
                  {startDate} - {endDate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Activities = ({ allData }: { allData: { activities: any[] } }) => {
  const { activities } = allData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-8">ACHIEVEMENTS</h2>
      <div className="relative border-l-2 border-blue-300 pl-7 space-y-12">
        {activities && activities.map((activity, index) => {
          const { title, employer, startDate, endDate, description, current } = activity
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{title}  </h3>
                  <p className="text-gray-600 italic">{employer} </p>
                </div>
                <div className="text-sm text-gray-500">
                  {startDate} - {endDate ? endDate : (!endDate && current && "present")}
                </div>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const CustomSection = ({ allData }: { allData: { customSections: Array<{ title: string, description: string, year: string, subtitle: string }> } }) => {
  const { customSections } = allData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-8">ACHIEVEMENTS</h2>
      <div className="relative border-l-2 border-blue-300 pl-7 space-y-12">
        {customSections && customSections.map((customSec, index) => {
          const { description, year, subtitle, title } = customSec
          return (
            <div key={index} className="relative">
              <div className="absolute left-[-35px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-blue-700">{title}  </h3>
                  <p className="text-gray-600 italic">{subtitle} </p>
                </div>
                <div className="text-sm text-gray-500">
                  {year}
                </div>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



const Skills = ({ allData }: { allData: { skills: Array<{ name: string; level: string }> } }) => {
  const { skills } = allData;
  const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">SKILLS</h2>
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.level}</span>
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
  );
};


const Languages = ({ allData }: { allData: { languages: { name: string; level: string }[] } }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-4">LANGUAGES</h2>
      <ul className="space-y-4">
        {allData.languages.map((lang, id) => {
          return (
            <li key={id}>{lang.name} <span>-</span> <span>{lang.level}</span></li>
          )
        })}
      </ul>
    </div>
  )
}

export const Chikorita = ({ allData }: { allData: any }) => {
  const resumeRef = useRef(null);

  return (
    <div className="max-w-full mx-auto p-8 font-sans ">
      <div ref={resumeRef} className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden ">
        <Header allData={allData} />
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-6">
          <div className="space-y-6">
            <Contact allData={allData} />
            {allData.skills && <Skills allData={allData} />}
            {allData.languages && <Languages allData={allData} />}
          </div>
          <div className="space-y-6">
            <Profile allData={allData} />
            {allData.experiences.length > 0 && <Experience allData={allData} />}
            {allData.education.length > 0 && <Education allData={allData} />}
            {allData.activities && allData.activities.length > 0 && <Activities allData={allData} />}
            {allData.customSections && allData.customSections.length > 0 && <CustomSection allData={allData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chikorita;


import { Mail, Phone, MapPin, } from "lucide-react";

export function PersonalInformation({
  allData,
}: {
  allData: {
    phone: string;
    email: string;
    city: string;
    postalCode: string;
    country: string;
  };
}) {
  const { phone, email, city, postalCode, country } = allData;
  return (
    <section className="mb-6">
      <h2 className="font-semibold mb-3 border-b border-gray-300 pb-1 flex items-center gap-2">
        <Mail className="w-4 h-4" /> Contact Me
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:john.doe@gmail.com"
            className="hover:underline text-xs"
          >
            {email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href={`tel:${phone}`} className="hover:underline text-xs">
            {phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="w-4 h-4 " />
          <span className="text-xs">{`${city} , ${country} ,  ${postalCode}`}</span>
        </li>
      </ul>
    </section>
  );
}

import { GraduationCap } from "lucide-react";

export function Education({ allData }: { allData: { education: any[] } }) {
  const { education } = allData;
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2 ">
        <GraduationCap className="w-5 h-5 text-blue-500" /> Education
      </h2>
      {education?.map((val, ind) => {
        const { degree, startDate, endDate, organization, location } = val;
        return (
          <>
            <div className="bg-gray-100 rounded-lg p-4" key={ind}>
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {degree}
                </h3>
                <p className="text-gray-600 mt-1 text-xs">{startDate} - {endDate}</p>
              </div>

              <p className="text-gray-700 text-sm">{organization} <span>,</span> {location} </p>
            </div>
          </>
        );
      })}
    </section>
  );
}

export function Header({
  allData,
}: {
  allData: { firstName: string; lastName: string; jobTitle: string };
}) {
  const { firstName, lastName, jobTitle } = allData;
  return (
    <header className="text-center">
      <h1 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        {`${firstName} ${lastName}`}
      </h1>
      <p className="text-md font-bold mb-1 text-white from-blue-400 to-purple-500">
        {jobTitle}
      </p>
    </header>
  );
}

import { User } from "lucide-react";

export function Summary({ allData }: { allData: { summary: string } }) {
  const { summary } = allData;
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center gap-2">
        <User className="w-5 h-5 text-blue-500" /> Summary
      </h2>
      <p className="text-gray-600 leading-relaxed">{summary}</p>
    </section>
  );
}



import { Briefcase } from "lucide-react";


export function Experience({ allData }: { allData: { experiences: any[] } }) {
  const { experiences } = allData;


  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const { company, startDate, endDate, title, description, location, current } = exp;
          return (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-700">{company} <span>,</span> {location}</p>
                </div>
                <span className="text-gray-600 text-sm">
                  {startDate} - {endDate ? endDate : (!endDate && current && "present")}
                </span>
              </div>

              <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap text-xs">
                {description}
              </pre>
            </div>
          );
        })}
      </div>
    </section>
  );
}


// Achievements
export function Activities({ allData }: { allData: { activities: any[] } }) {
  const { activities } = allData;


  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> Achievements
      </h2>
      <div className="space-y-6">
        {activities && activities.map((activity, index) => {
          const { title, employer, startDate, endDate, description, current } = activity
          return (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-700">{employer}</p>
                </div>
                <span className="text-gray-600 text-sm">
                  {startDate} - {endDate ? endDate : (!endDate && current && "present")}
                </span>
              </div>

              <p className="text-xs">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


// Custom Sections
export function CustomSection({ allData }: { allData: { customSections: any[] } }) {
  const { customSections } = allData;


  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800 border-b border-gray-300 pb-1 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-500" /> Achievements
      </h2>
      <div className="space-y-6">
        {customSections && customSections.map((customSec, index) => {
           const { description, year, subtitle, title } = customSec
          return (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-700">{subtitle}</p>
                </div>
                <span className="text-gray-600 text-sm">
                 {year}
                </span>
              </div>

              <p className="text-xs">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


const Skills = ({ allData }: { allData: { skills: Array<{ name: string; level: string }> } }) => {
  const { skills } = allData;
  const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <div className=" mb-2">
      <h2 className="text-xl font-bold border-b border-gray-100 pb-2 mb-4">
        Skills
      </h2>
      <ul className="space-y-2">
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
  );
};


export const Languages = ({ allData }: { allData: { languages: { name: string; level: string }[] } }) => {

  return (
    <section className="mb-6 text-xs">
      <h2 className="text-xl font-bold border-b border-gray-100 pb-2 mb-4">
        Languages
      </h2>
      <ul className="space-y-4">
        {allData.languages.map((lang, id) => {
          return (
            <li key={id}>{lang.name} <span>-</span> <span>{lang.level}</span></li>
          )
        })}
      </ul>
    </section>
  )
}



export const Nosepass = ({ allData }: { allData: any }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
            <div className="flex flex-col items-center mb-6">

              <Header allData={allData} />
            </div>
            <PersonalInformation allData={allData} />
            {allData.skills && allData.skills.length > 0 && <Skills allData={allData} />}
            {allData.languages && <Languages allData={allData} />}
            {/* <Profiles allData={allData} /> */}
          </div>
          <div className="md:col-span-7 p-6">

            <Summary allData={allData} />

            {allData.experiences && allData.experiences.length > 0 && <Experience allData={allData} />}

            {allData.education && allData.education.length > 0 && <Education allData={allData} />}

            {allData.activities && allData.activities.length > 0 && <Activities allData={allData} />}

            {allData.customSections && allData.customSections.length > 0 && <CustomSection allData={allData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

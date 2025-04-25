import { NextUIProvider } from "@nextui-org/react";
import { Github, Globe, Linkedin } from "lucide-react";
import React from "react";

const Header = ({ allData }: {
  allData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    postalCode: string;
    country: string;
    github: string;
    linkedin: string;
    portfolio: string;
  }
}) => {
  const { firstName, lastName, phone, email, city, postalCode, country, github, linkedin, portfolio } = allData;
  return (
    <header className="flex flex-col items-center justify-between border-b pb-6 mb-8 w-full overflow-x-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="flex justify-center items-center space-x-4 w-full ms-5 mt-4">

        <div className="text-center ">
          <h1 className="text-4xl font-bold text-white">{`${firstName} ${lastName}`}</h1>
          {/* <p className="text-lg text-gray-300">
            Creative and Innovative Web Developer
          </p> */}
        </div>
      </div>
      <div className="mt-4 md:mt-0 text-gray-300 text-sm text-center w-full">
        <p>{`${city}, ${country} ${postalCode}`}</p>
        <p>{`${phone} · ${email}`}</p>
        {/* <p>https://johndoe.me</p> */}
      </div>

      <div className="flex space-x-6 mt-4 md:mt-0 w-full justify-center">
        {portfolio &&
          <a href={`${portfolio}`} className="hover:text-blue-500  flex items-center space-x-1 transition duration-200 ease-in-out text-black">
            <Globe size={12} />
          </a>
        }
        {linkedin &&
          <a href={`${linkedin}`} className=" hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black">
            <Linkedin size={12} />
          </a>
        }
        {github && <a href={`${github}`} className=" hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black">
          <Github size={12} />
        </a>
        }
      </div>

      {/* <div className="flex space-x-6 mt-4 md:mt-0 w-full justify-center">
        <a
          href="https://linkedin.com/in/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500  flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Linkedin size={20} className="" />
          <span className="mt-1">LinkedIn</span>
        </a>
        <a
          href="https://github.com/johndoe"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Github size={20} />
          <span className="mt-1">GitHub</span>
        </a>
        <a
          href="https://johndoe.me"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 flex items-center space-x-1 transition duration-200 ease-in-out text-black"
        >
          <Globe size={20} />
          <span className="mt-1">Portfolio</span>
        </a>
      </div> */}
    </header>
  );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const Summary = ({ allData }: { allData: { summary: string } }) => {
  const { summary } = allData;
  return (
    <Section title="Summary">
      <p className="text-gray-700">
        {summary}
      </p>
    </Section>
  )
};

const Experience = ({ allData }: { allData: { experiences: Array<{ company: string, startDate: string, endDate: string, title: string, location: string, description: string }> } }) => {
  const { experiences } = allData;
  return (
    <Section title="Experience">
      {
        experiences.map((exp, i) => {
          const { company, startDate, endDate, title, description, location } = exp
          return (
            <div className="mb-6" key={i}>
              <h3 className="font-bold text-gray-800">{title}</h3>
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">
                  {`${company} , ${location} `}
                </p>
                <p>{`${startDate} - ${endDate}`}</p>
              </div>
              <ul className="list-inside text-gray-700 mt-2">
                <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap">
                  {description}
                </pre>
              </ul>
            </div>
          )
        })
      }
    </Section>
  )
};


const CustomSection = ({ allData }: { allData: { customSections: Array<{ title: string, description: string, year: string, subtitle: string }> } }) => {
  const { customSections } = allData;
  return (
    <Section title={'Additional'}>
      {
        customSections.map((exp, i) => {
          const { description, year, subtitle, } = exp
          return (
            <div className="mb-6" key={i}>

              <div className="flex justify-between">
                <h3 className="font-bold text-gray-800">{subtitle}</h3>
                <p className="text-gray-500 text-sm">
                  {`${year} `}
                </p>
              </div>
              <ul className="list-inside text-gray-700 mt-2">
                <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap">
                  {description}
                </pre>
              </ul>
            </div>
          )
        })
      }
    </Section>
  )
};

const Education = ({ allData }: { allData: { education: Array<{ degree: string, startDate: string, endDate: string, organization: string, location: string }> } }) => {
  const { education } = allData;
  return (
    <Section title="Education">
      {
        education.map((edu, i) => {
          const { degree, startDate, endDate, organization, location } = edu
          return (
            <div key={i}>
              <h3 className="font-bold text-gray-800">{degree}</h3>

              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">
                  {`${organization} , ${location} `}
                </p>
                <p>{`${startDate} - ${endDate}`}</p>
              </div>

            </div>
          )
        })
      }
    </Section>
  )
};


const Activities = ({ allData }: { allData: { activities: Array<{ title: string, employer: string, startDate: string, endDate: string, description: string }> } }) => {
  const { activities } = allData;
  return (
    <Section title="Achievements">
      {
        activities.map((activity, i) => {
          const { title, employer, startDate, endDate, description } = activity
          return (
            <div key={i}>
              <h3 className="font-bold text-gray-800">{title}</h3>

              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">
                  {`${employer} `}
                </p>
                <p>{`${startDate} - ${endDate}`}</p>
              </div>

              <p>{description}</p>

            </div>
          )
        })
      }
    </Section>
  )
}



const Skills = ({ allData }: { allData: { skills: Array<{ name: string; level: string }> } }) => {
  const { skills } = allData;
  const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <Section title="Skills">
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
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
    </Section>
  )
};


const Languages = ({ allData }: { allData: { languages: Array<{ name: string; level: string }> } }) => {
  const { languages } = allData;

  return (
    <Section title="Languages">
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <ul className="space-y-2">
          {languages.map((lang, index) => (
            <li key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{lang.name} - {lang.level}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
};

export const Onyx = ({ allData }: { allData: any }) => {
  return (
    <NextUIProvider>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md h-full">
        <Header allData={allData} />
        <div className="border-b-2 border-gray-300 my-4"></div>
        <Summary allData={allData} />

        {/* Experiences */}

        {allData.experiences.length > 0 && <>
          <div className="border-b-2 border-gray-300 my-4"></div>
          <Experience allData={allData} />
        </>
        }


        {/* Education */}
        {allData.education.length > 0 &&
          <>
            <div className="border-b-2 border-gray-300 my-4"></div>
            <Education allData={allData} />
          </>
        }

        {/* Custom Section */}
        {allData.customSections && allData.customSections.length > 0 &&
          <>
            <div className="border-b-2 border-gray-300 my-4"></div>
            <CustomSection allData={allData} />
          </>
        }

        {/* Activities */}
        {allData.activities && allData.activities.length > 0 && (
          <>
            <div className="border-b-2 border-gray-300 my-4"></div>
            <Activities allData={allData} />
          </>
        )}

        {/* Skills */}

        {allData.skills && allData.skills.length > 0 && <>
          <div className="border-b-2 border-gray-300 my-4"></div>
          <Skills allData={allData} />
        </>}

        {/* Languages */}

        {allData.languages && allData.languages.length > 0 && <>
          <div className="border-b-2 border-gray-300 my-4"></div>
          <Languages allData={allData} />
        </>}

      </div>
    </NextUIProvider>
  );
};

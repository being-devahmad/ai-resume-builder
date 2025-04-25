import { MapPin, Phone, Mail, Github, Linkedin, Globe, } from "lucide-react";


const ProfileLinks = ({ allData }: { allData: { github: string; linkedin: string; portfolio: string } }) => {
  const { github, linkedin, portfolio } = allData
  return (
    <>
      <div className="flex gap-4 mt-3">
        {portfolio &&
          <a href={`${portfolio}`} className="flex items-center gap-1">
            <Globe size={12} />
          </a>
        }
        {linkedin &&
          <a href={`${linkedin}`} className="flex items-center gap-1">
            <Linkedin size={12} />
          </a>
        }
        {github && <a href={`${github}`} className="flex items-center gap-1">
          <Github size={12} />
        </a>
        }
      </div>
    </>
  )
}

const Header = ({ allData }: { allData: { firstName: string; lastName: string; city: string; country: string; email: string; phone: string; github: string; linkedin: string; portfolio: string } }) => {
  const { firstName, lastName, city, country, email, phone } = allData
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
      <h1 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h1>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1">
          <MapPin size={12} />
          <span>{city}, {country}</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone size={12} />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={12} />
          <span>{email}</span>
        </div>

      </div>
      <ProfileLinks allData={allData} />
    </div>
  );
};

const Summary = ({ allData }: { allData: { summary: string } }) => {
  const { summary } = allData
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-3">Summary</h2>
      <p className="text-gray-700">
        {summary}
      </p>
    </div>
  )
}

const Experience = ({ allData }: { allData: { experiences: Array<{ company: string; startDate: string; endDate: string; title: string; location: string; description: string }> } }) => {
  const { experiences } = allData
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Experience</h2>
      <div className="space-y-6">
        {
          experiences.map((exp, i) => {
            const { company, startDate, endDate, title, location, description } = exp
            return (
              <div key={i}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">{company}</h3>
                    <p className="text-gray-600">{title}</p>
                  </div>
                  <div className="text-right">
                    <p>{`${startDate} to ${endDate}`}</p>
                    <p className="text-gray-600">{location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  <pre className="font-sans max-w-[100%] break-words whitespace-pre-wrap">
                    {description}
                  </pre>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const Education = ({ allData }: { allData: { education: Array<{ degree: string; startDate: string; endDate: string; organization: string; location: string }> } }) => {
  const { education } = allData;
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Education</h2>
      <div>
        {
          education.map((edu, i) => {
            const { degree, startDate, endDate, organization, location } = edu
            return (
              <div className="flex justify-between items-start" key={i}>
                <div>
                  <h3 className="font-bold">{organization}</h3>
                  <p className="text-gray-600">{location}</p>
                </div>
                <div className="text-right">
                  <p>{`${startDate} to ${endDate}`}</p>
                  <p className="text-gray-600">{degree}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


const Activities = ({ allData }: { allData: { activities: any[] } }) => {
  const { activities } = allData;
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Achievements</h2>
      <div>
        {
          activities && activities.map((activity, i) => {
            const { title, employer, startDate, endDate, description, current } = activity
            return (
              <div className="flex justify-between items-start" key={i}>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-gray-600">{employer}</p>
                </div>
                <div className="text-right">
                  <p> {startDate} - {endDate ? endDate : (!endDate && current && "present")}</p>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const CustomSection = ({ allData }: { allData: { customSections: any[] } }) => {
  const { customSections } = allData;
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Achievements</h2>
      <div>
        {
          customSections && customSections.map((customSec, i) => {
            const { description, year, subtitle, title } = customSec
            return (
              <div className="flex justify-between items-start" key={i}>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-gray-600">{subtitle}</p>
                </div>
                <div className="text-right">
                  <p> {year}</p>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


const Languages = ({ allData }: { allData: { languages: { name: string; level: string }[] } }) => {
  const { languages } = allData

  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Languages</h2>
      <div className="grid grid-cols-3 gap-6">
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
    </div>
  )
}


const Skills = ({ allData }: { allData: { skills: Array<{ name: string; level: string }> } }) => {
  const { skills } = allData
  const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-bold text-red-600 mb-4">Skills</h2>
      <div className="grid grid-cols-3 gap-6">
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
    </div>
  )
}


const Bronzor = ({ allData }: { allData: any }) => {
  return (
    <div className="max-w-4xl mx-auto min-h-screen border">
      <Header allData={allData} />
      {allData.summary && <Summary allData={allData} />}
      {allData.experience && allData.experience.length > 0 && <Experience allData={allData} />}
      {allData.education && allData.education.length > 0 && <Education allData={allData} />}
      {allData.activities && allData.activities.length > 0 && <Activities allData={allData} />}
      {allData.customSections && allData.customSections.length > 0 && <CustomSection allData={allData} />}
      {allData.skills && allData.skills.length > 0 && <Skills allData={allData} />}
      {allData.languages && allData.languages.length > 0 && <Languages allData={allData} />}
    </div>
  );
};

export default Bronzor;
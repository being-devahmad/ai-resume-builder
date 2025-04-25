import { MapPin, Phone, Mail } from 'lucide-react';
import React from 'react';

const Header = ({ allData }: {
  allData: {
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    postalCode: string;
    phone: string;
    email: string;
    jobTitle: string;
  }
}) => {
  const { firstName, lastName, city, country, postalCode, phone, email, } = allData;
  return (
    <div className="bg-amber-600 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-1">{`${firstName} ${lastName}`}</h1>
        {/* <p className="text-xl mb-4">Creative and Innovative Web Developer</p> */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{`${country}, ${city} ${postalCode}`}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Summary = ({ allData }: { allData: { summary: string } }) => {
  const { summary } = allData;
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Summary</h2>
      <p className="text-gray-700">
        {summary}
      </p>
    </div>
  );
};

const Experience = ({ allData }: {
  allData: {
    experiences: Array<{
      company: string;
      startDate: string;
      endDate: string;
      title: string;
      location: string;
      description: string;
    }>
  }
}) => {
  const { experiences } = allData;
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Experience</h2>
      <div className="space-y-6">
        {
          experiences.map((exp, i) => {
            const { company, startDate, endDate, title, location, description } = exp
            return (
              <div key={i}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">{company}</h3>
                    <p className="text-gray-600">{title}</p>
                  </div>
                  <div className="text-right">
                    <p>{`${startDate} to ${endDate}`}</p>
                    <p className="text-gray-600">{location}</p>
                  </div>
                </div>
                <ul className="list-disc ml-5 text-gray-700 text-sm">
                  {description}
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

const Education = ({ allData }: {
  allData: {
    education: Array<{
      degree: string;
      startDate: string;
      endDate: string;
      organization: string;
      location: string;
    }>
  }
}) => {
  const { education } = allData;
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Education</h2>
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
  );
};


const Skills = ({ allData }: { allData: { skills: Array<{ category: string; items: string[] }> } }) => {
  const { skills } = allData

  const renderSkillItem = (item: string | { category: string; items: string[] }) => {
    if (typeof item === 'string') {
      return <li className="ml-4">{item}</li>;
    } else if (typeof item === 'object' && item !== null) {
      return (
        <li>
          {item.items.length > 0 && <h3 className="font-semibold">{item.category}</h3>}
          <ul className="list-disc list-inside">
            {Array.isArray(skills) ? skills.map((skill, index) => (
              <React.Fragment key={index}>
                {renderSkillItem(skill)}
              </React.Fragment>
            )) : null}
          </ul>
        </li>
      );
    }
    return null;
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold border-b border-amber-600 pb-1 mb-3">Skills</h2>
      <div className="space-y-4">
        {skills?.map((skill, index) => {
          const { category, items } = skill
          return (
            <div key={index} className="flex gap-3">
              {items.length > 0 && <div className="font-bold">{category}:</div>}
              <div>{items.join(", ")}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};


export const Pikachu = ({ allData }: { allData: any }) => {

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg">
      <Header allData={allData} />
      <div className="flex">
        wert
        <div className="w-1/3 p-6 bg-gray-50">
          <Skills allData={allData} />
        </div>
        <div className="w-2/3 p-6">
          <Summary allData={allData} />
          <Experience allData={allData} />
          <Education allData={allData} />
        </div>
      </div>
    </div>
  );
};

export default Pikachu;
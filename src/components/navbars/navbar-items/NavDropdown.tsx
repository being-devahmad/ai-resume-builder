import React from "react";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

interface NavDropdownContentProps {
  items: {
    title: string;
    description: string;
    icon: string;
    href: string;
    featured?: boolean;
  }[];
}

const NavDropdownContent = ({ items }: NavDropdownContentProps) => {

  const navigate = useNavigate()

  return (
    <div className="w-[400px] p-0">
      {items.map((subItem) => (
        <React.Fragment key={subItem.title}>
          {subItem.featured ? (
            <a href={subItem.href} className="flex items-center gap-4 p-4 hover:bg-slate-50">
              <div className="flex-shrink-0">
                <img src={subItem.icon || "/placeholder.svg"} alt="" className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  <span className="text-blue-500">{subItem.title}</span>
                </h3>
                <p className="text-sm text-slate-600">{subItem.description}</p>
              </div>
            </a>
          ) : (
            <a href={subItem.href} className="flex items-start gap-4 p-3 hover:bg-slate-50">
              <div className="mt-1 flex-shrink-0">
                <img src={subItem.icon} alt="" className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">{subItem.title}</div>
                <p className="text-sm text-slate-600">{subItem.description}</p>
              </div>
            </a>
          )}
        </React.Fragment>
      ))}
      <div className="border-t p-4">
        <Button onClick={()=> navigate('/select')} className="w-full bg-[#F5B91A] hover:bg-[#DCA518] text-black font-medium rounded">
          Create Your Resume Now
        </Button>
      </div>
    </div>
  );
};

export default NavDropdownContent;
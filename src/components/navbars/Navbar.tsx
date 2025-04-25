import { useAuth } from "@/hooks/useAuth";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icons/optimCvLogo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import NavDropdownContent from "./navbar-items/NavDropdown";
import { ClipboardListIcon, FileQuestion, FileText, NotebookText, UserPen } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  const menuItems = [
    {
      title: "Tools",
      items: [
        {
          title: "Resume Builder",
          description: "Create a resume in 5 minutes. Get the job you want.",
          icon: "/placeholder.svg?height=40&width=40",
          href: "/resume-builder",
          featured: true,
        },
      ],
    },
    {
      title: "Resume",
      items: [
        { title: "Resume Templates", description: "Find the perfect resume template." },
        { title: "Resume Checker", description: "Get your resume checked and scored." },
        // Additional items here...
      ],
    },
    {
      title: "CV",
      items: [
        { title: "CV Builder", description: "Create a CV in 5 minutes.", icon: FileText },
        { title: "CV Templates", description: "Find the perfect CV template.", icon: NotebookText },
        // Additional items here...
      ],
    },
    { title: "Pricing", href: "/pricing" },
    { title: "Career Blog", href: "/career" },
    { title: "Business Solutions", href: "/company" },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3 min-h-[56px]">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo || "/placeholder.svg"} alt="logo" width={100} className="h-auto" />
        </NavLink>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex items-center space-x-4">
          <NavigationMenuList className="flex space-x-4">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="px-3 py-2 hover:text-emerald-600">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavDropdownContent items={item.items} />
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className="px-3 py-2 hover:text-emerald-600"
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
            {isAuthenticated ? (
              <NavigationMenuLink
                href="/dashboard"
                className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
              >
                Dashboard
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href="/signin"
                className="px-3 py-2 hover:text-emerald-600"
              >
                Sign In
              </NavigationMenuLink>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;

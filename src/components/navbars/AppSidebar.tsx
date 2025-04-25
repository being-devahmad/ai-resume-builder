import {  Home, LucidePaperclip, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icons/optimCvLogo.png";
import { NavUser } from "../ui/nav-user";
import { useAuth } from "@/hooks/useAuth";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Templates",
    url: "/select",
    icon: LucidePaperclip,
  },
];

export function AppSidebar() {
  const { user } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="h-full">
          <SidebarGroupLabel className="my-4">
            <NavLink to={"/"} className={"flex items-center justify-center"}>
              <img src={logo} width={140} />
            </NavLink>
          </SidebarGroupLabel>
          <SidebarGroupContent className="h-full">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      // className={({ isActive }) =>
                      //   `${isActive ? "font-bold bg-red-300!" : ""}`
                      // }
                      to={item.url}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem className="mt-auto" key={"settings"}>
          <SidebarMenuButton asChild>
            <NavLink to={"/dashboard/settings"}>
              <Settings />
              <span>Settings</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <NavUser user={user!} />
      </SidebarFooter>
    </Sidebar>
  );
}

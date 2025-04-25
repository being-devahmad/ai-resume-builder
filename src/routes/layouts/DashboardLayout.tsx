import { Outlet } from "react-router-dom";
// import { BellIcon } from "lucide-react";
// import { Button } from "@nextui-org/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navbars/AppSidebar";
// import SearchModal from "@/components/SearchModal";
import ShinyButton from "@/components/ShinyButton";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <div className="flex w-full shadow-sm  items-center gap-4 p-2 py-4">
            <SidebarTrigger className="p-0 " />
            <div className="flex items-center justify-between w-full">
              <h2 className="text-2xl font-bold hidden md:block">
                My Dashboard
              </h2>
              <div className="flex items-center gap-3 ml-auto">
                {/* <SearchModal /> */}
                {/* <Button
                  isIconOnly
                  className="bg-slate-100 hover:bg-slate-200 rounded-full size-10"
                >
                  <BellIcon color="black" />
                </Button> */}
                {/* <Button
                  asChild
                  className="flex items-center justify-center bg-blue-700 hover:bg-blue-400 font-bold"
                > */}
                {/* <NavLink to={"/select"}>
                    <PlusCircle />
                    Create New
                  </NavLink> */}
                {/* </Button> */}
                <ShinyButton className="h-10" href="/select">
                  Create New
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="p-2">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;

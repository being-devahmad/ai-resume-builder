import CreateCard from "@/components/cards/CreateCard";
// import CreateJobApplicationCard from "@/components/cards/CreatJobApplicationCard";
import DashBoardTabs from "@/components/tabs/DashBoardTabs";
// import TrendingJobs from "@/components/TrendingJobs";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  // console.log("currentUser-->", user)
  const navigate = useNavigate();



  return (
    <div className="px-4 ">
      <div className="flex mt-3 md:flex-row flex-col items-start gap-2 w-full justify-between">
        <div className="w-[290px]">
          <h2 className="text-2xl font-bold">Hey, {user?.email}!</h2>
          <p className="text-gray-500 mt-2">What do you want to create.</p>
        </div>
        <div className="flex gap-4 items-center md:flex-row flex-col justify-evenly">
          <CreateCard
            handleClick={() => navigate("/select")}
            title="Resume"
            subTitle="Better resume builder"
          />
          {/* <CreateCard
            handleClick={() => navigate("/")}
            title="Cover Letter"
            subTitle="Make better cover letters"
          /> */}
          
        </div>
      </div>
      <DashBoardTabs />
      {/* <div className="flex md:flex-row flex-col gap-4">
        <TrendingJobs />
        <CreateJobApplicationCard />
      </div> */}
    </div>
  );
};

export default Dashboard;

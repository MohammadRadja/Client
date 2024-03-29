import { BiHomeSmile, BiListCheck, BiTime, BiMoney } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";
import LeftSidebarLink from "../../atoms/LeftBarList";
import { BsNewspaper } from "react-icons/bs";
import { useAuthUser } from "react-auth-kit";

const LeftSidebar = () => {
  const user = useAuthUser();

  return (
    <div className="fixed hidden lg:block bg-white w-[300px] py-2 px-4 h-screen">
      <div className="flex flex-col text-secondary gap-2 mt-4">
        <p className="font-semibold text-lg mb-2">
          Haloo!!!<br/> 
          <span className="font-bold text-primary mb-2">{user().name}</span>
        </p>
        <LeftSidebarLink icon={<BiHomeSmile />} text="Home" to="/home" />
        <LeftSidebarLink
          icon={<BiListCheck />}
          text="Activity"
          to="/activity"
        />
        <LeftSidebarLink
          icon={<BiTime />}
          text="Time Management"
          to="/timeManagement"
        />
        <LeftSidebarLink
          icon={<BiMoney />}
          text="Financial Record"
          to="/financialRecord"
        />
        <LeftSidebarLink
          icon={<GiWeightLiftingUp />}
          text="Diet Plan"
          to="/dietPlan"
        />
        <LeftSidebarLink
          icon={<BsNewspaper />}
          text="Health Article"
          to="/blog"
        />
      </div>
      <div className="absolute bottom-8 mb-8">
        <p className="text-[15px] text-primary">· LifeSyncHub © 2023</p>
      </div>
    </div>
  );
};

export default LeftSidebar;

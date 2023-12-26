import { BiHomeSmile, BiListCheck, BiTime, BiMoney } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";
import LeftSidebarLink from "../../atoms/LeftBarList";
// import { useSession } from "next-auth/react";
import { BsChevronDown } from "react-icons/bs";
import { useAuthUser } from "react-auth-kit";

const LeftSidebar = () => {
  const user = useAuthUser();
  //   const { data: session } = useSession();

  return (
    <div className="fixed hidden lg:block bg-white w-[300px] py-2 px-4 h-screen ">
      <div className="flex flex-col gap-2 mt-4">
        <p>
          Halooo!!,<span className="font-bold mb-2">{user().name}</span>
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

     

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
          2022
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;

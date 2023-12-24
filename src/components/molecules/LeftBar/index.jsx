    import React from "react";

    import LeftSidebarLink from "../../atoms/LeftBarList";
    // import { useSession } from "next-auth/react";
    import { BsChevronDown } from "react-icons/bs";

    const LeftSidebar = () => {
    //   const { data: session } = useSession();

    return (
        <div className="px-4 fixed mt-5 hidden lg:block">
        <div className="flex flex-col gap-2">
            <LeftSidebarLink
            //   image={session?.user?.image}
            //   text={session?.user?.name}
            />
            <LeftSidebarLink image="../images/friends.png" text="Friends" />
            <LeftSidebarLink image="../images/group.png" text="Groups" />
            <LeftSidebarLink image="../images/market.png" text="Marketplace" />
            <LeftSidebarLink image="../images/save.png" text="Saved" />
            <LeftSidebarLink image="../images/pages.png" text="Pages" />
            <LeftSidebarLink image="../images/events.png" text="Events" />
            <LeftSidebarLink image="../images/most_recent.png" text="Most Recent" />

            <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
            <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
                <BsChevronDown />
            </div>
            <h1 className="text-[16px] font-medium">See More</h1>
            </div>

            <p className="text-[14px] text-gray-500 mt-2">
            Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
            2022
            </p>
        </div>
        </div>
    );
    };

    export default LeftSidebar;

// import React from "react";
import { BsMessenger } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { BiHomeSmile, BiListCheck, BiTime, BiMoney} from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect} from "react";

const Navbar = () => {
  const user = useAuthUser();
  const signOut = useSignOut();

  //Navigasi Icon
  const [selectedIcon, setSelectedIcon] = useState('home');
  const handleIconClick = (IconName) => {
    setSelectedIcon(IconName);
  };
 
  const location = useLocation();
  useEffect(() => {
    // Update selectedIcon berdasarkan path yang aktif (location.pathname)
      if (location.pathname === '/home') {
        setSelectedIcon('home');
      } else if (location.pathname === '/activity') {
        setSelectedIcon('activity');
      } else if (location.pathname === '/timeManagement') {
        setSelectedIcon('timeManagement');
      } else if (location.pathname === '/financialRecord') {
        setSelectedIcon('financialRecord');
      } else if (location.pathname === '/dietPlan') {
        setSelectedIcon('dietPlan');
      } else {
        setSelectedIcon('');
      }
    }, [location.pathname]); // Jalankan efek setiap kali location.pathname berubah

  
  return (
    <div className="py-2 px-4 bg-white shadow flex justify-between top-0 sticky z-50">
       <Link to='/home' className="flex items-center">
        <img src="/images/logo.png" alt="logo" className='w-10 h-10' />
        </Link>

      {/* Navbar Center */}
      <div className="hidden lg:flex items-center justify-center gap-[50px] text-[30px] text-gray-500">
      <Link to='/home'>
        <BiHomeSmile
            style={selectedIcon === 'home' ? { borderBottom: '3px solid blue' } : {}}
            onClick={() => handleIconClick('home')}
          />
      </Link>
      <Link to='/activity'>
      <BiListCheck
        onClick={() => handleIconClick('activity')}
        style={{
          borderBottom: selectedIcon === 'activity' ? '3px solid blue' : 'none',
        }}
      />
      </Link>
      <Link to="/timeManagement">
          <BiTime
            style={{ borderBottom: selectedIcon === 'timeManagement' ? '3px solid blue' : 'none' }}
            onClick={() => handleIconClick('timeManagement')}
          />
      </Link>
      <Link to="/financialRecord">
          <BiMoney
            style={{ borderBottom: selectedIcon === 'financialRecord' ? '3px solid blue' : 'none' }}
            onClick={() => handleIconClick('financialRecord')}
          />
        </Link>
        <Link to="/dietPlan">
          <GiWeightLiftingUp
            style={{ borderBottom: selectedIcon === 'dietPlan' ? '3px solid blue' : 'none' }}
            onClick={() => handleIconClick('dietPlan')}
          />
        </Link>
      </div>
      {/* Navbar Center End */}

      {/* Navbar Right */}
      <div className="flex items-center gap-4">
        {/* <div className="icon_wrapper text-[28px]">
          <CgMenuGridO />
        </div>

        <div className="icon_wrapper text-[20px]">
          <BsMessenger />
        </div> */}

        {/* <div className="icon_wrapper text-[20px]">
          <IoNotifications />
        </div> */}
        <button
          className="icon_wrapper text-[20px]"
          onClick={() => {
            signOut();
          }}
        >
          <IoMdLogOut />
        </button>
        <p>
            Halo!!,<span className="font-bold">{user().name}</span>
        </p>
        {/* <img
          className="w-[44px] cursor-pointer rounded-full"
          //   src={session?.user?.image}
          alt="dp"
          // onClick={signOut}
        /> */}
      </div>
        {/* Navbar Right End */}

    </div>
  );
};

export default Navbar;
